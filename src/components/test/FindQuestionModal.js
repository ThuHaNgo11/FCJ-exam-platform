import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

// import react bootstrap components
import { Modal, ModalHeader, ModalBody, Button, ModalTitle } from "react-bootstrap";
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Flex,
    Text,
    CheckboxField,
    SearchField
} from '@aws-amplify/ui-react';
import { FaCheckCircle } from 'react-icons/fa';

// import API functions
import { listQuestion } from '../../api/questionApi';


const FindQuestionModal = ({ isOpen, onClose, onSave }) => {
    // local states
    const [questions, setQuestions] = useImmer([])
    const [filter, setFilter] = useState({})


    // Load questions from question bank - API
    useEffect(
        () => {
            const loadQuestions = async () => {
                const data = await listQuestion(filter)
                setQuestions(data.data.searchQuestions.items)
            }
            loadQuestions(filter);
        },
        [filter, setQuestions]
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
                            if (checked) {
                                question.new = true
                            } else {
                                delete question.new
                            }
                        }
                        return question
                    }
                )
            }
        )
    }

    const updateSearch = (prompt) => {
        if (!prompt) {
            setFilter({})
        } else {
            setFilter({
                prompt: {
                    match: prompt
                }
            })
        }
    }

    return (
        <Modal show={isOpen} onHide={onClose} scrollable fullscreen>
            <ModalHeader closeButton>
                <ModalTitle>
                    Find Questions
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <SearchField label="Search Questions" onSubmit={updateSearch} onClear={updateSearch} />
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
                                                <Flex direction="column" className="answer-box" width="100%">
                                                    {
                                                        question.choices.map(
                                                            (choice) => (
                                                                <Text
                                                                    className={(choice.key === question.key) ? "correct-answer":""}
                                                                    key={choice.key}>{(choice.key === question.key) ? <FaCheckCircle /> : ""} {choice.value}</Text>
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
                <Button variant="light" onClick={handleSelectButton}>
                    Select
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FindQuestionModal;