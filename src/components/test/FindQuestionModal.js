import React, { useState, useEffect } from 'react';

// import react bootstrap components
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalTitle } from "react-bootstrap";
import { Table, TableBody, TableHead, TableCell, TableRow, Flex, Text, CheckboxField } from '@aws-amplify/ui-react';
import { FaCheckCircle } from 'react-icons/fa';
import { useImmer } from 'use-immer';

// import API functions
import { listQuestion } from '../../api/questionApi';


const FindQuestionModal = ({ isOpen, onClose, onSave }) => {
    // local states
    const [questions, setQuestions] = useImmer([])

    // Load questions from question bank - API
    useEffect(
        () => {
            console.log("Modal load")
            const loadQuestions = async () => {
                const data = await listQuestion()
                // let questions = data.data.searchQuestions.items.map(
                //     (question) => {
                //         let {id, ...fields} = question
                //         return {...fields, questionId: id}
                //     }
                // )
                setQuestions(data.data.searchQuestions.items)
            }

            loadQuestions();
        },
        []
    )

    // handlers
    const handleSelectButton = (event) => {
        event.preventDefault()

        const data = questions.filter((question) => question.checked === true)

        onSave(data)
    }

    const handleCheckboxChange = (event) => {
        const questionId = event.target.dataset.questionid
        const checked = event.target.checked

        setQuestions(
            (questions) => {
                questions.map(
                    (question) => {
                        if (question.id === questionId) {
                            question.checked = checked
                        }
                    }
                )
            }
        )
    }

    return (
        <Modal show={isOpen} onHide={onClose} scrollable fullscreen>
            <ModalHeader closeButton>
                <ModalTitle>
                    Find Questions
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell as="th"><FaCheckCircle /></TableCell>
                            <TableCell as="th">Content</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            questions.map(
                                (question) => (
                                    <TableRow key={question.id}>
                                        <TableCell>
                                            <CheckboxField data-questionid={question.id} value={question.checked} onChange={handleCheckboxChange}>
                                            </CheckboxField>
                                        </TableCell>
                                        <TableCell>
                                            <Flex direction="column">
                                                <Text>{question.prompt}</Text>
                                                <Flex direction="column">
                                                    {
                                                        question.choices.map(
                                                            (choice) => (
                                                                <Text key={choice.key}>{(choice.key === question.key) ? <FaCheckCircle /> : ""} {choice.value}</Text>
                                                            )
                                                        )
                                                    }
                                                </Flex>
                                            </Flex>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </ModalBody>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSelectButton}>
                    Select
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FindQuestionModal;