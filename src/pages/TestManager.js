import React, { createContext } from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";


const TestManager = () => {
    return (
        <MainLayout>
            <h1>Test Manager</h1>
            <Link to="/test/create">
                <Button>Create</Button>
            </Link>
        </MainLayout>
    )
}

export default TestManager;