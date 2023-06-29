import {createQuestion, updateQuestion} from "../graphql/mutations";
import {listQuestions} from "../graphql/queries";
import {API, graphqlOperation} from '@aws-amplify/api'

export const ApiRequest = {
    requests: {
        listQuestion : async (filter) => {
            let questions = await API.graphql(graphqlOperation(listQuestions))
            console.log(questions)
            return questions
        },
        addQuestion: async (state) => {
            let {id, ...input} = state
            try {
                let result = await API.graphql(graphqlOperation(createQuestion, {input: input}))
                return result
            } catch (ex) {
                console.log(ex)
            }
        },
        saveQuestion : async (state) => {
            if (!!state.id) {
                let {id, ...input} = state
                try {
                    let result = await API.graphql(graphqlOperation(updateQuestion, {input: input}))
                    return result
                } catch (ex) {
                    console.log(ex)
                }
            } else {
                let {id, ...input} = state
                try {
                    let result = await API.graphql(graphqlOperation(createQuestion, {input: input}))
                    return  result
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }
}

export const { saveQuestion, listQuestion, addQuestion } = ApiRequest.requests
export default ApiRequest.requests