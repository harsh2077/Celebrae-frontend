import React, {useState} from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import AnimatedHouse from "./components/AnimatedHouse"
import Image from './components/Image';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility

  // This function is called when the login button is clicked
  const handleLogin = () => {
    setIsLoggedIn(true);          // Set user as logged in
    setIsNavbarVisible(false);    // Hide the navbar after login
  };
  return (
    
   <div className='App'>
       {isNavbarVisible && <Navbar />}
      <Image/>
      
      {isLoggedIn ? <AnimatedHouse/> : <Login onLogin={handleLogin}/>}
      
 


   </div>

    
   
  );
}

export default App;
