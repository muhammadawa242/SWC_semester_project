import React ,{useState , useRef , useEffect} from 'react'
import './PostShare.css'
import { useSelector } from 'react-redux'
import {UilTimes, UilScenery , UilPlayCircle , UilLocationPoint , UilSchedule} from '@iconscout/react-unicons'
import {createPost, createVideoPost} from '../../apis';
import { setPosts, setStories } from '../../state';
import { useDispatch } from 'react-redux';

const PostShare = () => {
    const dispatch = useDispatch();
    const imgName = useSelector(state => state.user.picturePath)
    const Picture = useSelector(state => state.awsPath) + imgName
    const [video, setVideo] = useState(null);
    const VideoRef = useRef();
    const [videoFile , setVideoFile] = useState(null);
    const [image , setImage] = useState(null);
    const [imageFile , setImageFile] = useState(null);
    const ImageRef = useRef()
    const {_id} = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const [postDescription, setPostDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const handlePostCreation = async () => {
        if (postDescription === "") {
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", postDescription);

        if (imageFile) {
          formData.append("picture", imageFile);
          formData.append("picturePath", imageFile.name);
          const posts = await createPost(token, formData);
          dispatch(setPosts({ posts }));
          setImage(null);
          setImageFile(null);
        }
        else if (videoFile) {
            formData.append("video", videoFile);
            formData.append("videoPath", videoFile.name);
            const stories = await createVideoPost(token, formData);
            dispatch(setStories({ stories }));
            setVideo(null);
            setVideoFile(null);
        }
    
        setPostDescription("");
        setIsLoading(false);
      };
    
    //add Image
    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
            setImageFile(img);
        }
    }
    //remove Image
    const removeImage = () =>{
        setImage(null);
    }

    //remove vedio
    const removeVideo = () => {
        setVideo(null);
    };

    //Add vedio
    const onVideoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let vid = e.target.files[0];
            setVideo({
                video: URL.createObjectURL(vid),
            });
            setVideoFile(vid);
        }
    };


  return (
    <div className="postshare">
        <div className="profile-photo">
            <img  src={Picture}/>
        </div>
        
        <div className='share-field'>
            <input type="text" placeholder="What's happening" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} />
            <div className="postOptions">
                <div className="option" onClick={()=>ImageRef.current.click()}>
                    <UilScenery />
                    <h3>Photo</h3>
                </div>

                <div className="option" onClick={() => VideoRef.current.click()}>
                    <UilPlayCircle />
                    <h3>Video</h3>
                </div>

                {/* <div className="option">
                    <UilLocationPoint />
                    <h3>Location</h3>
                </div>

                <div className="option">
                    <UilSchedule />
                    <h3>Schedule</h3>
                </div> */}

                    <div className="postshare">
                        {/* Rest of the code... */}
                        <button
                            type="submit"
                            value="Post"
                            className="btn btn-primary"
                            onClick={handlePostCreation}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Share"}
                        </button>
                    </div>

                <div style={{display:"none"}}>
                    <input type="file" name='my-img' ref={ImageRef} onChange={onImageChange}/>
                    <input type="file" name="my-video" ref={VideoRef} onChange={onVideoChange} />
                </div>
            </div>
            {image && (
                <div className="previewImage">
                    <img src={image.image} />
                    <UilTimes onClick={removeImage} />
                </div>
            )}

            {video && (
                <div className="previewVideo">
                    <video controls>
                        Your browser does not support the video tag.
                        <source src={video.video}type="video/mp4" />
                        <source src={video.video} type="video/webm" />
                        <source src={video.video} type="video/ogg" />
                    </video>    
                    <UilTimes onClick={removeVideo} />             
                </div>
            )}

        </div>
    </div>
  )
}

export default PostShare



                
