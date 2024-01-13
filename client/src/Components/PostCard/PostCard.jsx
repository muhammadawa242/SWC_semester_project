import React from 'react'
import { useState } from 'react';
import Picture from '../../assets/profile-8.jpg'
import FeedPic from '../../assets/feed-3.jpg'
import { Post } from '../../Data/Post';

const PostCard = () => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
      { user: 'User1', text: 'Awesome post!', profileimg:Picture },
      { user: 'User2', text: 'Nice picture!', profileimg:Picture },
      // Add more initial comments if needed
    ]);
  
    const handleNewCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const addComment = () => {
      if (newComment.trim() !== '') {
        setComments([...comments, { user: 'Current User', text: newComment }]);
        setNewComment('');
      }
    };
  return (
    <div>
        {Post.map((posts,id)=>{
            return(
                <div className="feed">
                <div className="head">
                    <div className="user">
        
                        <div className="profile-photo">
                            <img src={posts.profilepic}/>
                        </div>
        
                        <div className="info">
                            <h3>{posts.fullname}</h3>
                            <small>{posts.location} , {posts.Time}</small>
                        </div>
                    </div>
                    <span className='edit'>
                            <i className='uil uil-ellipsis-h'></i>
                    </span>
                </div>
        
                <div className="photo">
                    <img src={posts.postImage} alt="" />
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
                {/* <div className='comments text-muted' onClick={showComments}>View All Comments</div> */}
        
                    {showComments && (
                    <div className="comments-container">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <span><img className='profile-photo' src={comment.profileimg} alt="User Image" /></span>
                            <div className='comment-info'>
                                <b>{comment.user}</b> {comment.text}
                            </div>
                        </div>
                    ))}
                    <div className="add-comment">
                        <img className='profile-photo' src={Picture} alt="Profile" />
                        <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={handleNewCommentChange}
                        />
                        <button className='btn btn-primary' onClick={addComment}>Post</button>
                    </div>
                    </div>
                )}
        
                <div className='comments text-muted' onClick={() => setShowComments(!showComments)}>
                    {showComments ? 'Hide Comments' : 'View All Comments'}
                </div>
                
            </div>
            )

        })}
    </div>

  )
}

export default PostCard
