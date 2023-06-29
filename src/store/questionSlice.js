import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { createQuestion, updateQuestion } from "../graphql/mutations";
import {API, graphqlOperation} from '@aws-amplify/api'

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        id: '',
        prompt: 'Please enter question prompt.',
        choices: [
            { key: 1, value: 'This is choice 1.' },
            { key: 2, value: 'This is choice 2.' },
            { key: 3, value: 'This is choice 3.' },
            { key: 4, value: 'This is choice 4.' },
        ]
    },
    reducers: {
        updatePrompt: (state, action) => {
            state.prompt = action.payload
        },
        updateChoice: (state, action) => {
            let {key, value} = action.payload
            state.choices.forEach((choice) => {
                if (choice.key == key) {
                    choice.value = value
                }
            })
        },
        persistQuestion: (state) => {
            if (!!state.id) {

            } else {
                const newQuestion = async () => {
                    try {
                        console.log(graphqlOperation(createQuestion, {input: state}))
                        console.log(state)
                        window.ss = state
                        window.x = graphqlOperation(createQuestion, {input: state})
                        await API.graphql(graphqlOperation(createQuestion, {input: state}))
                    } catch (ex) {
                        console.log(ex)
                    }
                    
                }

                newQuestion()
            }
        }
    }
})

export const {updatePrompt, updateChoice, persistQuestion} = questionSlice.actions

export default questionSlice.reducer