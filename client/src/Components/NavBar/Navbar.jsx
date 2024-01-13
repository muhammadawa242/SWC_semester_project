import React from 'react'
import './NavBar.css'
import ProfilePic from '../../assets/profile-1.jpg'

function Navbar() {
  return (
    <nav>
        <div className="navcontainer">

          <h2 className="logo">
            AMS 
          </h2>

          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input type="search" placeholder='Search..' />
          </div>

          <div className="create">
            {/* <label htmlFor="create-post" className='btn btn-primary'>Create</label> */}
            <div className="profile-photo ">
              <img src={ProfilePic} alt="" />
            </div>
          </div>

        </div>
    </nav>
  )
}

export default Navbar
