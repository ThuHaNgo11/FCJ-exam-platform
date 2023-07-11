import React, {createContext} from 'react';
import MainLayout from '../components/MainLayout';
import QuestionList from "../components/question/QuestionList";
import { Link } from "react-router-dom";
import { Button, Heading, Card, Text } from "@aws-amplify/ui-react";
import {FaPlus} from "react-icons/fa";

export const QMContext = createContext(null)

const QuestionManager = () => {
    return (
        <MainLayout>
            <Card>
                <Heading level={3} textAlign="center">Question Manager</Heading>
                <Link to="/question/create">
                    <Button>
                        <FaPlus/>
                        <Text paddingLeft="5px">Create</Text>
                    </Button>
                </Link>
                <QuestionList />
            </Card>
        </MainLayout>
    )
}

export default QuestionManager;