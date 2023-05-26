import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "../App.css";
import { Firestore, QuerySnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react"; 
import firebase from "firebase";

/* eslint-disable */

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
  console.log(email);
}


export default function dashboard() {
  
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
      <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      </div>
      <Link to="/">
        <p class="btn btn-light"> Logout</p>
      </Link>
    </div>
  );
}
