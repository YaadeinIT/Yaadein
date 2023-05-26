import { Outlet, Link, useNavigate } from "react-router-dom";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const Register = (props) => {
  const navigate = useNavigate();
  let divstyle = {
    marginTop: `5%`,
    marginBottom: `5%`,
    marginRight: `10%`,
    marginLeft: `10%`,
    padding: `5%`,
    alignItems: "center",
  };
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState();
  const [regNo, setRegNo] = useState();
  const [name, setName] = useState();
  // const [dob, setDob] = useState();
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const [interest, setInterest] = useState();
  const [bio, setBio] = useState();
  const [password, setPassword] = useState();

  const array = ["Single", "In a relationship", "It's Complicated"];

  const signUp = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      console.log("Password Length Should be Greater Than 6");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const { uid, email } = user;
        const docRef = doc(db, "users", uid);
        const res = array[role];
        const data = {
          regNo,
          name,
          email,
          interest,
          bio,
          res,
          date,
        };
        setDoc(docRef, data)
          .then(() => {
            console.log("Document has been added successfully");
            return navigate("/login", { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
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
      class="d-flex justify-content-center bg-light rounded"
      style={divstyle}
    >
      <form onSubmit={signUp}>
        <h1
          class="display-3"
          style={{
            textAlign: "center",
          }}
        >
          REGISTER
        </h1>
        <br />
        <div class="mb-3">
          <label for="regNo" class="form-label">
            Registration Number :{" "}
          </label>
          <br />
          <input
            type="number"
            class="form-control registration_number"
            id="regNo"
            pattern="[0-9]{5}"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name :{" "}
          </label>
          <br />
          <input
            type="text"
            class="form-control"
            id="name"
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

            <div class="mb-3">
              <div className="form-group">
                <input type="date" onChange={handleChange} ref={dateInputRef} />
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label" required>
            Email Address :{" "}
          </label>
          <br />
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setEmail(e.target.value + "@aitpune.edu.in")}
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                @aitpune.edu.in
              </span>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="interest" class="form-label" required>
            Interest/Hobbies :{" "}
          </label>
          <br />
          <input
            type="text"
            class="form-control"
            id="interest"
            onChange={(e) => setInterest(e.target.value)}
            required
          />
        </div>

        <div class="mb-3">
          <label for="bio" class="form-label" required>
            Bio :{" "}
          </label>
          <br />
          <input
            type="text"
            class="form-control"
            id="bio"
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
            onChange={(e) => setRole(e.target.value)}
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
          <label for="password" class="form-label" required>
            Password :{" "}
          </label>
          <br />
          <input
            type="password"
            class="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="text-center mb-3">
          <button type="submit" class="btn btn-dark">
            Register
          </button>
        </div>
        <div class="text-center mb-3">
          <Link to="/" class="btn btn-outline-dark">
            Back to Home
          </Link>
          <Outlet />
        </div>
          <Link to="/login" style={{textAlign:"center"}}>
           <p> Already Registered? Login Here</p>
          </Link>
      </form>
    </div>
  );
};
export default Register;
