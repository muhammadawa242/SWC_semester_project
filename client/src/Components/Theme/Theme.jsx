import React, { useState , useEffect } from 'react'
import './Theme.css'
import {UilTimes} from '@iconscout/react-unicons'


const Theme = ({ onClose }) => {

  var root = document.documentElement;
  const [activeFontSize, setActiveFontSize] = useState('') // state to track active span
  const [fontSize, setFontSize] = useState(''); // State to store font size

  const changeFont = (newFontSize) => {

    setActiveFontSize(newFontSize);
    // Set the font size state
    setFontSize(newFontSize);
    console.log("FontChanged")
    // Apply the style to the document's root element (html)
    document.documentElement.style.fontSize = newFontSize;
  };

  useEffect(() => {

    const mainFontSize = getComputedStyle(root).getPropertyValue('--sticky-top-right').trim();

    // Apply the default font size when the component mounts
    document.documentElement.style.fontSize = activeFontSize;

    root.style.fontSize = mainFontSize || '';
  }, []); 

  return (
    <div className= "customize-theme">
      <div className= "card">
        <UilTimes className='cross-icons' onClick={onClose} />
        <h2>Customized your View</h2>
        <p>Manage your font size, color, and backgroung</p>

        {/* Font Sizes */}
        <div className= "font-size">
          <h4>Font Size</h4>
          <div>
            <h6>Aa</h6>
            <div className="choose-size">
              <span 
              className={`font-size-1 ${activeFontSize === '10px' ? 'active' : ''}`}
              onClick={() => changeFont('10px')}
              />
              <span
               className={`font-size-2 ${activeFontSize === '13px' ? 'active' : ''}`}
               onClick={() => changeFont('13px')} 
              />
              <span 
               className={`font-size-1 ${activeFontSize === '16px' ? 'active' : ''}`}
               onClick={() => changeFont('16px')}
              />
              <span 
                 className={`font-size-1 ${activeFontSize === '19px' ? 'active' : ''}`}
                 onClick={() => changeFont('19px')}
              />
              <span
                 className={`font-size-1 ${activeFontSize === '22px' ? 'active' : ''}`}
                 onClick={() => changeFont('22px')}
              />
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
        {/* <UilTimes className='cross-icons' onClick={onClose} /> */}
      </div>   
    </div>
  )
}

export default Theme


