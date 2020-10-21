import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7J3b41vE-PN6Hjrl5rwGjVDfBmWcV6NQ",
  authDomain: "teneriasm-dev.firebaseapp.com",
  databaseURL: "https://teneriasm-dev.firebaseio.com",
  projectId: "teneriasm-dev",
  storageBucket: "teneriasm-dev.appspot.com",
  messagingSenderId: "8106984019",
  appId: "1:8106984019:web:4886a35d6d138bb401fca6",
};

export default firebase.initializeApp(firebaseConfig);
