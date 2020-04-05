import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "divya-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://x5n362jgbg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_yQLVeyfPr",
        APP_CLIENT_ID: "656d6amqtk6qrdddc4cjriolqp",
        IDENTITY_POOL_ID: "us-east-1:a3937228-2931-4a74-9fcc-3d903305a603"
    }
};
