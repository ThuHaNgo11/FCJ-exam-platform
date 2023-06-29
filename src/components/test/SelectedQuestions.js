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
import {useImmer} from "use-immer";

const SelectedQuestions = ({selectedQuestionsProp, handleDeleteSelectedQuestions}) => {

    const [selectedQuestions, setSelectedQuestions] = useImmer(selectedQuestionsProp)

    // Handlers
    const handleDelete = (event) => {
        let testQuestionId = event.currentTarget.dataset.id
        let questionId = event.currentTarget.dataset.questionid
        if (!!testQuestionId) {
            setSelectedQuestions(
                selectedQuestions => {
                    let deletedRecord =
                        selectedQuestions.find(c => {
                            return c.id === testQuestionId
                        })
                    deletedRecord.deleted = true
                    handleDeleteSelectedQuestions({id: testQuestionId, questionId})
                }
            )
        } else {
            setSelectedQuestions(
                selectedQuestions => {
                    selectedQuestions = selectedQuestions.filter(
                        question => question.questionId !== questionId
                    )
                    handleDeleteSelectedQuestions({questionId})
                }
            )
        }
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
                            if (question.deleted) {
                                return
                            }
                            console.log(question)
                            return (
                            <TableRow key={question.id + '-' + question.questionId}>
                                <TableCell><CheckboxField></CheckboxField></TableCell>
                                <TableCell>{question.questionId}</TableCell>
                                <TableCell>{question.prompt}</TableCell>
                                <TableCell>
                                    <Button data-id={question.id} data-questionid={question.questionId} onClick={handleDelete}>
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