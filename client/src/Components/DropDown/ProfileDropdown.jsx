import React from 'react'
import { Link } from 'react-router-dom';
import './ProfileDropdown.css'

const ProfileDropdown = ({ onClose, onProfileLinkClick, onLogoutClick }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ul>
          <li onClick={onProfileLinkClick}>
            <Link to="/profile"> <p className='text-bold'>Profile</p></Link>
          </li>
          <li onClick={onLogoutClick}><p className='text-bold'>Logout</p></li>
        </ul>
        <button className='btn btn-primary' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileDropdown
