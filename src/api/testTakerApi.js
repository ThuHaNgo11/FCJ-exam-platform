import {API, graphqlOperation} from "@aws-amplify/api";
import {createResponse, createSession} from "../graphql/mutations";


export const createNewSession = async (sessionExamId) => {
    try {
        let result = await API.graphql(graphqlOperation(createSession, {input: {sessionExamId}}))
        return result.data.createSession.id
    } catch (e) {
        console.log(e)
    }
}

export const submitSessionResponse = async (sessionResponseData) => {
    console.log(sessionResponseData)
    let {responseData, sessionId} = sessionResponseData

    let createResponseData = await Promise.all(
        responseData.data.map(
            async (response) => {
                let {questionId, answer} = response
                let result = await API.graphql(graphqlOperation(createResponse, {
                    input: {
                        responseSessionId: sessionId,
                        responseQuestionId: questionId,
                        data: {
                            answer
                        }
                    }
                }))
                return result
            }
        )
    )

    return createResponseData
}