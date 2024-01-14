import React, { useState , useEffect } from 'react'
import './Theme.css'
import {UilTimes} from '@iconscout/react-unicons'


const Theme = ({ onClose }) => {

  var root = document.documentElement;
  const [activeFontSize, setActiveFontSize] = useState('16px') // state to track active span
  const [fontSize, setFontSize] = useState(''); // State to store font size
  const [stickyTopLeft, setStickyTopLeft] = useState(''); // store te sticky padding left
  const [stickyTopRight, setStickyTopRight] = useState(''); // store te sticky padding right
  const [activeColour , setActiveColour] = useState('252');
  const [bgcolour , setbgcolour] = useState('1')

  const changeFont = (newFontSize, stickyLeft, stickyRight) => {
    setActiveFontSize(newFontSize);
    setFontSize(newFontSize); // Set the font size state
    
    //sticky top left
    const currentStickyTopLeft = getComputedStyle(root).getPropertyValue('--sticky-top-left').trim();
    changeStickyTopLeft(stickyLeft)
    //sticky top right
    const currentStickyTopRight = getComputedStyle(root).getPropertyValue('--sticky-top-right').trim();
    changeStickyTopRight(stickyRight)
    root.style.fontSize = newFontSize; // Apply the style to the document's root element (html)
  };

  //adjust the stickytopleft padding
  const changeStickyTopLeft = (newValue) => {
    setStickyTopLeft(newValue);
    // Apply the style to the document's root element (html)
    root.style.setProperty('--sticky-top-left', newValue);
  };

  const  changeStickyTopRight = (newValue) =>{
    setStickyTopRight(newValue);
    // Apply the style to the document's root element (html)
    root.style.setProperty('--sticky-top-right', newValue);
  }

  //Just for default fontsize
  useEffect(() => {
    root.style.fontSize = activeFontSize; //default font size
  }, []); 

  const changePrimaryColour = (newColour) => {
  setActiveColour(newColour)
  const currentColour = getComputedStyle(root).getPropertyValue('--primary-hue');
  root.style.setProperty('--primary-hue', newColour);
};

const changeBackground = (lightC,darkC,whiteC) => {
  const LightColour = getComputedStyle(root).getPropertyValue('--light-colour-lightness');
  const DarkColour = getComputedStyle(root).getPropertyValue('--dark-colour-lightness');
  const WhitwColour = getComputedStyle(root).getPropertyValue('--white-colour-lightness');
  console.log(LightColour ,",",DarkColour,",",WhitwColour);
  root.style.setProperty('--light-colour-lightness',lightC);
  root.style.setProperty('--dark-colour-lightness',darkC);
  root.style.setProperty('--white-colour-lightness',whiteC);
}

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
              onClick={() => changeFont('10px','5.4rem','5.4rem')}
              />
              <span
               className={`font-size-2 ${activeFontSize === '13px' ? 'active' : ''}`}
               onClick={() => changeFont('13px','5.4rem','-7rem')} 
              />
              <span 
               className={`font-size-3 ${activeFontSize === '16px' ? 'active' : ''}`}
               onClick={() => changeFont('16px','-2rem','-17rem')}
              />
              <span 
                 className={`font-size-4 ${activeFontSize === '19px' ? 'active' : ''}`}
                 onClick={() => changeFont('19px','-5rem','-25rem')}
              />
              <span
                 className={`font-size-5 ${activeFontSize === '22px' ? 'active' : ''}`}
                 onClick={() => changeFont('22px','-12rem','-35rem')}
              />
            </div>
            <h3>Aa</h3>
          </div>
        </div>

        {/* Primary Colors */}
        <div className="color">
          <h4>Color</h4>
          <div className="choose-color">
            <span 
              className={`color-1 ${activeColour === '252' ? 'active' : ''}`}
              onClick={()=>{changePrimaryColour('252')}}
            ></span>
            <span 
              className={`color-2 ${activeColour === '52' ? 'active' : ''}`}
              onClick={()=>{changePrimaryColour('52')}}
            ></span>
            <span 
              className={`color-3 ${activeColour === '352' ? 'active' : ''}`}
              onClick={()=>{changePrimaryColour('352')}}
            ></span>
            <span 
              className={`color-4 ${activeColour === '152' ? 'active' : ''}`}
              onClick={()=>{changePrimaryColour('152')}}
            ></span>
            <span
              className={`color-5 ${activeColour === '202' ? 'active' : ''}`}
              onClick={()=>{changePrimaryColour('202')}}
            ></span>
          </div>
        </div>

        {/* Background Colors */}
        <div className="background">
          <h4>Background</h4>
          <div className="choose-bg">
            <div 
              className={`bg-1 ${bgcolour === '1' ? 'active' : ''}`}
              onClick={()=>{changeBackground('95%','17%','100%');setbgcolour('1')}}
            >
              <span></span>
              <h5 htmlFor="bg-1">Light</h5>                
            </div>     
            <div
              className={`bg-2 ${bgcolour === '2' ? 'active' : ''}`}
              onClick={()=>{changeBackground('15%','95%','20%');setbgcolour('2')}}
            >
              <span></span>
              <h5 htmlFor="bg-2">Dim</h5>
            </div>                                       
            <div
              className={`bg-3 ${bgcolour === '3' ? 'active' : ''}`}
              onClick={()=>{changeBackground('0%','95%','10%'); setbgcolour('3')}}
            >
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


