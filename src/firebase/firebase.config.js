import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqWew7EUTk8buA_HsCLhrSKK3XyiyhRfw",
  authDomain: "a11-helphive.firebaseapp.com",
  projectId: "a11-helphive",
  storageBucket: "a11-helphive.appspot.com",
  messagingSenderId: "147054257612",
  appId: "1:147054257612:web:668f746a69a4494402a969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
