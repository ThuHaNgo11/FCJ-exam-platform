import React, { useState, useEffect } from "react";

// import react bootstrap components
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalTitle } from "react-bootstrap";
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
import { useImmer } from 'use-immer';

// import API functions
import { listTest } from '../../api/testApi';

const FindTestModal = ({ isOpen, onClose, onSave }) => {
    // local states
    const [tests, setTests] = useImmer([])
    const [filter, setFilter] = useState({})

    // Load tests from test bank - API
    useEffect(
        () => {
            const loadTests = async () => {
                const data = await listTest(filter)
                setTests(data.data.searchTests.items)
            }
            loadTests(filter);
        }, [filter]
    )

    // handlers
    const updateSearch = (prompt) => {
        if(!prompt){
            setFilter({})
        } else {
            setFilter({
                name: {
                    match: prompt
                }
            })
        }
    }

    const handleSelect = (event) => {
        const testId = event.currentTarget.dataset.testid
        const test = tests.find((t) => t.id === testId)
        onSave(test)
    }

    return (
        <Modal show={isOpen} onHide={onClose} scrollable fullscreen>
            <ModalHeader closeButton>
                <ModalTitle>Find Test</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <SearchField label="Search Test" onSubmit={updateSearch} onClear={updateSearch} />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell as="th"><FaCheckCircle /></TableCell>
                            <TableCell as="th">Test Name</TableCell>
                            <TableCell as="th">Test Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tests.map((test) => (
                            <TableRow key={test.id}>
                                <TableCell>
                                    <Button data-testid={test.id} onClick={handleSelect}>
                                        <FaCheckCircle />
                                    </Button>
                                </TableCell>
                                <TableCell>{test.data.name}</TableCell>
                                <TableCell>{test.data.description}</TableCell> 
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </ModalBody>
        </Modal>
    )
}

export default FindTestModal;