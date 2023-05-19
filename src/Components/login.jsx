import { Outlet, Link } from 'react-router-dom'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
/* eslint-disable */

export default function login() {
    let divstyle = {
        marginTop: `5%`,
        marginBottom: `5%`,
        marginRight: `20%`,
        marginLeft: `20%`,
        padding: `5%`,
      };
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    
    // const auth = getAuth();
    const logIn = async(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Yessssss");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

    firebase.auth().onAuthStateChanged(user => {
      user ? null : history.push("/login");
      renderApp();
   });

  return (
    
    <div class="d-flex justify-content-center bg-light rounded"
    style={divstyle}>
      <form onSubmit={logIn}>
        <h1 class ="display-3" style={{ textAlign:'center'}} 
        >LOGIN</h1>
        <br />
      <div class="form-group">
            <label for="exampleInputEmail1">Email address :</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={(e)=>setEmail(e.target.value+"@aitpune.edu.in")}/>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">@aitpune.edu.in</span>
            </div>
        </div>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password :</label><br />
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br />
        <div class="text-center mb-3">
          <button type="submit" class="btn btn-dark">
            Login
          </button>
          </div>
          <div class="text-center mb-3">
          <Link to="/" class="btn btn-outline-dark">Back to Home</Link>
         <Outlet />
         </div>
        </form>
    </div>
  )
}



    


