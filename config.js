import Firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyA0t2WhqlOXKV5qcIknlS8E0kzG1gStnTg",
    authDomain: "why-don-t-we-45fec.firebaseapp.com",
    databaseURL: "https://why-don-t-we-45fec.firebaseio.com",
    projectId: "why-don-t-we-45fec",
    storageBucket: "why-don-t-we-45fec.appspot.com",
    messagingSenderId: "609605893154",
    appId: "1:609605893154:web:85da927ec83cac84d65e7b",
    measurementId: "G-RGFVN5CGHG"
  };
  const app = Firebase.initializeApp(firstbaseConfig);
  export const db = app.database();