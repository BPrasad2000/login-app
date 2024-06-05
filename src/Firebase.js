
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxnAojQlQq3SIacp89GSTSxPVho0SSw-U",
  authDomain: "athentication-fde52.firebaseapp.com",
  projectId: "athentication-fde52",
  storageBucket: "athentication-fde52.appspot.com",
  messagingSenderId: "196727994822",
  appId: "1:196727994822:web:300cd9814cf9239f97dac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export {auth}