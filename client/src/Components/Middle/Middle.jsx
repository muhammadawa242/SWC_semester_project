import React from 'react'
import './Middle.css'
import Picture from '../../assets/profile-8.jpg'
import PostShare from '../PostShare/PostShare'
import FeedPic from '../../assets/feed-3.jpg'

function Middle() {
  return (
    <div className="middle">   
        {/* Stories */}
        <div className="stories">
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

            <div className="story">
                <div className="profile-photo">
                    <img src={Picture}/>
                </div>
                <p className="name">Your Story</p>
            </div>
        </div>

        <PostShare />

        {/* ---------------Feed ----------------- */}
        <div className="feeds">
            <div className="feed">
                <div className="head">
                    <div className="user">

                        <div className="profile-photo">
                            <img src={Picture}/>
                        </div>

                        <div className="info">
                            <h3>User Name</h3>
                            <small>Location , Time</small>
                        </div>
                    </div>
                    <span className='edit'>
                            <i className='uil uil-ellipsis-h'></i>
                    </span>
                </div>

                <div className="photo">
                    <img src={FeedPic} alt="" />
                </div>

                <div className="action-buttons">
                    <div className="interactive-buttons">
                        <span><i className='uil uil-heart'></i></span>
                        <span><i className='uil uil-comment-dots'></i></span>
                        <span><i className='uil uil-share-alt'></i></span>
                    </div>
                    <div className="bookmark">
                        <span><i className="uil uil-bookmark"></i></span>
                    </div>
                </div>

                <div className="liked-by">
                    <span><img src={Picture} /></span>
                    <span><img src={Picture} /></span>
                    <span><img src={Picture} /></span>
                    <p> Liked by <b>User Name 1</b> and <b>1234</b> others </p>
                </div>

                <div className="caption">
                    <p><b>UserName</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className='hash-tag'>#lifestyle</span></p>
                </div>
                <div className='comments text-muted'>View All Comments</div>
                
            </div>
        </div>

    </div>
  )
}

export default Middle


