import React from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const imgName = useSelector(state => state.user.picturePath);
  const navigate = useNavigate();

  return (
    <nav>
        <div className="navcontainer">

          <h2 className="logo" onClick={()=>{navigate("/home")}}>
            AMS 
          </h2>

          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input type="search" placeholder='Search..' />
          </div>

          <div className="create">
            {/* <label htmlFor="create-post" className='btn btn-primary'>Create</label> */}
            <div className="profile-photo ">
              <img src={`https://ams-hub-bucket.s3.ap-south-1.amazonaws.com/${imgName}`} alt="" />
            </div>
          </div>

        </div>
    </nav>
  )
}

export default Navbar
