import React, {createContext, useState} from 'react';
import MainLayout from '../components/MainLayout';
import QuestionForm from '../components/question/QuestionForm';
import QuestionList from "../components/question/QuestionList";

export const QMContext = createContext(null)

const QuestionManager = () => {
    const [newFormLoad, setNewFormLoad] = useState(null)
    return (
        <QMContext.Provider value={{newFormLoad, setNewFormLoad}}>
            <MainLayout>
                <QuestionForm />
                <QuestionList />
            </MainLayout>
        </QMContext.Provider>
    )
}

export default QuestionManager;