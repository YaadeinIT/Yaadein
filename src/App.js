import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
import Login from "./Components/login";
import Register from "./Components/register";
import Dashboard from './Components/dashboard';
import Currentuser from './Components/currentuser'


function App() {
  return (
    <div class="bg-dark" style={{margin:"0px", paddingBottom:"20px"}}>
      <Header title="Yaadein..."/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='user' element={<Currentuser/>}/>
        </Routes>
       </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
