import { Heading, TextAreaField, View, TextField, Loader, Flex, Button } from "@aws-amplify/ui-react"
import { saveQuestion } from "../../api/questionApi";
import { useState} from "react"
import { useImmer } from "use-immer";
import {delay, getImmerChangeHandler} from "../../hooks/utils";
import {useLocation, useNavigate} from "react-router";

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
    const location = useLocation()

    const navState =  location.state|| initialState

    const [formState, setFormState] = useImmer(navState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

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

        const field = (formState.hasOwnProperty('id')) ? 'createQuestion' : 'updateQuestion'

        saveQuestion(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                setFormState(initialState)
                setIsSubmitting(false)
                delay(1000).then(
                    () => navigate('/questions', { replace:true})
                )
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
            <Button onClick={() => navigate('/questions', { replace:true})}>Cancel</Button>
        </View>
    )
}

export default QuestionForm