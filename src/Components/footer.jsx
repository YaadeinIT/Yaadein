import React from 'react'


export default function footer(){
  let footerStyle = {
    position: "absolute",
    top: "88.5vh",
    width: "100%",
    backgroundColour: "red"
  }
  
  return (
    <footer class="bg-dark text-light py-3" style={footerStyle}>
      <p class="text-center">
        <h5>SHIVANK . ADITYA . SHANTANU</h5> 
      </p>
    </footer>
  )
}
