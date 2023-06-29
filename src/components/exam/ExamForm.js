// import libraries
import React, { useState } from "react";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router";

// import UI components
import { View, Heading, Button, TextAreaField, Loader, TextField, Text } from "@aws-amplify/ui-react";
import { Form } from "react-bootstrap";

// import components
import FindTestModal from "./FindTestModal.js";
import { formatDate, getImmerChangeHandler, delay } from "../../hooks/utils";

// import API functions
import { saveExam } from "../../api/examApi";

// default initial state
const initialState = {
    date: new Date(),
    org: "",
    data: {
        name: "exam name",
        description: "exam description",
    },
    Test: null
}

// component ExamForm
const ExamForm = () => {
    // local states
    const [formState, setFormState] = useImmer(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigate = useNavigate()

    // handlers
    const handleFindExam = (event) => {
        event.preventDefault()
        setIsModalOpen(true)
    }

    const handleChanges = getImmerChangeHandler(setFormState)

    const handleDataChanges = (fieldName) => {
        return (event) => {
            setFormState(
                formState => {
                    formState.data[fieldName] = event.target.value
                }
            )
        }
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleModalSave = (data) => {
        setIsModalOpen(false)

        setFormState(
            (formState) => {
                formState.Test = data
            }
        )
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const field = (!formState.hasOwnProperty('id')) ? 'createExam' : 'updateExam'

        saveExam(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                delay(2000).then(
                    () => navigate('/exams', { replace: true })
                )
            })
            .catch((error) => {
                console.log(error)
                setIsSubmitting(false)
            })
    }

    return (
        <View>
            <FindTestModal isOpen={isModalOpen} onClose={handleModalClose} onSave={handleModalSave}/>
            <Heading level={3}>Create Exam</Heading>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Exam date</Form.Label>
                    <Form.Control name="date" type="date" value={formatDate(formState.date)} onChange={handleChanges}></Form.Control>
                </Form.Group>
            </Form>
            <TextField
                label="Organization"
                name="org"
                value={formState.org}
                onChange={handleChanges}
            ></TextField>
            <TextField
                label="Exam Name"
                name="examName"
                value={formState.data.name}
                onChange={handleDataChanges('name')}
            >
            </TextField>
            <TextAreaField
                label="Exam Description"
                name="examDescription"
                value={formState.data.description}
                onChange={handleDataChanges('description')}
            >
            </TextAreaField>

            {/* select test for the exam */}
            <Button onClick={handleFindExam}>Select Test</Button>
            {
                formState.Test && (
                    <View>
                        <Text>Selected test</Text>
                        <Text>{formState.Test.data.name}</Text>
                    </View>
                )
            }
            {/* Save changes to form */}
            <View>
                <Button onClick={handleSaveButton}>
                    {isSubmitting && <Loader />}
                    Save
                </Button>
                <Button onClick={() => navigate('/tests', { replace: true })}>
                    Cancel
                </Button>
            </View>
        </View>
    )
}

export default ExamForm;