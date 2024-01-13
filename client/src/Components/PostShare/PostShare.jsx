import React ,{useState , useRef , useEffect} from 'react'
import './PostShare.css'
import Picture from '../../assets/profile-4.jpg'
import {UilTimes, UilScenery , UilPlayCircle , UilLocationPoint , UilSchedule} from '@iconscout/react-unicons'

const PostShare = () => {

    const [video, setVideo] = useState(null);
    const VideoRef = useRef();
    const [image , setImage] = useState(null);
    const ImageRef = useRef()
    //add Image
    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
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
        }
    };

    useEffect(() => {
        // You can perform any additional logic or actions when the video state changes
        // For example, you might want to preview the video or do something else
        console.log('Video state changed:', video);
    }, [video]);


  return (
    <div className="postshare">
        <div className="profile-photo">
            <img  src={Picture}/>
        </div>
        
        <div className='share-field'>
            <input type="text" placeholder="What's happening" />
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

                <button type="submit" value="Post" className='btn btn-primary' >Share</button>
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

// onClick={()=> {setImage(null)}} 
export default PostShare



                
