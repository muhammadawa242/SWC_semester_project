import React from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {setLogout} from '../../state'
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();
  const imgName = useSelector(state => state.user.picturePath);
  const aws = useSelector(state => state.awsPath) + imgName;
  const navigate = useNavigate();

  return (
    <nav>
        <div className="navcontainer">

          {/* <h2 className="logo" onClick={()=>{navigate("/home")}}> */}
          <h2 className="logo" onClick={() => dispatch(setLogout())}>

            AMS 
          </h2>

          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input type="search" placeholder='Search..' />
          </div>

          <div className="create">
            {/* <label htmlFor="create-post" className='btn btn-primary'>Create</label> */}
            <div className="profile-photo ">
              <img src={aws} alt="" />
            </div>
          </div>

        </div>
    </nav>
  )
}

export default Navbar
