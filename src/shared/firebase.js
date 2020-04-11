import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBg8iIO27ghrAp_zT-QRUCsGa3ozf39UJ8",
    authDomain: "scheduler-c08f0.firebaseapp.com",
    databaseURL: "https://scheduler-c08f0.firebaseio.com",
    projectId: "scheduler-c08f0",
    storageBucket: "scheduler-c08f0.appspot.com",
    messagingSenderId: "657232469745",
    appId: "1:657232469745:web:df2efb6009645e7dd85350",
    measurementId: "G-X6WG2GQPCC"
};

firebase.initializeApp(firebaseConfig);

export default firebase;