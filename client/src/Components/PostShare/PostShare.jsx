import React ,{useState , useRef} from 'react'
import './PostShare.css'
import Picture from '../../assets/profile-4.jpg'
import {UilTimes, UilScenery , UilPlayCircle , UilLocationPoint , UilSchedule} from '@iconscout/react-unicons'

const PostShare = () => {

    const [image , setImage] = useState(null);
    const ImageRef = useRef()

    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
        }
    }

    const removeImage = () =>{
        setImage(null);
    }
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

                <div className="option">
                    <UilPlayCircle />
                    <h3>Vedio</h3>
                </div>

                <div className="option">
                    <UilLocationPoint />
                    <h3>Location</h3>
                </div>

                <div className="option">
                    <UilSchedule />
                    <h3>Schedule</h3>
                </div>

                <button type="submit" value="Post" className='btn btn-primary' >Share</button>
                <div style={{display:"none"}}>
                    <input type="file" name='my-img' ref={ImageRef} onChange={onImageChange}/>
                </div>
            </div>
            {image && (
                <div className="previewImage">
                    <img src={image.image} />
                    <UilTimes onClick={removeImage} />
                </div>
            )}

        </div>
    </div>
  )
}

// onClick={()=> {setImage(null)}} 
export default PostShare
