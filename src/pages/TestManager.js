import React from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import { Button, Heading } from "@aws-amplify/ui-react";

// import components
import TestList from "../components/test/TestList";

const TestManager = () => {
    return (
        <MainLayout>
            <Heading level={3}>Test Manager</Heading>
            <Link to="/test/create">
                <Button>Create</Button>
            </Link>
            <TestList />
        </MainLayout>
    )
}

export default TestManager;