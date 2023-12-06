import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNeSCFQNqzp9LWLlNZJPZkKn54P0KY1Z8",
    authDomain: "webdevv-ddb2e.firebaseapp.com",
    databaseURL: "https://webdevv-ddb2e-default-rtdb.firebaseio.com",
    projectId: "webdevv-ddb2e",
    storageBucket: "webdevv-ddb2e.appspot.com",
    messagingSenderId: "452236720617",
    appId: "1:452236720617:web:165f68f6cbbc772bb1f378",
    measurementId: "G-NPELRYBPQM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
