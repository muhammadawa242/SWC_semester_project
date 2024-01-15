import React from 'react'
import './Home.css'
import Left from '../Left/Left.jsx'
import Navbar from '../NavBar/Navbar.jsx'
import UserData from '../Data/UserData.jsx'
import Right from '../Right/Right.jsx'
import Middle from '../Middle/Middle.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts, getStories, getUser } from '../../apis'
import { setPosts, setStories, setUser, setLogout } from '../../state'


function Home() {
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  const handleUser = async (token, userId) => {
      try{
          const user = await getUser(token, userId);
          dispatch(setUser({user: user}))
      }catch(err){
          console.log("error in getting user data: " + err);
      }
  }

  const handlePosts = async (token) => {
      try{
          const posts = await getPosts(token);
          dispatch(setPosts({posts: posts}))
      }catch(err){
          console.log("error in getting posts: " + err);
          setLogout();
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
      handleUser(token, userId);
  }, [])


  return (
    <main>
        <Navbar />
        <div className="container">
          <Left />
          <Middle />
          <Right />
          <UserData />
        </div>
    </main>
  )
}

export default Home
