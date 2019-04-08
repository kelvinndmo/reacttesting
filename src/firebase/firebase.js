import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDy1eR40H4BPn6h78LzINcoLyd_At-P4u8",
  authDomain: "expensify-7dedc.firebaseapp.com",
  databaseURL: "https://expensify-7dedc.firebaseio.com",
  projectId: "expensify-7dedc",
  storageBucket: "expensify-7dedc.appspot.com",
  messagingSenderId: "226094320839",
};

firebase.initializeApp(config);
export const database = firebase.database().ref("./notes");
