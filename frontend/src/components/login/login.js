import React, { Component } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import nakama from "./nakama-bg.png";

function Login() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-3">
        <img src={nakama} alt="" height={400} />
      </div>
      <div className="col-sm-4">
        <form>
          <h3 className="mb-4">Login NAKAMA</h3>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
            <button type="submit" className="btn btn-primary">
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
