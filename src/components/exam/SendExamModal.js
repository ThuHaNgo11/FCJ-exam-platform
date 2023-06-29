import React from 'react';
import { useImmer } from 'use-immer';

// import UI components
import { Modal, Form} from 'react-bootstrap';
import { Button, Heading } from '@aws-amplify/ui-react';


// function to get link to exam
const getLink = (exam) => {
    return window.location.protocol + "//" + window.location.host + "//" + exam.id
}


const SendExamModal = ({ isOpen, onClose, onSend, exam }) => {
    return (
        <Modal show={isOpen} onHide={onClose} scrollable fullscreen>
            <Modal.Header closeButton>
                <Modal.Title>
                    Send Exam
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Heading level={3}>Send exam to students</Heading>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Student Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" multiple/>
                        <Form.Text className="text-muted">
                            Please enter student email
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Text>{getLink(exam)}</Text>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onSend}>Send</Button>
                <Button onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendExamModal;