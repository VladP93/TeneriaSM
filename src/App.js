import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import firebase from "./utils/Firebase";
import "firebase/auth";
import "firebase/firestore";

import Logged from "./pages/Logged";

import "./App.css";

const db = firebase.firestore(firebase);

function App() {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState("");

  useEffect(() => {
    if (user) {
      db.collection("Roles")
        .where("uid", "==", user.uid)
        .get()
        .then((res) => {
          res.docs[0]?.data()
            ? setRol(res.docs[0]?.data().rol)
            : setRol("noRol");
        });
    } else {
      setRol("noRol");
    }
  }, [user]);

  firebase.auth().onAuthStateChanged((currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <div className="App">
        {!user ? (
          <Login setRol={setRol} setUser={setUser} />
        ) : (
          <Logged user={user} setUser={setUser} rol={rol} />
        )}
      </div>
    </>
  );
}

export default App;
