import React from 'react'
import Navbar from '../NavBar/Navbar'
import Left from '../Left/Left'
import './Explore.css'
import Middle from '../Middle/Middle'
import Right from '../Right/Right'
import PostShare from '../PostShare/PostShare'
import PostCard from '../PostCard/PostCard'
import Ads from '../Ads/Ads'

function Explore() {
  return (

    <div className='explore'>
        <Navbar />
        <div className="container">
          <Left />
          {/* <PostShare /> */}
          <div className="feeds">
            {/* PostCard */}
            {/* <PostCard /> */}
          </div>

          <Ads />
          {/* <Right /> */}
        </div>
      </div>
  )
}

export default Explore
