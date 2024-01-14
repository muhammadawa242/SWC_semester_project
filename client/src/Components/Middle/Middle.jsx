import React from 'react'
import './Middle.css'
// import Picture from '../../assets/profile-8.jpg'
import PostShare from '../PostShare/PostShare'
import PostCard from '../PostCard/PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts, getStories } from '../../apis'
import { setPosts, setStories } from '../../state'

function Middle() {
    const aws = useSelector((state) => state.awsPath);
    const imgPath = useSelector((state) => state.user.picturePath);
    const token = useSelector((state) => state.token);
    const stories = useSelector((state) => state.stories);
    const Picture = aws+imgPath;
    const dispatch = useDispatch();

    const handlePosts = async (token) => {
        try{
            const posts = await getPosts(token);
            dispatch(setPosts({posts: posts}))
        }catch(err){
            console.log("error in getting posts: " + err);
        }
    }

    const handleStories = async (token) => {
        try{
            const stories = await getStories(token);
            dispatch(
                setStories({
                    stories: stories
                })
            )

        }catch(err){
            console.log("error in getting stories: " + err);
        }
    }

    useEffect(() => {
        handlePosts(token);
        handleStories(token);
    }, [])

    return (
        <div className="middle">   
            {/* Stories */}
            <div className="stories">
                {/* Required: add some tag that plays the video provided in its src or url */}
                {/* aws+stories.videoPath   ... gives the url for the video stored on cloud */}
                <div className="story">
                    <div className="profile-photo">
                        <img src={Picture}/>
                    </div>
                    <p className="name" style={{ color: 'black' }}><b>Required: </b>add some tag here that plays the video provided in its src or url</p>
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


