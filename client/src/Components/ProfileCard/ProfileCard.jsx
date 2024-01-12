import React from 'react'
import './ProfileCard.css'
import Cover from '../../assets/cover.jpeg'
import Profile from '../../assets/profile-1.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt='Cover Photo'/>
            <img src={Profile} alt='Profile Photo'/>
        </div>

        <div className="ProfileName">
            <span className='text-bold'>Full Name </span>
            <span className='text-muted'>@Username</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                        <span>6798</span>
                        <span>Followers</span>
                    </div>

                    <div className="vl"> </div>

                    <div className="follow">
                        <span>6</span>
                        <span>Followings</span>
                    </div>
            </div>
            <hr />
        </div>

        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
