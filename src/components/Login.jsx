// src/Login.js
import React, { useState,useEffect } from "react";
import "./Login.css"; // You can add CSS styles in this file

const Login = ({onLogin}) => {
  const [OnlineID, setOnlineID] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
 
 
 
 
 
 
 
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple form validation (for demonstration)
    if (OnlineID === "" || password === "") {
      setErrorMessage("Both fields are required");
      return;
    }

    setErrorMessage("");
    setLoading(true);
    
    setTimeout(()=>{
      setLoading(false);
      if (rememberMe){
        localStorage.setItem("rememberedOnlineID",OnlineID);
      }
      onLogin();
    },2000);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>  Login to your site </p>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>OnlineID</label>
          <input
            type="OnlineID"
            value={OnlineID}
            onChange={(e) => setOnlineID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group remember-me">
          <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e)=>setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        



        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" disabled={loading} className="login-button">{loading ? (
          <div className="spinner"></div>
        ):(
           "Login"
        )} 
        </button>
      </form>
      






    </div>
  );
};

export default Login;
