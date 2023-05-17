import React from 'react';
import {  Link } from 'react-router-dom'
import '../App.css'
export default function main(){

  return (
    <>
      <div class='image' py>
          <div>
            <text class = "yaadein" style={{ fontSize: "15vw" ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}> YAADEIN </text>
            <h1 class = "text-light" style={{ fontSize: "2.5vw", alignItems: 'center', justifyContent: 'center', display:"flex" }}>IT BATCH 2021-2025</h1>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto d-flex buttons text-light">
            <Link to="/login">
            <button class="btn  btn-outline-light btn-lg" type="button" ><b>Login</b></button>
            </Link>
            <Link to="/register">
            <button class="btn  btn-outline-light btn-lg" type="button"><b>Register</b></button>
            </Link>
          </div>
      </div>
      </>
  )
}
