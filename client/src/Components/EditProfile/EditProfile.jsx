import React from "react";
import "../Animate/animate.css";
// import "../Bootstrap/bootstrap/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../state"; 
import { useNavigate } from "react-router-dom";
import { updatedUser } from "../../apis";
import { useState } from "react";
import "./EditProfile.css";

import Navbar from "../NavBar/Navbar";

function EditProfile() {
  const user = useSelector((state) => state.user);
  const aws = useSelector((state) => state.awsPath);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userpicturePath = useSelector((state) => state.user.picturePath);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [location, setLocation] = useState(user.location);
  const [occupation, setOccupation] = useState(user.occupation);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [picturePath, setPicturePath] = useState("");

  const handleSave = async () => {
    const values = {
      firstName: firstName,
      lastName: lastName,
      location: location,
      occupation: occupation,
      email: email,
      password: password,
      picture: picturePath,
      picturePath: picturePath.name
    };

    try {
      const updatedData = await updatedUser(
        token,
        values,
        user._id
      );

      dispatch(setUser({ user: updatedData }));
      navigate("/home");
      
    } catch (err) {
      console.log("error in setting user data: " + err);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container" style={{ margin: "60px " }}>
        <div className="main-body">
          <div className="row ">
            <div className="col-lg-4 ">
              <div
                className="card animate__animated animate__fadeIn"
                style={{ marginTop: "70px" }}
              >
                <div className="card-body">
                  <div className="row mb-3 animate__animated animate__slideInLeft">
                    <div
                      className="d-flex flex-column align-items-center text-center"
                      style={{ marginLeft: "20px" }}
                    >
                      <img
                        src={aws+userpicturePath}
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width="110"
                      />
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 " style={{ marginTop: "22px" }}>
                          <a
                            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary" // Increase font size and set color
                            style={{
                              fontSize: "large",
                              marginLeft: "120px",
                              marginTop: "-5px",
                            }} // Move it towards right and up
                          >
                            Github
                          </a>
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .. */}
            </div>
            <div className="col-lg-8">
              <div
                className="card animate__animated animate__fadeIn"
                style={{ marginTop: "70px" }}
              >
                <div className="card-body ">
                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control"           
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Location</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Occupation</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" 
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* ... other rows ... */}

                  <div className="row mb-3 animate__animated animate__slideInRight">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Profile Picture</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <label
                        className="form-control"
                        style={{ cursor: "pointer" }}
                      >
                        Choose File
                        <input
                          type="file"
                          className="d-none"
                          name="picturePath"
                          accept="image/*"
                          onChange={(e) => setPicturePath(e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row animate__animated animate__slideInRight">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="button"
                        className="btn btn-primary px-4"
                        onClick={handleSave}
                        value="Save Changes"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
