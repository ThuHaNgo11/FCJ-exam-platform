import {Heading, View, Text, Flex, Card, Collection} from "@aws-amplify/ui-react";
import {useParams} from "react-router";
import {React, useState, useEffect} from "react";
import {getSessionWithScore} from "../api/scoreApi";
import {useImmer} from "use-immer";
import {formatDate} from "../hooks/utils";
import {FaCheckCircle, FaCross, FaTimes, FaTimesCircle} from "react-icons/fa";

const ReviewSessionPage = () => {
    const [allStates, setAllStates] = useImmer({})

    const [isPageLoaded, setIsPageLoaded] = useState(false)

    let {sessionid} = useParams()

    useEffect(() => {
        const fetchSessionDataWithScore = async () => {
            let result = await getSessionWithScore(sessionid)
            console.log(result)
            setIsPageLoaded(true)
            setAllStates(result)
        }

        fetchSessionDataWithScore()
    }, [sessionid])

    return (
        <Card>
            <Heading level={3}>Review Exam Session</Heading>
            {
                isPageLoaded && (
                    <View>
                        <Card>
                            <Flex>
                                <Text>Exam: {allStates.Exam.data.name}</Text>
                                <Text>Date: {formatDate(allStates.Exam.date)}</Text>
                            </Flex>
                        </Card>
                        <Card>
                            <Text>User name: {allStates.data.username}</Text>
                            <Text>User email: {allStates.data.email}</Text>
                        </Card>
                        <Card>
                            <Text>Score: {allStates.mark} / {allStates.highestMark}</Text>
                            <Text>Result: {allStates.scorePercentage >= 80 ? "PASSED" : "FAILED"}</Text>
                        </Card>
                        <Card>
                            <Heading level={4}>Answers</Heading>
                            <Collection items={allStates.Responses.items}>
                                {
                                    (item, index) => (
                                        <View key={index}>
                                            <Flex direction="column">
                                                <Text fontWeight="bold">{item.Question.prompt}</Text>
                                                <Flex direction="column">
                                                    {
                                                        item.Question.choices.map(
                                                            (choice) => (
                                                                <Flex alignItems="baseline" key={choice.key}>
                                                                    <Text>{choice.value} </Text>
                                                                    {
                                                                        (choice.key === parseInt(item.data.answer)) &&
                                                                        (choice.key !== item.Question.key) && <FaTimesCircle/>
                                                                    }
                                                                    {
                                                                        (choice.key === item.Question.key) && <FaCheckCircle/>
                                                                    }
                                                                </Flex>
                                                            )
                                                        )
                                                    }
                                                </Flex>
                                            </Flex>
                                        </View>
                                    )
                                }
                            </Collection>
                        </Card>
                    </View>
                )
            }

        </Card>
    )
}

export default ReviewSessionPage