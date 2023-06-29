import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    TableCell,
    TableBody,
    Table,
    TableHead,
    TableRow,
    CheckboxField,
    Flex,
    Text, Placeholder, ButtonGroup, Button
} from "@aws-amplify/ui-react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

// import API functions
import { listTest } from "../../api/testApi";


const TestList = () => {
    // navigation hook
    const navigate = useNavigate()

    // States
    const [tests, setTests] = useState([])
    const [isListLoaded, setIsListLoaded] = useState(false)
    const [filter, setFilter] = useState({})

    // Handlers
    const handleEdit = (event) => {
        const testid = event.currentTarget.dataset.testid

        const formState = tests.find((t) => t.id === testid)

        navigate('/test/' + testid, { state: formState })
    }

    const handleDelete = (event) => {

    }

    // Load data with useEffect
    useEffect(
        () => {
            // declare async function to fetch data from API
            const fetchData = async () => {
                // get the data from the api
                const data = await listTest()
                console.log(data)

                // set the data to the local state - tests
                setTests(data.data.listTests.items)
                setIsListLoaded(true)
            }

            fetchData();
        },
        []
    )

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell as="th"><FaCheckCircle /></TableCell>
                    <TableCell as="th">ID</TableCell>
                    <TableCell as="th">Name</TableCell>
                    <TableCell as="th">Description</TableCell>
                    <TableCell as="th">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tests.map(
                        (test) => (
                            <TableRow key={test.id}>
                                <TableCell><CheckboxField></CheckboxField></TableCell>
                                <TableCell>{test.id}</TableCell>
                                <TableCell>{test.data.name}</TableCell>
                                <TableCell>{test.data.description}</TableCell>
                                <TableCell>
                                    <Flex direction="row">
                                        <ButtonGroup>
                                            <Button data-testid={test.id} onClick={handleEdit}>
                                                <FaEdit></FaEdit>
                                            </Button>
                                            <Button data-testid={test.id} onClick={handleDelete}>
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
    )
}

export default TestList;