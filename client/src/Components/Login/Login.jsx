import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "../../state";
import {login} from "../../apis"
import "./Login.css"; // Import your CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try{
      const loggedIn = await login({
        email: email,
        password: password
      });

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/home");
      }
    }catch(err){
      console.log("error in login scripting " + err);
    }
  }

  return (
    <div className="container">
      <div className="img">
        <img src="/assets/pc.svg" alt="PC" />
      </div>
      <div className="login-container">
        <div>
          <img className="avator" src="/assets/avator.svg" alt="Avatar" />
          <h2>AMS HUB, Join us</h2>
          <div className="input-div" one>
            <div className="i">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h5>Email</h5>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-div" two>
            <div className="i">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <h5>Password</h5>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <a href="#">
            Already have an account?
            <h3>Sign Up</h3>
          </a>
          <input
            type="submit"
            onClick={handleSignIn}
            className="btn"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;