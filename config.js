import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAawsVvWaGhQiaRlIqiGh9k3ozbHC5pCn4",
  authDomain: "attendance-9c7f5.firebaseapp.com",
  databaseURL: "https://attendance-9c7f5-default-rtdb.firebaseio.com",
  projectId: "attendance-9c7f5",
  storageBucket: "attendance-9c7f5.appspot.com",
  messagingSenderId: "415668302875",
  appId: "1:415668302875:web:8911034b6b7b7728a4b4be"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();