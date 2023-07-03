import React, { useEffect, useState } from 'react';

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
    RadioGroupField, Loader,
    Image,
    Card
} from '@aws-amplify/ui-react';
import { useParams } from 'react-router';

// import API fucntions
import { getExamForSession } from '../api/examApi';

// import utils
import { delay, formatDate, getImmerChangeHandler } from "../hooks/utils";
import { useImmer } from "use-immer";
import { createNewSession, submitSessionResponse } from "../api/testTakerApi";
import { useNavigate } from "react-router";

import { FaArrowLeft, FaFlag, FaArrowRight } from "react-icons/fa";
import { Modal } from 'react-bootstrap';

const initialState = {
    username: "",
    email: ""
}

const TakeExamPage = () => {
    // states
    let { examid, sessionid } = useParams()

    let [examData, setExamData] = useState({})

    let [sessionId, setSessionId] = useState(sessionid)

    let [isTestStarted, setIsTestStarted] = useState(false)

    let [isTestLoaded, setIsTestLoaded] = useState(false)

    let [responseData, setResponseData] = useImmer({ data: [] })

    let [userDetails, setUserDetails] = useImmer(initialState)

    let handleChange = getImmerChangeHandler(setUserDetails)

    let [isSubmitting, setIsSubmitting] = useState(false)

    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [totalQuestion, setTotalQuestion] = useState(0)

    let [flaggedQuestions, setFlaggedQuestions] = useImmer([])

    let [reviewIsOpen, setReviewIsOpen] = useState(false)

    let navigate = useNavigate()

    useEffect(() => {
        const fetchExamData = async () => {
            let data = await getExamForSession(examid)
            console.log("Questions", data)
            setExamData(data.data.getExam)
            setTotalQuestion(data.data.getExam.Test.Questions.items.length)
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

        setIsSubmitting(true)

        const submit = async () => {
            let result = await submitSessionResponse(data)
            console.log(result)
            delay(2000).then(
                () => navigate('/review/' + sessionId, { replace: false })
            )
        }
        submit()

    }

    const handlePreviousButton = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleNextButton = () => {
        if (currentQuestion < totalQuestion - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleFlag = (event) => {
        setFlaggedQuestions((flaggedQuestions) => {
            if (flaggedQuestions.indexOf(currentQuestion) === -1) {
                flaggedQuestions.push(currentQuestion)
            } else {
                flaggedQuestions.splice(flaggedQuestions.indexOf(currentQuestion), 1)
            }
        })
    }

    return (
        <View>
            {
                !isTestLoaded ? (
                    <Text>Please wait while the test is loading...</Text>
                ) : (
                    <View>
                        <Modal show={reviewIsOpen} onHide={() => setReviewIsOpen(false)} fullscreen scrollable>
                            <Modal.Header closeButton>
                                <Modal.Title>Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Collection items={examData.Test.Questions.items} type="list" direction="column" gap="20px" searchNoResultsFound="No questions found">
                                        {
                                            (item, index) => (
                                                <Card key={index}>
                                                    <Flex alignItems="flex-end">
                                                        {
                                                            flaggedQuestions.indexOf(index) === -1 &&
                                                            <Button onClick={handleFlag}><FaFlag /></Button>
                                                        }
                                                        {
                                                            flaggedQuestions.indexOf(index) !== -1 &&
                                                            <Button onClick={handleFlag} variation='primary' ><FaFlag /></Button>
                                                        }

                                                    </Flex>
                                                    <RadioGroupField label={item.question.prompt} name={item.question.id} onChange={handleResponseUpdate}>
                                                        {
                                                            !!item.question.data && !!item.question.data.imageUrl &&
                                                            (
                                                                <Image src={item.question.data.imageUrl} alt="Question prompt illustration" />
                                                            )
                                                        }
                                                        <Collection items={item.question.choices} type="list" direction="column" gap="20px" alignItems="flex-start">
                                                            {
                                                                (choice, index) => {
                                                                    return (
                                                                        <Radio key={choice.key} value={choice.key}>{choice.value}</Radio>
                                                                    )
                                                                }
                                                            }
                                                        </Collection>
                                                    </RadioGroupField>
                                                </Card>
                                            )
                                        }
                                    </Collection>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>
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
                            <TextField label="Please enter your name" name="username" value={userDetails.username} onChange={handleChange} />
                            <TextField label="Please enter your email" name="email" type="email" value={userDetails.email} onChange={handleChange} />
                        </Flex>
                        {
                            !isTestStarted ? (
                                <Button onClick={handleBeginTest}>Begin</Button>
                            ) : (
                                <View>
                                    <Collection items={examData.Test.Questions.items} type="list" direction="column" gap="20px" searchNoResultsFound="No questions found">
                                        {
                                            (item, index) => (
                                                index === currentQuestion &&
                                                <Card key={index}>
                                                    <Flex alignItems="flex-end">
                                                        {
                                                            flaggedQuestions.indexOf(index) === -1 &&
                                                            <Button onClick={handleFlag}><FaFlag /></Button>
                                                        }
                                                        {
                                                            flaggedQuestions.indexOf(index) !== -1 &&
                                                            <Button onClick={handleFlag} variation='primary' ><FaFlag /></Button>
                                                        }

                                                    </Flex>
                                                    <RadioGroupField label={item.question.prompt} name={item.question.id} onChange={handleResponseUpdate}>
                                                        {
                                                            !!item.question.data && !!item.question.data.imageUrl &&
                                                            (
                                                                <Image src={item.question.data.imageUrl} alt="Question prompt illustration" />
                                                            )
                                                        }
                                                        <Collection items={item.question.choices} type="list" direction="column" gap="20px" alignItems="flex-start">
                                                            {
                                                                (choice, index) => {
                                                                    return (
                                                                        <Radio key={choice.key} value={choice.key}>{choice.value}</Radio>
                                                                    )
                                                                }
                                                            }
                                                        </Collection>
                                                    </RadioGroupField>
                                                    <Flex>
                                                        {index > 0 && <Button onClick={handlePreviousButton}><FaArrowLeft /></Button>}
                                                        {index < totalQuestion - 1 && <Button onClick={handleNextButton}><FaArrowRight /></Button>}
                                                    </Flex>
                                                </Card>
                                            )
                                        }
                                    </Collection>
                                    <Button onClick={() =>  setReviewIsOpen(true)}>Review</Button>
                                    <Button onClick={handleSubmit}>
                                        {isSubmitting && <Loader />}
                                        Submit
                                    </Button>
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