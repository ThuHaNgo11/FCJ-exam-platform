import { Heading, TextAreaField, View, TextField, Button } from "@aws-amplify/ui-react"
import { useSelector, useDispatch } from "react-redux"
import { updatePrompt, updateChoice, persistQuestion } from "../store/questionSlice"
import React from "react"

function QuestionForm() {
    const prompt = useSelector((state) => state.question.prompt)
    const choices = useSelector((state) => state.question.choices)

    const dispatch = useDispatch()

    return (
        <View>
            <Heading level={3}>Compose Question</Heading>
            <TextAreaField value={prompt} onChange={(event) => dispatch(updatePrompt(event.target.value))}></TextAreaField>
            {
                choices.map(
                    (choice, index) => (
                        <View key={choice.key}>
                            <TextField value={choice.value} onChange={(event) => dispatch(updateChoice({key: choice.key, value: event.target.value}))} />
                        </View>
                    )
                )
            }
            <Button onClick={(event) => dispatch(persistQuestion())}>Save</Button>
        </View>
    )
}

export default QuestionForm