import React, {useState} from 'react';

// import UI components
import { Modal, Form } from 'react-bootstrap';
import { TextField, Flex, Button, View, Alert } from '@aws-amplify/ui-react';
import {FaCopy, FaPaperPlane} from 'react-icons/fa';
import {delay} from "../../hooks/utils";
import {ReactMultiEmail} from "react-multi-email";
import 'react-multi-email/dist/style.css';
import {QRCodeSVG} from 'qrcode.react';

const SendExamModal = ({ isOpen, onClose, onSend, exam }) => {

    const [emails, setEmails] = useState([])
    const [copied, setCopied] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    let [qrCodeSize, setQrCodeSize] = useState(256)

    // function to get link to exam
    const getLink = (exam) => {
        return window.location.protocol + "//" + window.location.host + "/take-exam/" + exam + "/start"
    }

    const handleCopy = (event) => {
        navigator.clipboard.writeText(getLink(exam)).then(
            () => {
                setCopied(true)
                delay(1000).then(() => setCopied(false))
            }
        )
    }

    const clearForm = () => {
        setEmails([])
        setIsSent(false)
    }

    const handleSend = () => {
        setIsSending(true)
        console.log(emails)
        onSend({emails: emails.join(','), link: getLink(exam)}).finally(
            () => {
                setIsSending(false)
                setIsSent(true)
            }
        )
    }

    const toggleQRCodeSize = () => {
        if (qrCodeSize === 256) {
            setQrCodeSize(512)
        } else {
            setQrCodeSize(256)
        }
    }

    const onHide = () => {
        clearForm()
        onClose()
    }

    return (
        <Modal show={isOpen} onHide={onHide} scrollable fullscreen>
            <Modal.Header closeButton>
                <Modal.Title>
                    Send Exam Link
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    isSent && (
                        <Alert variation="success" heading="Success">
                            Exam invitation has been sent!
                        </Alert>
                    )
                }
                <Flex direction="column" alignItems="center" padding="5px">
                    <View width="50vw">
                        <Flex direction="column" alignItems="stretch" padding="5px">
                            <Form.Group>
                                <Form.Label>Student Email addresses</Form.Label>
                                <ReactMultiEmail
                                    placeholder="Enter email addresses"
                                    emails={emails}
                                    onChange={(emails) => setEmails(emails)}
                                    autoFocus={true}
                                    getLabel={(email, index, removeEmail) => {
                                        return (
                                            <div data-tag key={index}>
                                                <div data-tag-item>{email}</div>
                                                {!isSent && <span data-tag-handle onClick={() => removeEmail(index)}>×</span>}
                                            </div>
                                        );
                                    }}
                                    width="100%"
                                />
                            </Form.Group>

                            <Flex direction="row" alignItems="center" justifyContent="flex-start">
                                <TextField width="90%" value={getLink(exam)} readOnly labelHidden="true" height="42px"></TextField>
                                <Button onClick={handleCopy} height="42px" isDisabled={copied} justifyContent="space-between">
                                    <FaCopy />
                                    {copied && (<span style={{paddingLeft: "5px"}}>Copied!</span>)}
                                </Button>
                            </Flex>
                            Or scan this QR Code to take the exam:
                            <QRCodeSVG size={qrCodeSize} value={getLink(exam)} onClick={toggleQRCodeSize}/>
                        </Flex>
                    </View>
                </Flex>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSend} isDisabled={isSending || isSent}>
                    <FaPaperPlane />
                    <span style={{paddingLeft: "5px"}}>{isSending ? "Sending..." : (isSent ? "Sent!" : "Send")}</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendExamModal;