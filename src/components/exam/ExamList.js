import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// import amplify components
import {
    TableCell,
    TableBody,
    Table,
    TableHead,
    TableRow,
    CheckboxField,
    Flex,
    Text, Placeholder, ButtonGroup, Button, View
} from "@aws-amplify/ui-react";

import { FaCheckCircle, FaEdit, FaTrash, FaPaperPlane } from "react-icons/fa";

// import API functions
import { deleteExamById, listExam } from "../../api/examApi";

// import utils
import { formatDate } from "../../hooks/utils";

// import components
import SendExamModal from './SendExamModal';

const ExamList = () => {
    // local states
    const [exams, setExams] = useState([])
    const [isListLoaded, setIsListLoaded] = useState(false)
    const [filter, setFilter] = useState({})

    // States for SendExamModal 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalExam, setModalExam] = useState("")

    const navigate = useNavigate()

    // Load data with useEffect
    useEffect(
        () => {
            // declare async function to fetch data from API
            const fetchData = async () => {
                // get the data from the api
                const data = await listExam()
                // set the data to the local state - exams
                setExams(data.data.listExams.items)
                setIsListLoaded(true)
            }

            setIsListLoaded(false)
            fetchData().catch(
                (data) => {
                    console.log("Error XXX", data)
                    setExams(data.data.listExams.items)
                    setIsListLoaded(true)
                }
            );
        }, [filter]
    )

    // handlers
    const handleEdit = (event) => {
        const examid = event.currentTarget.dataset.examid

        const state = exams.find((e) => e.id === examid)

        navigate('/exam/' + examid, { state })
    }

    const handleSendLink = (event) => {
        const examid = event.currentTarget.dataset.examid

        setModalExam(examid)
        setIsModalOpen(true)
    }

    const handleDelete = (event) => {
        // implement delete exam
        const examId = event.currentTarget.dataset.examid
        const exam = exams.find((e) => e.id === examId)
        setIsListLoaded(false)
        deleteExamById(examId).then(
            () => {
                setExams(exams.filter(exam => exam.id != examId))
                setIsListLoaded(true)
            }
        ).catch(
            (error) => {
                console.log(error)
                setIsListLoaded(true)
            }
        )
    }

    // handlers of SendExamModal
    const handleSend = (event) => {
        // using SES and lambda to send email
        console.log("SendExamModal", event)
        

    }

    const handleModalClose = (event) => {
        setIsModalOpen(false)
    }

    return (
        <View>
            <SendExamModal isOpen={isModalOpen} onSend={handleSend} onClose={handleModalClose} exam={modalExam}></SendExamModal>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell as="th"><FaCheckCircle /></TableCell>
                        <TableCell as="th">ID</TableCell>
                        <TableCell as="th">Date</TableCell>
                        <TableCell as="th">Organization</TableCell>
                        <TableCell as="th">Name</TableCell>
                        <TableCell as="th">Description</TableCell>
                        <TableCell as="th">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        !isListLoaded ? <TableRow key="placeholder"><TableCell colSpan="7"><Placeholder /></TableCell></TableRow> :
                            exams.map(
                                (exam) => (
                                    <TableRow key={exam.id}>
                                        <TableCell><CheckboxField></CheckboxField></TableCell>
                                        <TableCell>{exam.id}</TableCell>
                                        <TableCell>{formatDate(exam.date)}</TableCell>
                                        <TableCell>{exam.org}</TableCell>
                                        <TableCell>{exam.data.name}</TableCell>
                                        <TableCell>{exam.data.description}</TableCell>
                                        <TableCell>
                                            <Flex direction="row">
                                                <ButtonGroup>
                                                    <Button data-examid={exam.id} onClick={handleEdit}>
                                                        <FaEdit></FaEdit>
                                                    </Button>
                                                    <Button data-examid={exam.id} onClick={handleSendLink}>
                                                        <FaPaperPlane></FaPaperPlane>
                                                    </Button>
                                                    <Button data-examid={exam.id} onClick={handleDelete}>
                                                        <FaTrash></FaTrash>
                                                    </Button>
                                                </ButtonGroup>
                                            </Flex>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                    }
                </TableBody>
            </Table>
        </View>
    )
}

export default ExamList;