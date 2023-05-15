import React from 'react';
import {  Link } from 'react-router-dom'
import '../App.css'
export default function main(){

  // let divstyle = {
  //   width: "95%",
  //   height: "500px",
  //   background: "transparent",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }

  return (
    <>
      <div class='image'>
          <div>
            <h1 class = "text-light" style={{ fontSize: 200,display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', }}> Yaadein... </h1>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
            <h1 class = "text-dark" style={{ fontSize: 40,  }}>IT BATCH 2021-2025</h1>
            <Link to="/login">
            <button class="btn btn-secondary" type="button" ><b>Login</b></button>
            </Link>
            <Link to="/register">
            <button class="btn btn-secondary" type="button"><b>Register</b></button>
            </Link>
          </div>
      </div>
      </>
  )
}
