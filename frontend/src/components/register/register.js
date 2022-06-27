import React, { Component, useState } from "react";
import "./register.css";
import nakama from "./nakama-bg.png";

function Register() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [nama,setNama] = useState("");
  const [email,setEmail] = useState("")

  async function handleSubmit(e){
    e.preventDefault();
    let result = await fetch('http://localhost:8082/api/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:username,
        password:password,
        nama:nama,
        email:email
      })
    });
    result = await result.json();

    console.log(result)
    alert(result)
    }
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-3">
        <img src={nakama} alt="" height={400} />
      </div>
      <div className="col-sm-4">
        <form>
          <h3 className="mb-4">Register NAKAMA</h3>
          <div className="mb-3">
            <input type="nama" className="form-control" placeholder="Nama" onChange={(e)=>setNama(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <p className="sudah-punya text-right">
            <a href="/login">Sudah punya akun?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
