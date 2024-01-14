import React from 'react'
import './ProfileCard.css'
import Cover from '../../assets/cover.jpeg'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
    const user = useSelector((state) => state.user);
    const aws = useSelector((state) => state.awsPath);
    const imgPath = user.picturePath;
    const followers = user.followers.length;
    const following = user.following.length;
    const fullname = user.firstName + ' ' + user.lastName;
    const username = user.email.substring(0, user.email.indexOf('@'));

    const Profile = aws+imgPath;

    return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt='Cover Photo'/>
            <img src={Profile} alt='Profile Photo'/>
        </div>

        <div className="ProfileName">
            <span className='text-bold'>{fullname}</span>
            <span className='text-muted'>{`@${username}`}</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                        <span>{followers}</span>
                        <span>Followers</span>
                    </div>

                    <div className="vl"> </div>

                    <div className="follow">
                        <span>{following}</span>
                        <span>Following</span>
                    </div>
            </div>
            <hr />
        </div>

        <span>My Profile</span>
    </div>
    )
}

export default ProfileCard
