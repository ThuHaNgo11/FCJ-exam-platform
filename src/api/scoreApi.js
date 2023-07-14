import {API} from "@aws-amplify/api";
import {getSession} from "../graphql/queries";

export const getSessionWithScore = async (sessionid) => {
    try {
        let result = await API.graphql({
            query: getSession,
            variables: {
                id: sessionid
            }
        })
        let session = result.data.getSession

        session.data = JSON.parse(session.data)
        session.Exam.data = JSON.parse(session.Exam.data)

        let questions = []
        let questionsMap = {}
        let responsesMap = {}

        session.Exam.Test.Questions.items.map(
            (it) => {
                questions.push(it.question.id)
                questionsMap[it.question.id] = it.question
            }
        )

        let mark = 0
        session.Responses.items.map(
            (it) => {
                it.data = JSON.parse(it.data)
                if (parseInt(it.data.answer) === it.Question.key) {
                    mark++
                }
                responsesMap[it.responseQuestionId] = it
                return it
            }
        )

        let highestMark =  questions.length

        let scorePercentage = Math.round(mark  * 100.0 / highestMark)

        return {
            ...session,
            questions,
            questionsMap,
            responsesMap,
            mark,
            highestMark,
            scorePercentage
        }
    } catch (e) {
        console.log(e)
    }
}