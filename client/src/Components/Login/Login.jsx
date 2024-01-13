import React from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "../../state";
import {login} from "../../apis"
import * as Yup from "yup";
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(3, "Password must be at least 3 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="CONTAINER">
      <div className="IMG">
        <img src="/assets/pc.svg" alt="PC" />
      </div>
      <div className="LOGIN-CONTAINER">
        <form onSubmit={formik.handleSubmit} action="index.html">
          <img className="AVATOR" src="/assets/avator.svg" alt="Avatar" />
          <h2>AMS HUB, Join us</h2>
          
          

          <div className="INPUT-DIV"> 
            <div className="I">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              
              <input
                className="INPUT"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div
            className={`INPUT-DIV ${
              formik.touched.password && formik.errors.password ? "error" : ""
            }`}
            two
          >
            <div className="I">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              
              <input
                className="INPUT"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <a href="#">
            Already have an account?
            <h3>Sign Up</h3>
          </a>
          <input type="submit" onClick={handleSignIn} className="BUTTON" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
