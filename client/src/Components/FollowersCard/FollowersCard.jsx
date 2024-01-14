import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
import { useSelector } from 'react-redux'

const FollowersCard = () => {
    const user = useSelector(state=>state.user);
    const aws = useSelector(state=>state.awsPath);
    const followers = user.followers;
    const following = user.following;

    return (
        <div className="FollowersCard">
            <h3>Who is Following you</h3>
            
            {followers.map((follower,id)=>{
                return (
                    <div className="follower" key={follower._id}>
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

            {followers.length === 0 && <p>No followers yet 😥</p>}
        </div>
    )
}

export default FollowersCard
