import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuetGS8QeP-JVO8tLuUWMejp6Kyn1ebVA",
  authDomain: "miniurl-d88f3.firebaseapp.com",
  databaseURL: "https://miniurl-d88f3-default-rtdb.firebaseio.com",
  projectId: "miniurl-d88f3",
  storageBucket: "miniurl-d88f3.appspot.com",
  messagingSenderId: "941322329653",
  appId: "1:941322329653:web:2af4eef83c2823eb955b7c",
  measurementId: "G-3FE506PSY8"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const firestore = firebase.firestore();

export { database, firestore };
