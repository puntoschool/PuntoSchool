var firebase = require("firebase");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyAVXsDsp4V5uMZTj-X6uS8U2dpTUq997-E",
        authDomain: "puntoschool-35c4f.firebaseapp.com",
        databaseURL: "https://puntoschool-35c4f.firebaseio.com",
        projectId: "puntoschool-35c4f",
        storageBucket: "puntoschool-35c4f.appspot.com",
        messagingSenderId: "328794520286",
        appId: "1:328794520286:web:2c59b03bcb9fbd94b2604f",
        measurementId: "G-Q267093CM4"
      };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);