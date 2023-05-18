import { Outlet, Link , useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth} from '../firebase';
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
    const navigate = useNavigate();
    
    // const auth = getAuth();
    const logIn = async(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Yessssss");
        return navigate('/dashboard',{replace:true});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          return navigate("/login", { replace: true });
        }
        else{
          return navigate("/register", { replace: true });
        }
      });
      return () => {
        listen();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    ,[]);


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
          <div class="text-center mb-3 d-flex flex-column">
          <Link to="/" class="btn btn-outline-dark">Back to Home</Link>
           <Outlet />
         </div>
         <Link to="/register" style={{textAlign:"center"}}>
          <p> Not Registered? Register Here</p>
        </Link>
        </form>
    </div>
  )
}



    


