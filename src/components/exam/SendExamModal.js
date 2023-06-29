import {React, useState} from 'react';
import { useImmer } from 'use-immer';

// import UI components
import { Modal, Form} from 'react-bootstrap';
import { Button, Heading, Text, TextField, Flex } from '@aws-amplify/ui-react';
import { FaCopy } from 'react-icons/fa';



const SendExamModal = ({ isOpen, onClose, onSend, exam }) => {

    const [emails, setEmails] = useState("")

    // function to get link to exam
    const getLink = (exam) => {
        return window.location.protocol + "//" + window.location.host + "/take-exam/" + exam + "/start"
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(getLink(exam))
    }

    const handleSend = () => {
        console.log(emails)
        onSend(emails)
    }

    return (
        <Modal show={isOpen} onHide={onClose} scrollable fullscreen>
            <Modal.Header closeButton>
                <Modal.Title>
                    Send Exam Link
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Student Email addresses</Form.Label>
                        <Form.Control 
                            value={emails}
                            onChange={(event) => setEmails(event.target.value)}
                            type="email" placeholder="Enter email addresses" multiple/>
                        <Form.Text className="text-muted">
                            Please enter student email addresses
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Flex direction="row" alignItems="center" justifyContent="flex-start"> 
                    <TextField width="90%" value={getLink(exam)} readonly></TextField>
                    <Button onClick={handleCopy}>
                        <FaCopy />
                    </Button>
                </Flex>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSend}>Send</Button>
                <Button onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendExamModal;