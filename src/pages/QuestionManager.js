import React, {createContext} from 'react';
import MainLayout from '../components/MainLayout';
import QuestionList from "../components/question/QuestionList";
import { Link } from "react-router-dom";
import { Button, Heading } from "@aws-amplify/ui-react";

export const QMContext = createContext(null)

const QuestionManager = () => {
    return (
        <MainLayout>
            <Heading level={3}>Question Manager</Heading>
            <Link to="/question/create">
                <Button>Create</Button>
            </Link>
            <QuestionList />
        </MainLayout>
    )
}

export default QuestionManager;