import React, {useEffect, useState} from 'react';

// import UI components
import {
    View,
    Heading,
    Button,
    Flex,
    Text,
    TextField,
    Collection,
    Radio,
    RadioGroupField
} from '@aws-amplify/ui-react';
import {useParams} from 'react-router';

// import API fucntions
import {getExamForSession} from '../api/examApi';

// import utils
import {delay, formatDate, getImmerChangeHandler} from "../hooks/utils";
import {useImmer} from "use-immer";
import {createNewSession, submitSessionResponse} from "../api/testTakerApi";
import {useNavigate} from "react-router";

const initialState = {
    username: "",
    email: ""
}

const TakeExamPage = () => {
    // states
    let {examid, sessionid} = useParams()

    let [examData, setExamData] = useState({})

    let [sessionId, setSessionId] = useState(sessionid)

    let [isTestStarted, setIsTestStarted] = useState(false)

    let [isTestLoaded, setIsTestLoaded] = useState(false)

    let [responseData, setResponseData] = useImmer({ data: []})

    let [userDetails, setUserDetails] = useImmer(initialState)

    let handleChange = getImmerChangeHandler(setUserDetails)

    let navigate = useNavigate()

    useEffect(() => {
        const fetchExamData = async () => {
            let data = await getExamForSession(examid)
            setExamData(data.data.getExam)
            setIsTestLoaded(true)
        }
        fetchExamData()
    }, [examid, sessionid])

    const handleBeginTest = () => {

        const createSession = async () => {
            if (sessionid === 'start') {
                let newSessionId = await createNewSession(examid, userDetails)
                setSessionId(newSessionId)
            }
        }

        createSession()

        setIsTestStarted(true)
    }

    const handleResponseUpdate = (event) => {
        setResponseData((responseData) => {
            responseData.data.push({
                "questionId": event.target.name,
                "answer": event.target.value
            })
        })
    }

    const handleSubmit = () => {
        let data = {
            responseData,
            sessionId
        }

        const submit = async () => {
            let result = await submitSessionResponse(data)
            console.log(result)
            delay(2000).then(
                () => navigate('/review/' + sessionId, { replace: true })
            )
        }
        submit()

    }

    return (
        <View>
            {
                !isTestLoaded ? (
                    <Text>Please wait while the test is loading...</Text>
                ) : (
                    <View>
                        <Heading level={3}>{examData.data.name}</Heading>
                        <Flex>
                            <Text>Exam Date: {formatDate(examData.date)}</Text>
                            {
                                examData.org &&
                                (<Text>Prepared for: {examData.org}</Text>)
                            }
                        </Flex>
                        <Flex>
                            <Text>{examData.Test.data.description}</Text>
                        </Flex>
                        <Flex direction="column">
                            <TextField label="Please enter your name" name="username" value={userDetails.username} onChange={handleChange}/>
                            <TextField label="Please enter your email" name="email" type="email" value={userDetails.email} onChange={handleChange}/>
                        </Flex>
                        {
                            !isTestStarted ? (
                                <Button onClick={handleBeginTest}>Begin</Button>
                            ) : (
                                <View>
                                    <Collection items={examData.Test.Questions.items} type="list" direction="column" gap="20px" searchNoResultsFound="No questions found">
                                        {
                                            (item, index) => (
                                                <View key={item.question.id}>
                                                    <RadioGroupField label={item.question.prompt} name={item.question.id} onChange={handleResponseUpdate}>
                                                        <Collection items={item.question.choices} type="list" direction="column" gap="20px">
                                                            {
                                                                (choice, index) => {
                                                                    return (
                                                                        <Radio key={choice.key} value={choice.key}>{choice.value}</Radio>
                                                                    )
                                                                }
                                                            }
                                                        </Collection>
                                                    </RadioGroupField>
                                                </View>
                                            )
                                        }
                                    </Collection>
                                    <Button onClick={handleSubmit}>Submit</Button>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </View>
    )
}


export default TakeExamPage;