import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAP3_3Q_MM0xcrGwf1yJS2mY-tln8-I-3A",
    authDomain: "myapp-fe775.firebaseapp.com",
    databaseURL: "https://myapp-fe775.firebaseio.com",
    projectId: "myapp-fe775",
    storageBucket: "myapp-fe775.appspot.com",
    messagingSenderId: "877705586853"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
