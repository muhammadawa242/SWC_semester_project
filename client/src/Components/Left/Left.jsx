import React, { useState } from 'react'
import './Left.css'
import {Link , NavLink } from 'react-router-dom';
import Picture from '../../assets/profile-2.jpg'
import ProfileCard from '../ProfileCard/ProfileCard';

function Left() {
    return (
    <div className='left'>
      <Link to="/profile" className='profile'>
        <ProfileCard />
      </Link>
      

      <div className="sidebar">

        <NavLink className="menu-item" to="/home" >
          <span><i className="uil uil-home"></i></span><h3>Home</h3>
        </NavLink>

        <NavLink className="menu-item" to="/explore" >
          <span><i className="uil uil-compass"></i></span><h3>Explore</h3>
        </NavLink>

        <NavLink className="menu-item" id='notifications' to='/'>
          <span><i className="uil uil-bell"><small className='notification-count'>+9</small></i></span><h3>Notification</h3>
          {/* ------------Notification PopUP ----------------- */}
          <div className="notifications-popup" >
            <div>
              <div className="profile-photo">
                <img src={Picture} />
              </div>

              <div className="notification-body" >
                <b>UserName</b> accepted your friend request
                <small className='text-muted'> 2 DAYS AGO</small>
              </div>
            </div>

            <div>
              <div className="profile-photo">
                <img src={Picture} />
              </div>

              <div className="notification-body">
                <b>UserName</b> accepted your friend request
                <small className='text-muted'> 2 DAYS AGO</small>
              </div>
            </div>

            <div>
              <div className="profile-photo">
                <img src={Picture} />
              </div>

              <div className="notification-body">
                <b>UserName</b> accepted your friend request
                <small className='text-muted'> 2 DAYS AGO</small>
              </div>
            </div>
            
          </div>
        </NavLink>

        <NavLink className="menu-item" to="/chat" >
          <span><i className="uil uil-envelope-alt"><small className='notification-count'>6</small></i></span><h3>Messages</h3>
        </NavLink>

        <NavLink className="menu-item" to="/bookmark" >
          <span><i className="uil uil-bookmark"></i></span><h3>Bookmark</h3>
        </NavLink>

        <NavLink className="menu-item" to='/theme' >
          <span><i className="uil uil-palette"></i></span><h3>Theme</h3>
        </NavLink>

      </div>

      <label htmlFor="create-post" className='btn btn-primary'> Create Post </label>
      
{/* Theme Customization */}
      <div className= "customize-theme">
              <div className= "card">

                <h2>Customized your View</h2>
                <p>Manage your font size, color, and backgroung</p>

                {/* Font Sizes */}
                <div className= "font-size">
                  <h4>Font Size</h4>
                  <div>
                    <h6>Aa</h6>
                    <div className="choose-size">
                        <span className= "font-size-1" />
                        <span className= "font-size-2 active" />
                        <span className= "font-size-3" />
                        <span className= "font-size-4" />
                        <span className= "font-size-5" />
                    </div>
                    <h3>Aa</h3>
                  </div>
                </div>

                {/* Primary Colors */}
                <div className="color">
                  <h4>Color</h4>
                  <div className="choose-color">
                     <span className="color-1 active"></span>
                     <span className="color-2"></span>
                     <span className="color-3"></span>
                     <span className="color-4"></span>
                     <span className="color-5"></span>
                  </div>
              </div>

              {/* Background Colors */}
              <div className="background">
                <h4>Background</h4>
                  <div className="choose-bg">

                    <div className="bg-1 active">
                      <span></span>
                      <h5 htmlFor="bg-1">Light</h5>                
                    </div>     

                    <div className="bg-2">
                      <span></span>
                      <h5 htmlFor="bg-2">Dim</h5>
                    </div>                                       
                    <div className="bg-3">
                      <span></span>
                      <h5 htmlFor="bg-3">Lights Out</h5>             
                    </div>  
                  </div>
                </div>
              </div>   
          </div>
    </div>
  )
}

export default Left

{/* <NavLink
  className={({ isActive }) => {
    const linkClasses = [classes.registerButton];
    if (isActive) linkClasses.push(classes.active);
    
    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
  }}
  to="/auth/SignUp"
>
  cart
</NavLink> */}


