// import libraries
import React, {useState} from "react";
import {useImmer} from "use-immer";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

// import UI components
import {View, Alert, Heading, Button, Loader, TextField, Text, Flex, ButtonGroup} from "@aws-amplify/ui-react";
import {Form} from "react-bootstrap";

// import components
import FindTestModal from "./FindTestModal.js";
import {formatDate, getImmerChangeHandler, delay} from "../../hooks/utils";

// import API functions
import {saveExam} from "../../api/examApi";

// default initial state
const initialState = {
    date: new Date(),
    org: "",
    data: {
        name: "exam name"
    },
    Test: null
}

// component ExamForm
const ExamForm = () => {
    const today = formatDate(new Date())

    const location = useLocation()

    const navState = location.state || initialState

    // local states
    const [formState, setFormState] = useImmer(navState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [alert, setAlert] = useState({status: false, message: ""})

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

    const handleDateChanges = (event) => {
        setFormState(
            formState => {
                formState.date = new Date(event.target.value)
            }
        )
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

        setAlert({status: false, message: ""})
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const field = (!formState.hasOwnProperty('id')) ? 'createExam' : 'updateExam'

        if (!formState.Test) {
            setAlert({status: true, message: "Please select a test for the exam"})
            setIsSubmitting(false)
            return
        }

        saveExam(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                delay(2000).then(
                    () => navigate('/exams', {replace: true})
                )
            })
            .catch((error) => {
                console.log(error)
                setIsSubmitting(false)
            })
    }

    return (
        <Flex direction="column" alignItems="center" padding="5px">
            <View width="50vw">
                <Flex direction="column" alignItems="stretch" padding="5px">
                    <FindTestModal isOpen={isModalOpen} onClose={handleModalClose} onSave={handleModalSave}/>
                    <Heading level={3} textAlign="center">Create Exam</Heading>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Exam date</Form.Label>
                            <Form.Control name="date" type="date" value={formatDate(formState.date)} min={today}
                                          onChange={handleDateChanges}></Form.Control>
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

                    {/* select test for the exam */}
                    {alert.status &&
                        (<Alert
                            isDismissible={true}
                            heading="Error"
                            variation="error"
                        >
                            {alert.message}
                        </Alert>)}
                    <Button onClick={handleFindExam}>Select Test</Button>
                    {
                        formState.Test && (
                            <Flex direction="row" gap="5px">
                                <Text fontWeight="bold" width="120px">Selected test:</Text>
                                <Text>{formState.Test.data.name} - {formState.Test.data.description}</Text>
                            </Flex>
                        )
                    }
                    {/* Save changes to form */}
                    <ButtonGroup>
                        <Button onClick={handleSaveButton}>
                            {isSubmitting && <Loader/>}
                            Save
                        </Button>
                        <Button onClick={() => navigate('/exams', {replace: true})}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Flex>
            </View>
        </Flex>
    )
}

export default ExamForm;