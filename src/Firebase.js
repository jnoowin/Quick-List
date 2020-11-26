import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaz0bJ3zS9-8gZbERV1Zv-fTDaTuZNTrs",
  authDomain: "to-do-app-d4959.firebaseapp.com",
  databaseURL: "https://to-do-app-d4959.firebaseio.com",
  projectId: "to-do-app-d4959",
  storageBucket: "to-do-app-d4959.appspot.com",
  messagingSenderId: "1022546519427",
  appId: "1:1022546519427:web:d4e11a53ab144b8d4842b6",
  measurementId: "G-GLG2SHG7C2",
};

app.initializeApp(firebaseConfig);
export default app;
