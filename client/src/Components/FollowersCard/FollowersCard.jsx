import React from 'react'
import './FollowersCard.css'
import {getUser, addFollower} from '../../apis'
import { useSelector } from 'react-redux'

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setUser} from '../../state'

const FollowersCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const aws = useSelector(state => state.awsPath);
    const token = useSelector(state => state.token);
    const [followersList, setFollowersList] = useState([]);
    const followers = user.followers;
    const following = user.following;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFollowersList([]); // Set followersList to an empty array before fetching data
                const promises = followers.map(follower_id => getUser(token, follower_id));
                const users_data = await Promise.all(promises);
                setFollowersList(users_data);
            } catch (error) {
                console.error("followers not loaded: " + error);
            }
        };
        fetchData();
    }, [followers]);

    const handleFollow = async (follower_id) => {
        try {
            const updatedUser = await addFollower(token, user._id, follower_id);
            dispatch(setUser({ user: updatedUser }));
        } catch (error) {
            console.error("error in adding follower: " + error);
        }
    }

    return (
        <div className="FollowersCard">
            <h3>Who is Following you</h3>
            
            {followersList.map((follower, id) => {
                return (
                    <div className="follower" key={id}>
                        <div>
                            {follower.picturePath && (
                                <img src={aws+follower.picturePath} alt="follower profile img" className='profile-photo' />
                            )}
                            <div className="name">
                                <span className='text-bold'>{follower.firstName + " " + follower.lastName}</span>
                                <span className='text-muted'>@{follower.email.substring(0, follower.email.indexOf('@'))}</span>
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleFollow(follower._id)}>{
                            !following.includes(follower._id) ? 
                                "follow" :
                                "Unfollow"
                        }</button>
                    </div>
                )
            })}

            {followers.length === 0 && <p>No followers yet 😥</p>}
        </div>
    )
}

export default FollowersCard
