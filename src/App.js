import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import LandingPage from './pages/LandingPage';
import { Authenticator } from '@aws-amplify/ui-react';

// Import components
import SignInPage from './pages/SignInPage';
import QuestionManager from './pages/QuestionManager';
import SingleQuestionPage from "./pages/SingleQuestionPage";
import TestManager from './pages/TestManager';
import SingleTestPage from './pages/SingleTestPage';
import ExamManager from './pages/ExamManager';
import SingleExamPage from './pages/SingleExamPage';
import TakeExamPage from './pages/TakeExamPage';
import ReviewSessionPage from "./pages/ReviewSessionPage";

const App = () => {
    return (
        <Authenticator.Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/questions" element={<QuestionManager />} />
                    <Route path="/question/:id" element={<SingleQuestionPage />} />
                    <Route path="/tests" element={<TestManager />} />
                    <Route path="/test/:id" element={<SingleTestPage />} />
                    <Route path="/exams" element={<ExamManager />} />
                    <Route path="/exam/:id" element={<SingleExamPage />} />
                    <Route path="/take-exam/:examid/:sessionid" element={<TakeExamPage />} />
                    <Route path="/review/:sessionid" element={<ReviewSessionPage />} />
                    <Route path="/signin" element={<SignInPage />}></Route>
                </Routes>
            </BrowserRouter>
        </Authenticator.Provider>
    )
}

export default App;