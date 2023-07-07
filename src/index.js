
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// styles
import './css/App.scss'

// Set up frontend to use Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
