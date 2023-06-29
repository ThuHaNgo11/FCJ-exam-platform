import React, {useEffect, useState, useContext} from "react";
import {
    View,
    Grid,
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
import {QMContext} from "../../pages/QuestionManager";


const QuestionList = () => {
    const [questions, setQuestions] = useState([])
    const [isListLoaded, setIsListLoaded] = useState(false)
    const [filter, setFilter] = useImmer({})
    const [nextToken, setNextToken] = useImmer('')
    const {newFormLoad, setNewFormLoad} = useContext(QMContext)

    useEffect(
        () => {
            (async () => {
                if (!!newFormLoad) {
                    setNewFormLoad(null)
                    return
                }
                let result = await listQuestion()
                console.log(result.data.listQuestions.items)
                console.log(newFormLoad)
                setQuestions(result.data.listQuestions.items)
                setNextToken(result.data.listQuestions.nextToken)
                setIsListLoaded(true)
            })()

        },
        [filter, newFormLoad, setNextToken]
    )

    const handleEdit = (event) => {

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