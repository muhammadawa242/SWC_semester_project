import React , {useState} from 'react'
import ProfileDropdown from '../DropDown/ProfileDropdown.jsx'
import './NavBar.css'
import { useSelector } from 'react-redux'


function Navbar() {
  const imgName = useSelector(state => state.user.picturePath);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleProfileLinkClick = () => {
    // You can perform any additional actions here before navigating to the profile page
    // For example, close the dropdown
    setDropdownVisible(false);
  };

  const handleLogoutClick = () => {
    // Logout alert
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
    // Perform logout logic here
    // For example, redirect to the login page
    // window.location.href = '/login'; // Replace with your actual logout logic
    }
  };

  const handleCloseModal = () => {
    setDropdownVisible(false);
  };

  return (
  <nav>
    <div className="navcontainer">
      <h2 className="logo">AMS </h2>
      <div className="search-bar">
        <i className="uil uil-search"></i>
        <input type="search" placeholder='Search..' />
      </div>
      <div className="create">
        {/* <label htmlFor="create-post" className='btn btn-primary'>Create</label> */}
        <div className="profile-photo " onClick={handleProfileClick}>
          <img src={`https://ams-hub-bucket.s3.ap-south-1.amazonaws.com/${imgName}`} alt="" />
        </div>
      </div>
    </div>
    {/* Dropdown Modal */}
    {dropdownVisible && (
    <ProfileDropdown
      onClose={handleCloseModal}
      onProfileLinkClick={handleProfileLinkClick}
      onLogoutClick={handleLogoutClick}
    />
    )}
  </nav>
  )
}

export default Navbar
