import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import LandingPage from './pages/LandingPage';

// Import components
import QuestionManager from './pages/QuestionManager';
import SingleQuestionPage from "./pages/SingleQuestionPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/questions" element={<QuestionManager />} />
                <Route path="/question/:id" element={<SingleQuestionPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;