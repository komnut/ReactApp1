import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBG1D2WFOAAnlzFq7HrYy0tRmhs_kgCF-w",
    authDomain: "your-project-99d14.firebaseapp.com",
    databaseURL: "https://your-project-99d14.firebaseio.com",
    projectId: "your-project-99d14",
    storageBucket: "your-project-99d14.appspot.com",
    messagingSenderId: "532069458593"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
