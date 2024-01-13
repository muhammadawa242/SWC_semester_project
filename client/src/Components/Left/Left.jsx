import React, { useState , useRef , useEffect} from 'react'
import './Left.css'
import {Link , NavLink } from 'react-router-dom';
import Picture from '../../assets/profile-2.jpg'
import ProfileCard from '../ProfileCard/ProfileCard';
import Theme from '../Theme/Theme';

function Left() {
  const [isThemeVisible, setThemeVisible] = useState(false);
  const themeRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideTheme = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setThemeVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideTheme);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideTheme);
    };
  }, [themeRef]);

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

        <div className="menu-item" onClick={() => setThemeVisible(!isThemeVisible)}>
          <span><i className="uil uil-palette"></i></span><h3>Theme</h3>
        </div>

      </div>

      <label htmlFor="create-post" className='btn btn-primary'> Create Post </label>
      {isThemeVisible && <Theme ref={themeRef} />}
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


