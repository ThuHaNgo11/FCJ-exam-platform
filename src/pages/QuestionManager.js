import React from 'react';
import MainLayout from '../components/MainLayout';
import QuestionForm from '../components/question/QuestionForm';
import QuestionList from "../components/question/QuestionList";

const QuestionManager = () => {
    return (
        <MainLayout>
            <QuestionForm />
            <QuestionList />
        </MainLayout>
    )
}

export default QuestionManager;