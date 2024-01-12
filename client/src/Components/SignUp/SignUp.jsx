import React, { useState } from "react";
import "./SignUp.css"; // Import the corresponding CSS file
import {register} from "../../apis"
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picturePath, setPicturePath] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Validate fields and perform signup logic
    if (
      !firstName ||
      !lastName ||
      !location ||
      !occupation ||
      !email ||
      !password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email.includes("gmail")) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    // Perform signup logic (you can add API calls or other logic here)
    try{
      await register(
        {
          firstName: firstName,
          lastName: lastName,
          location: location,
          occupation: occupation,
          email: email,
          password: password,
          picture: picturePath,
          picturePath: picturePath.name
        }
      );

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
        navigate("home");
      }

    }catch(err){
      console.log("error in signup scripting " + err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPicturePath(file);
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2 style={{ color: "darkblue" }}>AMS HUB</h2>
      </div>
      <h2>Sign Up</h2>
      <div className="name-fields">
        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Occupation:</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} name="picturePath" />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;