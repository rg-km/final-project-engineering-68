import React, { Component, useState, useNavigate } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import nakama from "./nakama-bg.png";

function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    let result = await fetch('http://localhost:8082/api/user/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:username,
        password:password
      })
    });
    result = await result.json();
    console.warn(result);
    alert(result)
    
    // if(result.status === 200){
    //   localStorage.setItem('user-info',JSON.stringify(result));
    //   navigate("/profile-pengajar");
    }
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-3">
        <img src={nakama} alt="" height={400} />
      </div>
      <div className="col-sm-4">
        <form>
          <h3 className="mb-4">Login NAKAMA</h3>
          <div className="mb-3">
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label " htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="#">Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
