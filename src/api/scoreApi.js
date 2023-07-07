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
        session.Responses.items.map(
            (it) => {
                it.data = JSON.parse(it.data)
                return it
            }
        )

        let mark = 0
        session.Responses.items.map(
            (it) => {
                if (parseInt(it.data.answer) === it.Question.key) {
                    mark++
                }
            }
        )

        let highestMark = session.Exam.Test.Questions.items.length

        let scorePercentage = Math.round(mark  * 100.0 / highestMark)

        return {
            ...session,
            mark,
            highestMark,
            scorePercentage
        }
    } catch (e) {
        console.log(e)
    }
}