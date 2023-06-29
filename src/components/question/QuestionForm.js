import { Heading, TextAreaField, View, TextField, Button, Loader, Flex } from "@aws-amplify/ui-react"
import { saveQuestion } from "../../api/questionApi";
import {useContext, useState} from "react"
import { useImmer } from "use-immer";
import { getImmerChangeHandler } from "../../hooks/utils";
import {QMContext} from "../../pages/QuestionManager";

const initialState = {
    prompt: 'Please enter question prompt.',
    key: 1,
    choices: [
        { key: 1, value: 'This is choice 1.' },
        { key: 2, value: 'This is choice 2.' },
        { key: 3, value: 'This is choice 3.' },
        { key: 4, value: 'This is choice 4.' },
    ]
}

const QuestionForm = () => {

    const [formState, setFormState] = useImmer(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {setNewFormLoad} = useContext(QMContext)

    const handleChanges = getImmerChangeHandler(setFormState)

    const handleChoiceChange = (event) => {
        setFormState(
            formState => {
                formState.choices.find(c => {
                    return c.key.toString() === event.target.dataset.key.toString()
                }).value = event.target.value
            }
        )
    }

    const handleKeyChange = (event) => {
        setFormState(
            formState => {
                formState.key = parseInt(event.target.dataset.key)
            }
        )
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        // (async () => {
        //     data = await saveQuestion(formState)
        //     console.log(data)
        //     setFormState(initialState)
        //     setIsSubmitting(false)
        // })()

        saveQuestion(formState)
            .then((data) => {
                console.log("Created new data", data.data.createQuestion)
                setFormState(initialState)
                setIsSubmitting(false)
                setNewFormLoad(data.data.createQuestion)
            }, (reason) => {
                console.log(reason)
            })
    }

    return (
        <View>
            <Heading level={3}>Compose Question</Heading>
            <TextAreaField name='prompt' value={formState.prompt} onChange={handleChanges}></TextAreaField>
            {
                formState.choices.map(
                    (choice, index) => (
                        <Flex key={choice.key}>
                            <TextField data-key={choice.key} value={choice.value}
                                       onChange={handleChoiceChange}
                            >
                            </TextField>
                            {
                                (choice.key === formState.key) ?
                                    <Button size="small" backgroundColor="green">Correct Answer</Button>
                                    : <Button size="small" data-key={choice.key} onClick={handleKeyChange}>Correct Answer</Button>
                            }
                        </Flex>
                    )
                )
            }
            <Button onClick={handleSaveButton}>
                {isSubmitting && <Loader />}
                Save
            </Button>
        </View>
    )
}

export default QuestionForm