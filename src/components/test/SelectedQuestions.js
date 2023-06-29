import React, { useState } from 'react';
import {
    View,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    CheckboxField,
    Button
} from "@aws-amplify/ui-react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const SelectedQuestions = ({selectedQuestionsProp}) => {

    const [selectedQuestions, setSelectedQuestions] = useState(selectedQuestionsProp)

    // Handlers
    const handleDelete = (event) => {
        console.log(event.currentTarget.dataset)
        let questionId = event.currentTarget.dataset.questionid
        let newQuestions = selectedQuestions.filter((question) => {
            return question.id != questionId
        })
        setSelectedQuestions(newQuestions)
    }


    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell as="th"><FaCheckCircle /></TableCell>
                    <TableCell as="th">ID</TableCell>
                    <TableCell as="th">Content</TableCell>
                    <TableCell as="th">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    selectedQuestions.map(
                        (question) => { 
                            console.log(question)
                            return (
                            <TableRow key={question.id}>
                                <TableCell><CheckboxField></CheckboxField></TableCell>
                                <TableCell>{question.id}</TableCell>
                                <TableCell>{question.prompt}</TableCell>
                                <TableCell>
                                    <Button data-questionid={question.id} onClick={handleDelete}>
                                        <FaTrash></FaTrash>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                            }
                    )
                }
            </TableBody>
        </Table>
    )
}

export default SelectedQuestions;