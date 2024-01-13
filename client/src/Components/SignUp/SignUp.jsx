import React, { useState } from "react";
import "./SignUp.css"; // Import the corresponding CSS file

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSignUp = () => {
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
    alert("Signup successful!");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2 style={{ color: "darkblue" }}>AMS HUB</h2>
      </div>
      <h2>Sign Up</h2>
      <div className="name-fields">
        <div className="input-group">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <label className="form-label">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="form-label">Occupation:</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="form-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="form-label">Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;