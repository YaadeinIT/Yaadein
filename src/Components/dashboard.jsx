import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import '../App.css';
import { auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { db } from "../firebase";
/* eslint-disable */


// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;
//   const uid = user.uid;
//   console.log(email);
// }

const fetch = () =>{
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'users'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        name: doc.data()
      })))
    })
  },[]);  
  console.log(tasks);
};

export default function dashboard() {
  fetch();
  return (
    <div
      style={{
        height: "77vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 class="display-3 text-light" style={{ fontSize: "10vw" }}>
        WELCOME TO SE-IT
      </h1>
      <Link to="/">
        <p class="btn btn-light"> Logout</p>
      </Link>
    </div>
  );
}
