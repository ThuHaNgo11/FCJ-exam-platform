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

        return result
    } catch (e) {
        console.log(e)
    }
}