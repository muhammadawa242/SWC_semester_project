import React from 'react'
import { useState } from 'react';
import Picture from '../../assets/profile-8.jpg'
import { getPosts } from '../../apis';
import {useDispatch} from 'react-redux'
import { setPosts } from '../../state';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const PostCard = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const posts = useSelector((state) => state.posts);
    const aws = useSelector((state) => state.awsPath);

    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState([]);
    const [comments, setComments] = useState([
      { user: 'User1', text: 'Awesome post!', profileimg:Picture },
      { user: 'User2', text: 'Nice picture!', profileimg:Picture },
      // Add more initial comments if needed
    ]);

    const handlePosts = async (token) => {
        try{
            const posts = await getPosts(token);
            dispatch(
                setPosts({
                    posts: posts
                })
            )

        }catch(err){
            console.log("error in getting posts: " + err);
        }
    }

    useEffect(() => {
        handlePosts(token);
    }, [])

  
    const handleNewCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const addComment = () => {
        // my implemetation will be different
      if (newComment.trim() !== '') {
        setComments([...comments, { user: 'Current User', text: newComment }]);
        setNewComment('');
      }
    };
  return (

    <div>
        {posts.map((post)=>{
            return(
                <div className="feed">
                <div className="head">
                    <div className="user">
        
                        <div className="profile-photo">
                            <img src={aws+post.userPicturePath}/>
                        </div>
        
                        <div className="info">
                            <h3>{post.firstName+" "+post.lastName}</h3>
                            <small>{post.createdAt.substring(0,10)}</small>
                        </div>
                    </div>
                    <span className='edit'>
                            <i className='uil uil-ellipsis-h'></i>
                    </span>
                </div>
        
                <div className="photo">
                    <img src={aws+post.picturePath} alt="" />
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
                    {
                        post.comments.map((comment, index) => (
                            index < 4 ?
                            <span key={`s${index}`}><img src={aws + comment.picturePath} /></span> :
                            null
                        ))
                    }
                    {/* Like button was not visible so just used comments for the purpose temporarily */}
                    {post.comments.length !== 0 && (
                        <p> Liked by <b>{post.comments[0].username}</b> and <b>{post.comments.length-1}</b> others </p>
                    )}
                </div>
        
                <div className="caption">
                    <p><b>{post.firstName + " " + post.lastName}</b> {post.description} <span className='hash-tag'>#lifestyle</span></p>
                </div>
                {/* <div className='comments text-muted' onClick={showComments}>View All Comments</div> */}
        
                    {showComments && (
                    <div className="comments-container">
                    {post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <span><img className='profile-photo' src={aws+comment.picturePath} alt="User Image" /></span>
                            <div className='comment-info'>
                                <b>{comment.username}</b> {comment.text}
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
