import React from 'react'
import { useState } from 'react';
import { getPosts, postComment, getStories } from '../../apis';
import {useDispatch} from 'react-redux'
import { setPosts, setPost, setStories } from '../../state';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const PostCard = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const user = useSelector((state) => state.user);
    const posts = useSelector((state) => state.posts);
    const aws = useSelector((state) => state.awsPath);

    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");

  
    const handleNewCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const addComment = async (post) => {

        if (newComment.trim() !== '') {
            try{
                const updatedPost = await postComment(token, post._id, {
                    username: user.firstName + " " + user.lastName,
                    text: newComment,
                    picturePath: user.picturePath
                });

                dispatch(setPost({ post: updatedPost }));

            }catch(err){
                console.log("error in adding comment: " + err);
            }

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
                        <img className='profile-photo' src={aws+user.picturePath} alt="Profile" />
                        <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={handleNewCommentChange}
                        />
                        <button className='btn btn-primary' onClick={(e)=>{
                            e.preventDefault(),
                            addComment(post)
                        }}>Post</button>
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
