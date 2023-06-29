import React, { createContext } from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import { Button, Heading } from "@aws-amplify/ui-react";

// import components
import TestList from "../components/test/TestList";

const TestManager = () => {
    return (
        <MainLayout>
            <h1>Test Manager</h1>
            <Link to="/test/create">
                <Button>Create</Button>
            </Link>
            <Heading level={3}>List of Tests</Heading>
            <TestList />
        </MainLayout>
    )
}

export default TestManager;