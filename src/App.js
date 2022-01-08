import React from "react";
 import ReactDOM from 'react-dom';
import mystyles from './mystyles.module.css';
import './App.css'
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
import UbuntuDAO from "./images/ubuntu DAO.svg";
import TokenomicsImage from "./images/tokenomics.svg";
import Empowering from "./images/Empowering.svg";
import Creativity from "./images/Creativity.svg";
import Positioning from "./images/Positioning.svg";
import Promotion from "./images/Promotion.svg";
import MobileRoadmap from './images/mobileRoadmap.svg'
import MobileDistribution from './images/mobileDistribution.svg'
import TokenDistribution from './images/tokenDistributionImage.svg'
import Roadmap from './images/Roadmap.svg'
import {useMediaQuery} from "react-responsive";
import { mediaQueries } from "./responsive";
export const App  = () => {
 
  

//   const isDesktop = useMediaQuery({query: mediaQueries.desktopQuery})
//   const mystyle = {
    //margin-left: 30;
    // padding: "0px",
    // margin: "30px",
//     width: "100%""
//   }

  
    return (
    <div className="main-body">
    {/* welcome page */}
        <div id="welcome-page" className="frame-1"
        style={{
             backgroundImage: "url(/homepageImage.svg)"
        }}
        >
            <div className="navigation-menu">
                <div className="logo-container">
                    <img src="/"/>
                </div>
                <div className="navigation-list">
                    <p className="nav-link">Home</p>
                     <p className="nav-link">Overview</p>
                      <p className="nav-link">Roadmap</p>
                       <p className="nav-link">Booking</p>
                </div>
            </div>
            <div className="welcome-section">
                <h1 className="welcome-header">UBUNTU DAO </h1>
                <p className="welcome-text">Promoting Blockchain adoption and a creator ecosystem in africa </p>
                <a
                className="welcome-button"
                style={{
                     backgroundImage: "url(/welcomeButtonImage.svg)"
                }}
                >
                    <p>WHITE PAPER</p>
                    </a>
            </div>
        </div>
        {/* end of welcome page */}
        {/* about page */}
        <div id="about-page" className="frame-2">
            <div className="about-image">
                <img src={UbuntuDAO} className="about-image-style"/>
             </div>
             <div className="about-info-section">
                <h1 className="about-header">WHAT IS UBUNTU DAO?</h1>
                <h3 className="about-sub-header"> Collaborative community to provide support</h3>
                <p className="about-text">It is a Blockchain Project that leverages the simplicity and communal spirit associated with meme tokens to drive Blockchain adoption and very importantly, promote a creator-ecosystem (web3 Startups) in Africa. The movement has already begun; to transit Africa from a (sadly) default consumption tilt to becoming production conscious and the Ubuntu Dao Project further emphasizes the truth that Africans are innovative enough and we can change ‘our’ world and sure enough ‘the’ world.              </p>
            <a className="about-link"
           
            ><p>Read More</p></a>
             </div>   
        </div>
        {/* end of about page */}

         {/* objectives page */}
        <div id="objectives-page" className="frame-3">
            
           
                <h1 className="objectives-header">OUR OBJECTIVES</h1>
              {/* objectives card */}
              <div className="objectives-container">
               <div className="objectives-card">
                <div className="objectives-innercard">
                    <img src={Positioning}
                    style={{
                       width:"17rem",
                       height:"30rem"
                   }}
                    />
                    {/* <div className="objectives-card-image">
                    <img src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimgaim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                    <img src={Empowering}
                    style={{
                       width:"16rem",
                       height:"30rem"
                   }}
                    />
                    {/* <div className="objectives-card-image">
                    <img src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimgaim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                   <img src={Creativity}
                   style={{
                       width:"15rem",
                       height:"30rem"
                   }}
                   />
                    {/* <div className="objectives-card-image">
                    <img src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimgaim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                   <img src={Promotion}
                   id="promotion"
                   style={{
                       width:"18rem",
                       height:"30rem"
                   }}
                   />
                    {/* <div className="objectives-card-image">
                    <img src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimgaim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectivecard */}
               </div>
             
           
             
        </div>
        {/* end of tokenomics page */}


        {/* tokenomics page */}
        <div id="tokenomics-page" className="frame-2">
            
             <div className="tokenomics-info-section">
                <h1 className="tokenomics-header">WHAT IS UBUNTU DAO?</h1>
               
                <p className="tokenomics-text">PRESALE
16.6% (25 trn) of the total circulating supply will be allocated for Presale. Presale buyers would have the privilege of significantly larger proportions for the airdrop.  

AIR DROP
In expressing our support for the Wakanda Inu Project, Ubuntu Dao tokens will be airdropped to all Wakanda Inu holders across supported wallets.  
The Ubuntu Dao Airdrop will be deposited in three installments. As earlier stated, the first snapshot will be taken on Wakanda holders with 50% allocated Ubuntu tokens airdropped during the TGE. The other 50% will be airdropped at a 1:1 ratio on Ubuntu token holders in two installments.   </p>
             
             </div>  
             <div className="tokenomics-image">
                <img 
               className="tokenomics-image-style" 
                src={TokenomicsImage}/>
             </div> 
        </div>
        {/* end of tokenomics page */}
        {/* token distribution page */}
            <div id="token-distribution-page"
             className="frame-4"

                    style={{
                     backgroundImage: "url(/tokenDistributionBackgroundImage.svg)"
                }}
            >
                <h1 className="token-distribution-header">Token Distribution</h1>
                <div className="token-distribution-image">
                    <img
                    className="token-distribution-image-style"
                     src={TokenDistribution}/>
                      <img src={MobileDistribution}
                         className="mobile-distribution-image-style"
                    style={{
                        width:'10rem'
                    }}
                    />
                </div>
                <h1 id="token-roadmap-header">UBUNTU ROADMAP</h1>
                <div className="token-roadmap-image">
              <img src={MobileRoadmap}
                         className="mobile-roadmap-image-style"
                    style={{
                        width:'10rem'
                    }}
                    />
                    <img src={Roadmap}
                         className="token-roadmap-image-style"
                    style={{
                        width:'95rem'
                    }}
                    />
                </div>
            </div>
        {/* end of token distribution page */}
        
        {/* Footer */}
        <div id="footer-section" className="footer">
            <div className="footer-section-1">
                <nav className="footer-social">
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>linkedin</p>
                    <p>Discord</p>
                
                </nav>
                <div className="footer-links">
                    <p>White Paper</p>
                    <p>Token</p>
                    <p>Roadmap</p>
                    <p>Contact Us</p>
                   
                </div>
            </div>
            <div className="footer-section-2">
                <p>&copy; Ubuntu Dao </p>
            </div>
            <div className="footer-section-3">
            <p>+2347013395472
</p>
            <p>info@Ubuntudao.com </p>
            </div>
        </div>
        {/* end of footer */}

    </div>
    
    //   <div className="desktop---8" 
    //   style={mystyle}
      
    //   >
        
        // {/* <div className="frame-1"> */}
        //   {/* <img src={Frame} className="App-Frame" alt="Frame" /> */}
        //   {
              /* <div className="frame-1-5">
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
     
      
         
      </div> */
    //   }
    )
  
 
}
export default App;