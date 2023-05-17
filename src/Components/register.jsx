import { Outlet, Link } from 'react-router-dom'
import React from "react";
import DatePicker from "./datePicker";
import App from "./datePicker";
import { useState } from "react";
import { auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
    let divstyle = {
      marginTop: `5%`,
      marginBottom: `5%`,
      marginRight: `10%`,
      marginLeft: `10%`,
      padding: `5%`,
      alignItems:'center'
    };
    const [role, setRole] = useState(0);
    const [email, setEmail] = useState();
    const [regNo, setRegNo] = useState();
    const [name, setName] = useState();
    // const [dob, setDob] = useState();
  
    const [interest, setInterest] = useState();
    const [bio, setBio] = useState();
    const [relationship, setRelationship] = useState();
    const [password, setPassword] = useState();
  
    const array = ["Single", "In a relationship", "It's Complicated"];
  
    const signUp = async (e) => {
      e.preventDefault();
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    };
  
    return (
      <div
        class="d-flex justify-content-center border border-secondary"
        style={divstyle}
      >
        <form onSubmit={signUp}>
          <h1
            style={{
              textDecorationLine: `underline`,
              textAlign:'center'
            }}
          >
            REGISTER
          </h1>
          <br />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Registration Number :{" "}
            </label>
            <br />
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              pattern="[0-9]{5}"
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Name :{" "}
            </label>
            <br />
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label class="control-label" for="date" required>
                DOB :{" "}
              </label>
              <br />
              <DatePicker/>              
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" required>
              Email Address :{" "}
            </label>
            <br />
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"
              onChange={(e)=>setEmail(e.target.value+"@aitpune.edu.in")}/>
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">@aitpune.edu.in</span>
              </div>
            </div>
  
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" required>
              Interest/Hobbies :{" "}
            </label>
            <br />
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setInterest(e.target.value)}
              required
            />
          </div>
  
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" required>
              Bio :{" "}
            </label>
            <br />
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <p>Relationship Status :</p>
          <div className="dropdown mb-3 ">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              required
              onChange={(e) => setRelationship(e.target.value)}
            >
              {array[role]}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setRole(0)}
                >
                  {array[0]}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setRole(1)}
                >
                  {array[1]}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setRole(2)}
                >
                  {array[2]}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setRole(3)}
                >
                  {array[3]}
                </button>
              </li>
            </ul>
          </div>
          <br />
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" required>
              Password :{" "}
            </label>
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
          <Link to="/">Back to Home</Link>
         <Outlet />
        </form>
      </div>
    );
  };
  export default Register;
  