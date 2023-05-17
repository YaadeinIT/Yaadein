import React from 'react'

export default function header(props) {
  return (
        <nav class="navbar bg-body-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"  style={{ fontSize: "2vw", color: "#5a5a55"}} ><b>{props.title}</b></a>
                <a class="navbar-brand" href="/" style={{ fontSize: "1.5vw", color: "fff"}}>IT BATCH 2025</a>
            </div>
        </nav>
  )
}
