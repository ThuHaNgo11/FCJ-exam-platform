// import libraries
import React, { useState } from "react";
import { useImmer } from "use-immer";
import { delay, getImmerChangeHandler } from "../hooks/utils";
import { useLocation, useNavigate } from "react-router";

// import components

const initialState = { 
    data: {

    }
}

const TestForm = () => {
    const location = useLocation()

    const navState = location.state || initialState

    const [formState, setFormState] = useImmer(navState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleChanges = getImmerChangeHandler(setFormState)

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
                    () => navigate('/tests', { replace:true})
                )
            }, (reason) => {
                console.log(reason)
                setIsSubmitting(false)
            })
    }

    return (
        <form onSubmit={handleSaveButton}>
            <h1>Test Form</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChanges}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChanges}
            />
            <button type="submit" disabled={isSubmitting}>Save</button>
        </form>
    )
}