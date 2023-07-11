import React, {useState} from 'react';

// import UI components
import { Modal, Form } from 'react-bootstrap';
import { TextField, Flex, Button } from '@aws-amplify/ui-react';
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
        onSend({emails, link: getLink(exam)})
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
                    <TextField width="90%" value={getLink(exam)} readonly labelHidden="true" height="42px"></TextField>
                    <Button onClick={handleCopy} size="large">
                        <FaCopy />
                    </Button>
                </Flex>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSend}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendExamModal;