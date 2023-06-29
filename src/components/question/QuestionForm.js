import {Heading, TextAreaField, View, TextField, Button, Loader} from "@aws-amplify/ui-react"
import {saveQuestion} from "../../api/questionApi";
import React, {useState} from "react"
import {useImmer} from "use-immer";
import {getImmerChangeHandler} from "../../hooks/utils";

const initialState = {
    prompt: 'Please enter question prompt.',
    choices: [
        {key: 1, value: 'This is choice 1.'},
        {key: 2, value: 'This is choice 2.'},
        {key: 3, value: 'This is choice 3.'},
        {key: 4, value: 'This is choice 4.'},
    ]
}

const QuestionForm = () => {

    const [formState, setFormState] = useImmer(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChanges = getImmerChangeHandler(setFormState)

    const handleChoiceChange = (event) => {
        setFormState(
            formState => {
                formState.choices.find(c => {
                    return c.key == event.target.dataset.key
                }).value = event.target.value
            }
        )
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        saveQuestion(formState)
            .then((data) => {
                console.log(data)
                setFormState(initialState)
                setIsSubmitting(false)
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
                        <TextField key={choice.key} data-key={choice.key} value={choice.value}
                            onChange={handleChoiceChange}
                            >
                        </TextField>
                    )
                )
            }
            <Button onClick={handleSaveButton}>
                {isSubmitting && <Loader/>}
                Save
            </Button>
        </View>
    )
}

export default QuestionForm