import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {
    TableCell,
    TableBody,
    Table,
    TableHead,
    TableRow,
    CheckboxField,
    Flex,
    Placeholder, ButtonGroup, Button,
    ScrollView
} from "@aws-amplify/ui-react";
import {FaCheckCircle, FaEdit, FaTrash} from "react-icons/fa";

// import API functions
import {deleteTestById, listTest} from "../../api/testApi";


const TestList = () => {
    // navigation hook
    const navigate = useNavigate()

    // States
    const [tests, setTests] = useState([])
    const [isListLoaded, setIsListLoaded] = useState(false)
    // const [filter, setFilter] = useState({})

    // Handlers
    const handleEdit = (event) => {
        const testid = event.currentTarget.dataset.testid

        const formState = tests.find((t) => t.id === testid)

        navigate('/test/' + testid, {state: formState})
    }

    const handleDelete = (event) => {
        // implement delete test
        const testId = event.currentTarget.dataset.testid
        const test = tests.find((t) => t.id === testId)
        setIsListLoaded(false)
        deleteTestById(testId, test.Questions).then(
            () => {
                setTests(tests.filter(test => test.id != testId))
                setIsListLoaded(true)
            }
        ).catch(
            (error) => {
                console.log(error)
                setIsListLoaded(true)
            }
        )
    }

    // Load data with useEffect
    useEffect(
        () => {
            // declare async function to fetch data from API
            const fetchData = async () => {
                // get the data from the api
                const data = await listTest()
                // set the data to the local state - tests
                setTests(data.data.searchTests.items)
                setIsListLoaded(true)
            }

            setIsListLoaded(false)
            fetchData().catch(
                (data) => {
                    console.log("Error XXX", data)
                    setTests(data.data.searchTests.items)
                    setIsListLoaded(true)
                }
            );
        },
        []
    )

    const colWidths = ["30px", "360px", "500px", "250px", "250px"]

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell as="th" width={colWidths[0]}><FaCheckCircle/></TableCell>
                        <TableCell as="th" width={colWidths[1]}>ID</TableCell>
                        <TableCell as="th" width={colWidths[2]}>Name</TableCell>
                        <TableCell as="th" minWidth={colWidths[3]} flex={"1 1 auto"}>Description</TableCell>
                        <TableCell as="th" width={colWidths[4]}>Actions</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <ScrollView height="calc(100vh - 230px)">
                <Table>
                    <TableBody>
                        {
                            !isListLoaded ? <TableRow key="placeholder"><TableCell
                                    colSpan="5"><Placeholder/></TableCell></TableRow> :
                                tests.map(
                                    (test) => (
                                        <TableRow key={test.id}>
                                            <TableCell width={colWidths[0]}><CheckboxField></CheckboxField></TableCell>
                                            <TableCell width={colWidths[1]}>{test.id}</TableCell>
                                            <TableCell width={colWidths[2]}>{test.data.name}</TableCell>
                                            <TableCell minWidth={colWidths[3]} flex={"1 1 auto"}>{test.data.description}</TableCell>
                                            <TableCell width={colWidths[4]}>
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
            </ScrollView>
        </>
    )
}

export default TestList;