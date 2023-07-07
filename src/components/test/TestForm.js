// import libraries
import React, { useState } from "react";
import { useImmer } from "use-immer";
import { arrayMergeUnique, delay } from "../../hooks/utils";
import { useLocation, useNavigate } from "react-router";

// import UI components
import { View, Heading, Button, TextAreaField, Loader, TextField } from "@aws-amplify/ui-react";

// import components
import SelectedQuestions from "./SelectedQuestions";
import FindQuestionModal from "./FindQuestionModal";

// import API functions
import { saveTest } from "../../api/testApi";

// default initial state
const initialState = {
    data: {
        name: "AWS Test",
        description: "Please enter description for the test",
        instruction: "default instruction, please customize",
    },
    Questions: []
}

// Component TestForm
const TestForm = () => {
    const location = useLocation()

    const navState = location.state || initialState

    const [formState, setFormState] = useImmer(navState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigate = useNavigate()

    const handleChanges = (fieldName) => {
        return (event) => {
            setFormState(
                formState => {
                    formState.data[fieldName] = event.target.value
                }
            )
        }
    }

    const handleSaveButton = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const field = (!formState.hasOwnProperty('id')) ? 'createTest' : 'updateTest'

        saveTest(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                delay(2000).then(
                    () => navigate('/tests', { replace: true })
                )
            })
            .catch((error) => {
                console.log(error)
                setIsSubmitting(false)
            })
    }

    // handle select and add questions for test
    const handleFindQuestion = () => {
        console.log("Find question")
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleModalSave = (data) => {
        setIsModalOpen(false)
        setFormState(
            (formState) => {
                let result = [...formState.Questions]
                data = data.map(
                    (newQuestion) => {
                        if (!newQuestion.questionId) {
                            let { id, ...others } = newQuestion
                            return { questionId: id, ...others }
                        } else {
                            return newQuestion
                        }
                    }
                )

                result = arrayMergeUnique(result, data, (item1, item2) => (item1.questionId === item2.questionId))

                console.log("Merged", result)

                formState.Questions = result
            }
        )
    }

    const handleDeleteSelectedQuestions = (data) => {
        console.log(data)
        console.log(formState.Questions)
        setFormState(
            formState => {
                    formState.Questions.map(
                        c => {
                            if (data.id && c.id === data.id) {
                                c.deleted = true
                            }
                            return c
                        }
                    )

                    if (!data.id) {
                        formState.Questions = formState.Questions.filter(
                            c => c.questionId !== data.questionId
                        )
                    }
            }
        )
    }

    return (
        <View>
            <FindQuestionModal isOpen={isModalOpen} onClose={handleModalClose} onSave={handleModalSave} />
            <Heading level={3}>Compose Test</Heading>
            {/* General test info */}
            <TextField
                name="testName" 
                value={formState.data.name}
                onChange={handleChanges('name')}
            >
            </TextField>
            <TextAreaField
                name='description'
                value={formState.data.description}
                onChange={handleChanges('description')}
            >
            </TextAreaField>
            <TextAreaField
                name='instruction'
                value={formState.data.instruction}
                onChange={handleChanges('instruction')}
            >
            </TextAreaField>

            {/* Select questions to add to test */}
            <Button
                onClick={handleFindQuestion}
            >
                Find Questions
            </Button>

            {/* List of selected questions in test */}
            <Heading level={3}>Selected Questions</Heading>
            <SelectedQuestions selectedQuestionsProp={formState.Questions} key={formState.Questions} handleDeleteSelectedQuestions={handleDeleteSelectedQuestions} />

            {/* Save changes to form */}
            <Button onClick={handleSaveButton}>
                {isSubmitting && <Loader />}
                Save
            </Button>
            <Button onClick={() => navigate('/tests', { replace: true })}>
                Cancel
            </Button>
        </View>
    )
}

export default TestForm;