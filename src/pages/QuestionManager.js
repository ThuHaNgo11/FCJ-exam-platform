import React, {createContext, useState} from 'react';
import MainLayout from '../components/MainLayout';
import QuestionList from "../components/question/QuestionList";
import { Link } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";

export const QMContext = createContext(null)

const QuestionManager = () => {
    return (
        <MainLayout>
            <Link to="/question/create">
                <Button>Create</Button>
            </Link>
            <QuestionList />
        </MainLayout>
    )
}

export default QuestionManager;