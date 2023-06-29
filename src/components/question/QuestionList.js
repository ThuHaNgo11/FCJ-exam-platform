import React, {useEffect, useState} from "react";
import {
    TableCell,
    TableBody,
    Table,
    TableHead,
    TableRow,
    CheckboxField,
    Flex,
    Text, Placeholder, ButtonGroup, Button
} from "@aws-amplify/ui-react";
import {useImmer} from "use-immer";
import {listQuestion, deleteQuestionById} from "../../api/questionApi";
import {FaCheckCircle, FaEdit, FaTrash} from "react-icons/fa";
import {useNavigate} from "react-router";

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

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell as="th"><FaCheckCircle/></TableCell>
                    <TableCell as="th">ID</TableCell>
                    <TableCell as="th">Content</TableCell>
                    <TableCell as="th">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    !isListLoaded ? <TableRow key="placeholder"><TableCell colSpan="4"><Placeholder /></TableCell></TableRow>:
                    questions.map(
                        (question) => (
                            <TableRow key={question.id}>
                                <TableCell><CheckboxField></CheckboxField></TableCell>
                                <TableCell>{question.id}</TableCell>
                                <TableCell>
                                    <Flex direction="column">
                                        <Text>{question.prompt}</Text>
                                        <Flex direction="column">
                                        {
                                            question.choices.map(
                                                (choice) => (
                                                    <Text key={choice.key}>{(choice.key === question.key) ? <FaCheckCircle />: ""} {choice.value}</Text>
                                                )
                                            )
                                        }
                                        </Flex>
                                    </Flex>
                                </TableCell>
                                <TableCell>
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
    )
}

export default QuestionList