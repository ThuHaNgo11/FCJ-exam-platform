import React from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import { Button, Heading, Card, Text } from "@aws-amplify/ui-react";

// import components
import TestList from "../components/test/TestList";
import {FaPlus} from "react-icons/fa";

const TestManager = () => {
    return (
        <MainLayout>
            <Card>
                <Heading level={3} textAlign="center">Test Manager</Heading>
                <Link to="/test/create">
                    <Button>
                        <FaPlus/>
                        <Text paddingLeft="5px">Create</Text>
                    </Button>
                </Link>
                <TestList />
            </Card>
        </MainLayout>
    )
}

export default TestManager;