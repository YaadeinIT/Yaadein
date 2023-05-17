import React from 'react'


export default function footer(){
  let footerStyle = {
    position: "absolute",
    width: "100%",
  }
  
  return (
    <footer class="bg-dark text-light " style={footerStyle}>
      <div class="footer_text">
        <h6 class="text-center">Yahi Baatein Toh Baad Mai Yaad Aengi ...</h6> 
        <p class="text-center">Shivank . Aditya . Shantanu</p>
      </div>
    </footer>
  )
}
