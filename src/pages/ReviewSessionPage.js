import {Heading, View, Text, Flex, Card, Collection, Button, RadioGroupField, Radio} from "@aws-amplify/ui-react";
import {useParams} from "react-router";
import {React, useState, useEffect} from "react";
import {getSessionWithScore} from "../api/scoreApi";
import {useImmer} from "use-immer";
import {formatDate} from "../hooks/utils";
import {getCert} from "../api/certResource";
import jsPDF from "jspdf";
import '../css/reviewSession.css';
// import { callAddFont } from "../hooks/emberFont";

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
    }, [setAllStates, sessionid])

    const handleDownloadCertificate = () => {
        // var win = window.open("", "Certificate of Completion", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1024,height=720,top="+(window.screen.height-800)+",left="+(window.screen.width-1024));
        // win.document.body.innerHTML = getCert(allStates.data.username, formatDate(allStates.Exam.date))
        // win.document.close();
        // win.print();

        const content = getCert(allStates.data.username, formatDate(allStates.Exam.date))
        // jsPDF.API.events.push(['addFonts', callAddFont])
        let doc = new jsPDF({
            orientation: 'landscape',
        })
        doc.html(content, {
            callback: function (doc) {
                doc.save('certificate-of-completion.pdf')
            },
            x: 0,
            y: 0,
            width: 298.5,
            windowWidth: 1024,
        })
    }

    const getAnswerBoxClass = (questionId, answer) => {
        if (
            allStates.responsesMap.hasOwnProperty(questionId) &&
            (answer === allStates.responsesMap[questionId].data.answer) &&
            (answer !== allStates.questionsMap[questionId].key)
        ) {
            return "wrong-answer"
        }

        if (answer === allStates.questionsMap[questionId].key) {
            return "correct-answer"
        }

        return ""
    }

    return (
        <Flex direction="column" alignItems="center" padding="5px">
            <View width={{base:'98vw', large:'50vw'}}>
                <Flex direction="column" alignItems="stretch" padding="5px">
                    <Heading level={3} textAlign="center">Review Exam Session</Heading>
                    {
                        isPageLoaded && (
                            <View>
                                <Card>
                                    <Flex direction="row" justifyContent="space-between">
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
                                    <View textAlign="center">
                                    {
                                        allStates.scorePercentage >= 80 && (
                                            <Button onClick={handleDownloadCertificate}>Download Certificate</Button>
                                        )
                                    }
                                    </View>
                                </Card>
                                <Card>
                                    <Heading level={4} textAlign="center">Submitted Answers</Heading>
                                    <Collection items={allStates.questions}>
                                        {
                                            (item, index) => (
                                                <View key={index}>
                                                    <Flex direction="column">
                                                        <Text fontWeight="bold">Question {index + 1} / {allStates.questions.length}</Text>
                                                        <Flex direction="column">
                                                            <RadioGroupField label={allStates.questionsMap[item].prompt}
                                                                             name={allStates.questionsMap[item].id}
                                                                             className="rgf-review-session"
                                                                             onChange={() => {}}
                                                                             value={(!!allStates.responsesMap[item] && !!allStates.responsesMap[item].data.answer) ? allStates.responsesMap[item].data.answer : null}>
                                                                {
                                                                    allStates.questionsMap[item].choices.map(
                                                                        (choice) => (
                                                                            <Radio
                                                                                value={choice.key}
                                                                                key={choice.key}
                                                                                className={getAnswerBoxClass(item, choice.key)}>{choice.value}</Radio>
                                                                        )
                                                                    )
                                                                }
                                                            </RadioGroupField>
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

                </Flex>
            </View>
        </Flex>
    )
}

export default ReviewSessionPage