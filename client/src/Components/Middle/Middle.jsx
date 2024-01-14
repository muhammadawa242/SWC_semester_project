import React from 'react'
import { useState } from 'react'
import './Middle.css'
// import Picture from '../../assets/profile-8.jpg'
import PostShare from '../PostShare/PostShare'
import PostCard from '../PostCard/PostCard'
import { useSelector } from 'react-redux'

function Middle() {
    const aws = useSelector((state) => state.awsPath);
    const imgPath = useSelector((state) => state.user.picturePath);
    const Picture = aws+imgPath;

  return (
    <div className="middle">   
        {/* Stories */}
        <div className="stories">
            <div className="story">
                <div className="profile-photo">
                    <a href="">
                        <img src={Picture}/>
                    </a>
                </div>
                <p className="name">Your Story</p>
            </div>

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>
        </div>
        {/* POst Share Component */}
        <PostShare />
        <div className="feeds">
            {/* PostCard */}
            <PostCard />
        </div>
    </div>
  )
}

export default Middle


