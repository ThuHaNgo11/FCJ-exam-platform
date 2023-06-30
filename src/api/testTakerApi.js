import {API, graphqlOperation} from "@aws-amplify/api";
import {createResponse, createSession, updateSession} from "../graphql/mutations";


export const createNewSession = async (sessionExamId, data) => {
    try {
        let result = await API.graphql(graphqlOperation(createSession, {input: {
            sessionExamId,
            data
        }}))
        console.log(result)
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
                        sessionID: sessionId,
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

