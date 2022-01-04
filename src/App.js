import React from "react";
 import ReacrDOM from 'react-dom';
import mystyles from './mystyles.module.css';
//import './src/images';
import Frame from "./Frame.svg";
import Group from "./Group.svg";
import Group5 from "./Group5.svg";
import Group6 from "./Group6.svg";
import Group7 from "./Group7.svg";
import Frame19 from "./Frame19.svg";
import Group10 from "./Group10.svg";
import Group11 from "./Group11.svg";
import Group12 from "./Group12.svg";
import {useMediaQuery} from "react-responsive";
import { mediaQueries } from "./responsive";
export const App  = () => {
 
  

  const isDesktop = useMediaQuery({query: mediaQueries.desktopQuery})
  const mystyle = {
    //margin-left: 30;
    padding: "0px",
    margin: "30px",
    width: "auto"
  }

  const isDeskOrLaptop = useMediaQuery({query:'(min-width:1224px)'})
  if(isDesktop){
    return (
    
      <div className="desktop---8" style={mystyle}>
        
        <div className="frame-1">
          <img src={Frame} className="App-Frmae" alt="Frame" />
          <div className="frame-1-5">
            <div className="frame-1-4">
              <img src="" />
            </div>
          </div>
          
          <div className="frame-1-7">
            <img src="" />
            <div className="ellipse-1" />
            <div className="frame-1-0" />
            <div className="frame-1-1" />
            <div className="frame-1-2" />
          </div>
        </div>
         <div className="group-9">
          
          <div className="frame-1-8">
            <div className="frame-4">
              <img src={Group} className="App-Group" alt="Group" />
              <div className="ellipse-3-4" />
            </div>
            <div className="frame-5">
              <img src=""/>
              <div className="ellipse-3-4" />
            </div>
            
            <div className="component-6">
              <div className="component-6">
                <div className="rectangle-7" />
                 <img src={Group11} className="App-Group11" alt="Group11" />
              </div>
            </div>
            
            
          </div>
          
        </div>
        <div className="frame-6">
          <img src="" />
          <div className="ellipse-3-4" />
        </div>
       
        <div className="frame-6">
          <img src="" />
          <div className="ellipse-3-4" />
        </div>
        <div className="frame-7">
           <div className="ellipse-3-4" />
        </div>
        <div className="frame-8">
          <div className="frame-8">
     
          </div>
        </div>
        <div className="component-1">
          <img src={Group12} className="App-Group12" alt="Group12" />
        </div>
   
        <img src="" />
        <img src="" />
        <div className="rectangle-4" />
        <img src="" />
        <div className="frame-2">
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
          <div className="ellipse-8" />
          <div className="ellipse-7" />
        </div>
       
      
        <div className="group-3">
        <img src={Group10} className="App-Group10" alt="Group10"/>
      
        </div>
     
      
         
      </div>
    )
  }
 
}
export default App;