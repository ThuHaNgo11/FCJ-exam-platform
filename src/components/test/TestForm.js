// import libraries
import React, { forwardRef, useState } from "react";
import { useImmer } from "use-immer";
import { arrayMergeUnique, delay, getImmerChangeHandler } from "../../hooks/utils";
import { useLocation, useNavigate } from "react-router";

// import UI components
import { View, Heading, Button, TextAreaField, Loader } from "@aws-amplify/ui-react";

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
                delay(1000).then(
                    () => navigate('/tests', { replace: true })
                )
            })
            .catch((error) => {
                console.log(error)
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
                            let {id, ...others} = newQuestion
                            return {questionId: id, ...others}
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

    return (
        <View>
            <FindQuestionModal isOpen={isModalOpen} onClose={handleModalClose} onSave={handleModalSave}/>
            <Heading level={3}>Compose Test</Heading>
            {/* General test info */}
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
            <SelectedQuestions selectedQuestionsProp={formState.Questions} key={formState.Questions} />

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