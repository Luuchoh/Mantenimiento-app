import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCy4tyJjmpe2IGlBwIDVym6EQinArA6Mpk",
    authDomain: "mantenimiento-dcfa9.firebaseapp.com",
    projectId: "mantenimiento-dcfa9",
    storageBucket: "mantenimiento-dcfa9.appspot.com",
    messagingSenderId: "969180945056",
    appId: "1:969180945056:web:8ae53fdece0ddf560707c5",
    measurementId: "G-6P5KKZDZ7S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}