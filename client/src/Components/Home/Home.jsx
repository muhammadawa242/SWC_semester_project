import React from 'react'
import './Home.css'
import Left from '../Left/Left.jsx'
import Navbar from '../NavBar/Navbar.jsx'
import Right from '../Right/Right.jsx'
import Middle from '../Middle/Middle.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts, getStories } from '../../apis'
import { setPosts, setStories } from '../../state'

function Home() {
  const token = useSelector((state) => state.token);
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
    <main>
        <Navbar />
        <div className="container">
          <Left />
          <Middle />
          <Right />
        </div>
    </main>
  )
}

export default Home
