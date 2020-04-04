import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDsns_Ec0iYjUJVor4uY5-P_LiS2e16RB8",
  authDomain: "slack-clone-6dee1.firebaseapp.com",
  databaseURL: "https://slack-clone-6dee1.firebaseio.com",
  projectId: "slack-clone-6dee1",
  storageBucket: "slack-clone-6dee1.appspot.com",
  messagingSenderId: "333963514101",
  appId: "1:333963514101:web:fd2b91a690d3020f7735bc",
  measurementId: "G-NQ38F09XVP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
