import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is Following you</h3>
        {Followers.map((follower,id)=>{
            return (
                <div className="follower" key={follower.id}>
                    <div>
                        <img src={follower.img} alt="follower profile img" className='profile-photo' />
                        <div className="name">
                            <span className='text-bold'>{follower.name}</span>
                            <span className='text-muted'>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='btn btn-primary'>follow</button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
