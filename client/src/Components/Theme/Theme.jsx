import React from 'react'
// import './Theme.css'
import Navbar from '../NavBar/Navbar'
import Left from '../Left/Left'
import Middle from '../Middle/Middle'
import Right from '../Right/Right'
const Theme = () => {
  return (
    <div className='theme'>
        <Navbar />
        <div className="container">
            <Left />
            <Middle />
            <Right />
                {/* Theme Customization */}
                <div className= "customize-theme">
              <div className= "card">

                <h2>Customized your View</h2>
                <p>Manage your font size, color, and backgroung</p>

                {/* Font Sizes */}
                <div className= "font-size">
                  <h4>Font Size</h4>
                  <div>
                    <h6>Aa</h6>
                    <div className="choose-size">
                        <span className= "font-size-1" />
                        <span className= "font-size-2 active" />
                        <span className= "font-size-3" />
                        <span className= "font-size-4" />
                        <span className= "font-size-5" />
                    </div>
                    <h3>Aa</h3>
                  </div>
                </div>

                {/* Primary Colors */}
                <div className="color">
                  <h4>Color</h4>
                  <div className="choose-color">
                     <span className="color-1 active"></span>
                     <span className="color-2"></span>
                     <span className="color-3"></span>
                     <span className="color-4"></span>
                     <span className="color-5"></span>
                  </div>
              </div>

              {/* Background Colors */}
              <div className="background">
                <h4>Background</h4>
                  <div className="choose-bg">

                    <div className="bg-1 active">
                      <span></span>
                      <h5 htmlFor="bg-1">Light</h5>                
                    </div>     

                    <div className="bg-2">
                      <span></span>
                      <h5 htmlFor="bg-2">Dim</h5>
                    </div>                                       
                    <div className="bg-3">
                      <span></span>
                      <h5 htmlFor="bg-3">Lights Out</h5>             
                    </div>  
                  </div>
                </div>
              </div>   
          </div>
        </div>

    </div>
  )
}

export default Theme
