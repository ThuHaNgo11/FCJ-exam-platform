import React, {useEffect, useState} from 'react';

// import UI components
import {
    View,
    Heading,
    Button,
    Flex,
    Text,
    Collection
} from '@aws-amplify/ui-react';
import {useParams} from 'react-router';

import {getExamForSession} from '../api/examApi';
import {formatDate} from "../hooks/utils";

const initialState = {}

const TakeExamPage = () => {
    // states
    let {examid, sessionid} = useParams()

    let [examData, setExamData] = useState({})

    let [isTestStarted, setIsTestStarted] = useState(false)

    let [isTestLoaded, setIsTestLoaded] = useState(false)

    let [responseData, setResponseData] = useState ({})

    useEffect(() => {
        const fetchExamData = async () => {
            let data = await getExamForSession(examid)
            setExamData(data.data.getExam)
            setIsTestLoaded(true)
            console.log(data.data.getExam)
        }
        fetchExamData()
    }, [examid])

    const handleBeginTest = () => {
        setIsTestStarted(true)
    }

    return (
        <View>
            {
                !isTestLoaded ? (
                    <Text>Please wait while the test is loading...</Text>
                ) : (
                    <>
                        <Heading level={3}>{examData.data.name}</Heading>
                        <Flex>
                            <Text>Exam Date: {formatDate(examData.date)}</Text>
                            {
                                examData.org &&
                                (<Text>Prepared for: {examData.org}</Text>)
                            }
                        </Flex>
                        <Flex>
                            <Text>{examData.data.description}</Text>
                        </Flex>
                        <Flex>
                            <Text>{examData.Test.data.description}</Text>
                        </Flex>
                        {
                            !isTestStarted ? (
                                <Button onClick={handleBeginTest}>Begin</Button>
                            ) : (
                                <View>
                                    <Collection items={examData.Test.Questions.items} type="list" direction="column" gap="20px">
                                        {
                                            (item, index) => (
                                                <View key={item.question.id}>
                                                    <Text>{item.question.prompt}</Text>

                                                    <Collection items={item.question.choices}>
                                                        {
                                                            (choice, index) => {
                                                                return (
                                                                    <Text>{choice.value}</Text>
                                                                )
                                                            }
                                                        }
                                                    </Collection>
                                                </View>
                                            )
                                        }
                                    </Collection>
                                </View>
                            )
                        }
                    </>
                )
            }
        </View>
    )
}


export default TakeExamPage;