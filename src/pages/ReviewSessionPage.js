import {Heading, View, Text, Flex, Card, Collection, Button} from "@aws-amplify/ui-react";
import {useParams} from "react-router";
import {React, useState, useEffect} from "react";
import {getSessionWithScore} from "../api/scoreApi";
import {useImmer} from "use-immer";
import {formatDate} from "../hooks/utils";
import {FaCheckCircle, FaCross, FaTimes, FaTimesCircle} from "react-icons/fa";
import { getCert } from "../api/certResource";
import jsPDF from "jspdf";
import { callAddFont } from "../hooks/emberFont";

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
                            {
                                allStates.scorePercentage >= 80 && (
                                    <Button onClick={handleDownloadCertificate}>Download Certificate</Button>
                                )
                            }
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