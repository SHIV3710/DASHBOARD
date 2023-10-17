
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDF-2A8JNT2UNeLwT9uyAYoxjx7j8CFkF4",
  authDomain: "openaiproject-dccf7.firebaseapp.com",
  projectId: "openaiproject-dccf7",
  storageBucket: "openaiproject-dccf7.appspot.com",
  messagingSenderId: "839434579965",
  appId: "1:839434579965:web:766fbee32c4c45e8437394",
  measurementId: "G-WR18VS68HQ"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const analytics = getAnalytics(app);
// const provider = GoogleAuthProvider();

export{app,auth,analytics};