import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import App from './pages/App';
import QuestionManager from './pages/QuestionManager';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/questions" element={<QuestionManager/>}/>
            </Routes>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
