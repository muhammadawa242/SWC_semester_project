import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"; // Import your CSS file

const Login = () => {
  return (
    <div className="container">
      <div className="img">
        <img src="/assets/pc.svg" alt="PC" />
      </div>
      <div className="login-container">
        <form action="index.html">
          <img className="avator" src="/assets/avator.svg" alt="Avatar" />
          <h2>AMS HUB, Join us</h2>
          <div className="input-div" one>
            <div className="i">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h5>Username</h5>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="input-div" two>
            <div className="i">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <h5>Password</h5>
              <input className="input" type="password" />
            </div>
          </div>
          <a href="#">
            Already have an account?
              <h3>Sign Up</h3>
          </a>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;