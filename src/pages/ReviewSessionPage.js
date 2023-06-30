import {View} from "@aws-amplify/ui-react";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getSessionWithScore} from "../api/scoreApi";

const ReviewSessionPage = () => {
    let {sessionid} = useParams()

    useEffect(() => {
        const fetchSessionDataWithScore = async () => {
            let result = await getSessionWithScore(sessionid)
            console.log(result)
        }

        fetchSessionDataWithScore()
    }, [sessionid])

    return (
        <View>
            Review and certificate
        </View>
    )
}

export default ReviewSessionPage