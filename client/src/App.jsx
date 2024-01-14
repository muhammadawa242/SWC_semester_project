import React, { Profiler } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import SignUp from './Components/SignUp/SignUp.jsx'
import Login from './Components/Login/Login.jsx'
import Navbar from './Components/NavBar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Explore from './Components/Explore/Explore.jsx'
import Chat from './Components/Chat/Chat.jsx'
import Bookmarks from './Components/Bookmarks/Bookmarks.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Left from './Components/Left/Left.jsx'
import Theme from './Components/Theme/Theme.jsx'
import EditProfile from './Components/EditProfile/EditProfile.jsx'



function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/home" element={isAuth ? <Home /> : <Navigate to="/login" />} />
          <Route exact path="/chat" element={isAuth ? <Chat /> : <Navigate to="/login" />} />
          <Route exact path="/profile" element={isAuth ? <Profile /> : <Navigate to="/login" />} />

          {/* Do we need these routes?? */}
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/bookmark" element={<Bookmarks />} />
          <Route exact path="/left" element={<Left />} />
          <Route exact path="/theme" element={<Theme />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
       </Routes>

    </div>
  );
}

export default App;
