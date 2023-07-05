import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

// import UI components 
import { Modal, Button } from 'react-bootstrap';
import {
    Flex,
    RadioGroupField,
    Radio,
    Collection,
    Card,
    Image,
    Loader
} from '@aws-amplify/ui-react';

import { FaFlag } from "react-icons/fa";


const ReviewExamModal = ({ isOpen, onClose, onResponseUpdate, examData, responseData, flaggedQuestions, handleSubmit }) => {
    let [localResponseData, setLocalResponseData] = useState(responseData)

    let [isSubmitting, setIsSubmitting] = useState(false)

    const getAnswer = (questionId) => {
        const response = localResponseData.data.find((response) => response.questionId === questionId)
        return (!!response && !!response.answer) ? parseInt(response.answer) : null
    }

    useEffect(() => {
        setLocalResponseData(responseData);
    }, [responseData]);

    const onSubmit = () => {
        setIsSubmitting(true)
        handleSubmit()
    }

    return (
        <Modal show={isOpen} onHide={onClose} fullscreen scrollable>
            <Modal.Header>
                <Modal.Title>Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Collection items={examData.Test.Questions.items} type="list" direction="column" gap="20px" searchNoResultsFound="No questions found">
                    {
                        (item, index) => (
                            <Card key={index}>
                                <Flex alignItems="flex-end">
                                    {
                                        flaggedQuestions.indexOf(index) !== -1 &&
                                        <FaFlag />
                                    }

                                </Flex>
                                <RadioGroupField label={item.question.prompt} name={item.question.id} onChange={onResponseUpdate}
                                    value={getAnswer(item.question.id)}
                                >
                                    {
                                        !!item.question.data && !!item.question.data.imageUrl &&
                                        (
                                            <Image src={item.question.data.imageUrl} alt="Question prompt illustration" />
                                        )
                                    }
                                    <Collection items={item.question.choices} type="list" direction="column" gap="20px" alignItems="flex-start">
                                        {
                                            (choice, index) => {
                                                return (
                                                    <Radio key={choice.key} value={choice.key}>{choice.value}</Radio>
                                                )
                                            }
                                        }
                                    </Collection>
                                </RadioGroupField>
                            </Card>
                        )
                    }
                </Collection>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onSubmit}>
                    { isSubmitting && <Loader /> }
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewExamModal;

