// import libraries
import React, { useState } from "react";
import { useImmer } from "use-immer";
import { delay, getImmerChangeHandler } from "../../hooks/utils";
import { useLocation, useNavigate } from "react-router";

// import UI components
import { View, Heading, Button, TextAreaField, Loader } from "@aws-amplify/ui-react";

// import components
import SelectedQuestions from "./SelectedQuestions";

// import API functions
import saveTest from "../../api/testApi";

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

    const [formState, setFormState] = useImmer(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)

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

        const field = (formState.hasOwnProperty('id')) ? 'createTest' : 'updateTest'

        saveTest(formState)
            .then((data) => {
                console.log("Created new data", data.data[field])
                setFormState(initialState)
                setIsSubmitting(false)
                delay(1000).then(
                    () => navigate('/tests', { replace: true })
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleFindQuestion = (event) => {
    }

    return (
        <View>
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
            <SelectedQuestions selectedQuestionsProp={formState.Questions} />

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