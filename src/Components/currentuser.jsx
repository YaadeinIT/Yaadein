import React from 'react';
import { auth } from '../firebase';
import "firebase/auth";
import { Link } from 'react-router-dom';
    
class Profile extends React.Component {
   render () {
      let mail = auth.currentUser.email;
      const array = mail.split("@");
      let user = array[0];
      //let user = "Shivank";
      console.log(auth);
         return (
            <div style={{height:"77vh",display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:"column", }}>
            <h1 class="display-3 text-light" style={{ fontSize: "8vw"}} >Hi User <h1 class="display-3 text-success"> {user} </h1> </h1>
            <Link to="/">
            <p class="btn btn-light"> Logout</p>
            </Link>
        </div>

         );
   }
}
    
export default Profile;