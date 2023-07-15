import React, {useEffect, useState} from "react";
import {
    TableCell,
    TableBody,
    Table,
    TableHead,
    TableRow,
    CheckboxField,
    Flex,
    Text, Placeholder, ButtonGroup, Button,
    Image, ScrollView
} from "@aws-amplify/ui-react";
import {useImmer} from "use-immer";
import {listQuestion, deleteQuestionById} from "../../api/questionApi";
import {FaCheckCircle, FaEdit, FaTrash} from "react-icons/fa";
import {useNavigate} from "react-router";
import '../../css/answerBox.css';

const QuestionList = () => {
    const [questions, setQuestions] = useState([])
    const [isListLoaded, setIsListLoaded] = useState(false)
    const [filter, setFilter] = useImmer({})
    const [nextToken, setNextToken] = useImmer('')

    const navigate = useNavigate()

    useEffect(
        () => {
            (async () => {
                const field = 'searchQuestions'
                let result = await listQuestion()
                console.log(result.data[field].items)
                setQuestions(result.data[field].items)
                setNextToken(result.data[field].nextToken)
                setIsListLoaded(true)
            })()

        },
        [filter, setNextToken]
    )

    const handleEdit = (event) => {
        const questionid = event.currentTarget.dataset.questionid

        const formState = questions.find((q) => q.id === questionid)
        console.log("Form state", formState)

        navigate('/question/' + questionid, {state: formState})
    }

    const handleDelete = (event) => {
        (async () => {
            console.log(event.currentTarget.dataset)
            let questionId = event.currentTarget.dataset.questionid
            let result = await deleteQuestionById(questionId)
            console.log(result)
            let newQuestions = questions.filter((question) => {
                return question.id != questionId
            })
            setQuestions(newQuestions)

        })()
    }

    const colWidths = ["30px", "360px", "", "250px"]

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell as="th" width={colWidths[0]}><FaCheckCircle/></TableCell>
                        <TableCell as="th" width={colWidths[1]}>ID</TableCell>
                        <TableCell as="th" flex={"1 1 auto"}>Content</TableCell>
                        <TableCell as="th" width={colWidths[3]}>Actions</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <ScrollView height="calc(100vh - 230px)">
                <Table>
                    <TableBody>
                        {
                            !isListLoaded ?
                                <TableRow key="placeholder"><TableCell
                                    colSpan="4"><Placeholder/></TableCell></TableRow> :
                                questions.map(
                                    (question) => (
                                        <TableRow key={question.id}>
                                            <TableCell width={colWidths[0]}><CheckboxField></CheckboxField></TableCell>
                                            <TableCell width={colWidths[1]}>{question.id}</TableCell>
                                            <TableCell flex={"1 1 auto"}>
                                                <Flex direction="column" alignItems="flex-start">
                                                    <Text>{question.prompt}</Text>
                                                    {!!question.data && !!question.data.imageUrl &&
                                                        <Image
                                                            alt="question prompt illustration"
                                                            src={question.data.imageUrl}
                                                            maxHeight="300px"
                                                            maxWidth="100%"
                                                        />}
                                                    <Flex direction="column" className="answer-box" width="100%">
                                                        {
                                                            question.choices.map(
                                                                (choice) => (
                                                                    <Text
                                                                        className={(choice.key === question.key) ? "correct-answer":""}
                                                                        key={choice.key}>{choice.value}</Text>
                                                                )
                                                            )
                                                        }
                                                    </Flex>
                                                </Flex>
                                            </TableCell>
                                            <TableCell width={colWidths[3]}>
                                                <Flex direction="row">
                                                    <ButtonGroup>
                                                        <Button data-questionid={question.id} onClick={handleEdit}>
                                                            <FaEdit></FaEdit>
                                                        </Button>
                                                        <Button data-questionid={question.id} onClick={handleDelete}>
                                                            <FaTrash></FaTrash>
                                                        </Button>
                                                    </ButtonGroup>
                                                </Flex>
                                            </TableCell>
                                        </TableRow>
                                    )
                                )
                        }
                    </TableBody>
                </Table>
            </ScrollView>
        </>
    )
}

export default QuestionList