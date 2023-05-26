import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
/* eslint-disable */


export default function dashboard() {
  return (
    <div style={{height:"77vh",display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:"column", }}>
        <h1 class="display-3 text-light" style={{ fontSize: "10vw"}} >WELCOME TO SE-IT</h1>
        <Link to="/">
        <p class="btn btn-light"> Logout</p>
        </Link>
    </div>
  )
}

