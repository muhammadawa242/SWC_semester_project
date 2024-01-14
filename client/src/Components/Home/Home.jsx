import React from 'react'
import './Home.css'
import Left from '../Left/Left.jsx'
import Navbar from '../NavBar/Navbar.jsx'
import Right from '../Right/Right.jsx'
import Middle from '../Middle/Middle.jsx'


function Home() {
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
