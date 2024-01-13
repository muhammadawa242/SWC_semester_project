import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Login from "./Components/Login/Login.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import Chat from "./Components/Chat/Chat.jsx";
import Bookmarks from "./Components/Bookmarks/Bookmarks.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Left from "./Components/Left/Left.jsx";
import Theme from "./Components/Theme/Theme.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/bookmark" element={<Bookmarks />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/left" element={<Left />} />
        <Route exact path="/theme" element={<Theme />} />
      </Routes>
    </div>
  );
}

export default App;
