import { createQuestion, updateQuestion, deleteQuestion } from "../graphql/mutations";
import { searchQuestions } from "../graphql/queries";
import { API, graphqlOperation } from '@aws-amplify/api'
import { Storage } from "aws-amplify";

export const ApiRequest = {
    requests: {
        listQuestion: async (filter) => {
            let questions = await API.graphql(graphqlOperation(searchQuestions, { filter, sort: { direction: 'desc', field: 'createdAt' } }))

            await Promise.all(
                questions.data.searchQuestions.items.map(async (item) => {
                    item.data = JSON.parse(item.data)
                    if (!!item.data && !!item.data.image) {
                        item.data.imageUrl = await Storage.get(item.data.image)
                    }
                })
            )
            return questions
        },
        saveQuestion: async (state) => {
            if (!!state.id) {
                let { createdAt, updatedAt, tests, data, deletedImages, ...input } = state
                try {
                    data = JSON.stringify(data)
                    let result = await API.graphql(graphqlOperation(updateQuestion, { input: { data, ...input } }))
                    if (deletedImages && deletedImages.length > 0) {
                        await Promise.all(
                            deletedImages.map(async (file) => {
                                return await Storage.remove(file)
                            })
                        )
                    }
                    return result
                } catch (ex) {
                    console.log(ex)
                }
            } else {
                let { id, data, deletedImages, ...input } = state
                try {
                    data = JSON.stringify(data)
                    let result = await API.graphql(graphqlOperation(createQuestion, { input: { data, ...input } }))
                    if (deletedImages && deletedImages.length > 0) {
                        await Promise.all(
                            deletedImages.map(async (file) => {
                                return await Storage.remove(file)
                            })
                        )
                    }
                    return result
                } catch (ex) {
                    console.log(ex)
                }
            }
        },
        deleteQuestionById: async (questionId) => {
            try {
                let result = await API.graphql({
                    query: deleteQuestion,
                    variables: { input: { id: questionId } }
                }
                )
                return result
            } catch (ex) {
                console.log(ex)
            }
        }
    }
}

export const { saveQuestion, listQuestion, deleteQuestionById } = ApiRequest.requests
export default ApiRequest.requests