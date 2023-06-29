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
        // handle selected question deletion
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
                            <TableRow key={question.id + '-' + question.questionId}>
                                <TableCell><CheckboxField></CheckboxField></TableCell>
                                <TableCell>{question.questionId}</TableCell>
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