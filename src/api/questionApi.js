import {createQuestion, updateQuestion, deleteQuestion} from "../graphql/mutations";
import {searchQuestions} from "../graphql/queries";
import {API, graphqlOperation} from '@aws-amplify/api'

export const ApiRequest = {
    requests: {
        listQuestion : async (filter) => {
            let questions = await API.graphql(graphqlOperation(searchQuestions, {filter, sort: { direction: 'desc', field: 'createdAt' }}))
            questions.data.searchQuestions.items.map((item) => {
                item.data = JSON.parse(item.data)
            })
            return questions
        },
        saveQuestion : async (state) => {
            if (!!state.id) {
                let {createdAt, updatedAt, tests, data, ...input} = state
                try {
                    data = JSON.stringify(data)
                    let result = await API.graphql(graphqlOperation(updateQuestion, {input: {data, ...input}}))
                    return result
                } catch (ex) {
                    console.log(ex)
                }
            } else {
                let {id, data, ...input} = state
                try {
                    data = JSON.stringify(data)
                    let result = await API.graphql(graphqlOperation(createQuestion, {input: {data, ...input}}))
                    return  result
                } catch (ex) {
                    console.log(ex)
                }
            }
        },
        deleteQuestionById : async (questionId) => {
            try {
                let result = await API.graphql({
                        query: deleteQuestion,
                        variables: {input: {id: questionId}}
                    }
                )
                return result
            } catch (ex) {
                console.log(ex)
            }
        }
    }
}

export const { saveQuestion, listQuestion, deleteQuestionById} = ApiRequest.requests
export default ApiRequest.requests