import React, { useState } from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';
import './App.css'

// import './src/images';
// import Frame from "./Frame.svg";
// import Group from "./Group.svg";
// import Group5 from "./Group5.svg";
// import Group6 from "./Group6.svg";
// import Group7 from "./Group7.svg";
// import Frame19 from "./Frame19.svg";
// import Group10 from "./Group10.svg";
// import Group11 from "./Group11.svg";
// import Group12 from "./roup12.svg";
// import UbuntuDAO from "./images/ubuntu DAO.svg";
import TokenomicsImage from "./images/tokenomics.svg";
import Empowering from "./images/Empowering.svg";
import Creativity from "./images/Creativity.svg";
import Positioning from "./images/Positioning.svg";
import Promotion from "./images/Promotion.svg";
import Telegram from "./images/telegram.svg";
import Facebook from "./images/facebook.svg";
import Mission from "./images/mission.svg";
import Vision from "./images/vision.svg";
import Transparency from "./images/Transparency.svg";
import CommunityDriven from "./images/Community driven.svg";
import Instagram from "./images/instagram.svg";
import Twitter from "./images/twitter.svg";
import OverviewText from "./images/OverviewText.svg";
// import ObjectivesText from './images/ObjectivesText.svg';
import TokenomicsText from './images/TokenomicsText.svg';
import MobileRoadmap from './images/mobileRoadmap.svg'
// import MobileDistribution from './images/mobileDistribution.svg'
// import TokenDistribution from './images/tokenDistributionImage.svg'
import TokenomicsDistribution from './images/tokenomicsDistribution.svg'
import Roadmap from './images/Roadmap.svg'
import MenuBar from './images/menubar.svg'
import UbuntuLogo from './images/ubuntuMainLogo.svg'
import PoocoinsLogo from './images/PoocoinsLogo.svg'
import BinanceLogo from './images/BinanceLogo.svg'
import CoinMarketCapLogo from './images/CoinMarketCapLogo.svg'
import CoinGeckoLogo from './images/coingecko-logo-white-3f2aeb48e13428b7199395259dbb96280bf47ea05b2940ef7d3e87c61e4d8408 1.svg'
import TokenHeaderImage from './images/headerImage.svg'

import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
import {AnimationOnScroll} from 'react-animation-on-scroll' 

// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";
export const App  = () => {
 const [menu, setMenu] = useState(false)
  
 const renderMenu = () => {
        if (menu) {
            return (
                <AnimationOnScroll animateIn="animate__slideInLeft" className="sidebar" style={{
                    display: "flex",
                    position: "fixed",
                    width:"80vw",
                    height:"100vh",
                    top:"0",
                    bottom:"0",
                    left:"0",
                    backgroundColor:"#620C0D",
                    color:"#ffffff"
                    
                }}>
                    <div className="sidebar-backdrop"></div>

                    <div name="slide-bar">

                        <div className="sidebar-panel-container">
                            {/* <div className="top-0 right-0 text-2xl text-white" onClick={()=>{
                                setMenu(!menu)
                            }}><p>Close</p></div> */}
                            <ul className="sidebar-panel-navigation" style={{ listStyle: "none" }}>

                                <li><a href="#welcome-page" className="lope">Home</a></li>
                                <li><a href="#about-page" className="lope">Overview</a></li>
                                <li><a href="#roadmap" className="lope">Roadmap</a></li>
                                <li><a href="#footer-section" className="lope">Booking</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
            )
        } else {
            return null
        }
    }



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
            
        >
        <div className="welcome-container"
        style={{
            backgroundImage: "url(/homeSVG.svg)",
             "backgroundRepeat": "no-repeat",
 " backgroundAttachment": "fixed",
  "backgroundSize":" cover"
        }}
        >
            <div className="navigation-menu">
                <div className="logo-container">
                    <img  alt="info" src={UbuntuLogo} className="logo-style"/>
                </div>
                <div className="navigation-list">
                {
                                renderMenu()
                            }

                <div className="nav-menu-bar"
                
                onClick={()=>{
                  
                    setMenu(!menu)
                }}
                >
                    <img alt="info" src={MenuBar}/>
                </div>
                    <a href="#welcome-page" className="nav-link"><p >Home</p></a>
                    <a href="#about-page" className="nav-link"> <p >Overview</p></a>
                     <a href="#roadmap" className="nav-link"> <p >RoadMap</p></a>
                       <a href="#footer-section" className="nav-link"><p>Booking</p></a>
                </div>
            </div>
            <div className="welcome-section">
                <h1 className="welcome-header">
                <TypewriterComponent
                                  
                                      
                                                onInit={(typewriter) => {
                                                    typewriter.typeString('UBUNTU DAO')
                                                    
                                                    .callFunction(() => {
                                                        console.log('String typed out!');
                                                    })
                                                    .pauseFor(2500)
                                                    .callFunction(() => {
                                                        console.log('All strings were deleted');
                                                    })
                                                    .start();
                                                    
                                                }}
                                                options={{
                                                    devMode:false,
                                                   autoStart: true,
                                                    wrapperClassName:"welcome-header"
                                                }}
                                                />
                 </h1>
                <p className="welcome-text">Promoting Blockchain adoption and a creator ecosystem in africa </p>
                <a
                href="/"
                className="welcome-button"
                style={{
                     backgroundImage: "url(/welcomeButtonImage.svg)"
                }}
                >
                    <p>WHITE PAPER</p>
                    </a>
            </div>
            
        </div>
            <div    
                className="second-section"
                style={{
                     backgroundImage: "url(/SecondHalfHomePage-2.svg)"
                }}
                >
            <p></p>
            </div>
        </div>
        {/* end of welcome page */}
        {/* about page */}
        <div id="about-page" className="frame-2">
           
             <div className="about-info-section">
                <img alt="overview" src={OverviewText} className="about-header"/>
                <h3 className="about-sub-header"> Collaborative community to provide support</h3>
                <p className="about-text">It is a Blockchain Project that leverages the simplicity and communal spirit associated with meme tokens to drive Blockchain adoption and very importantly, promote a creator-ecosystem (web3 Startups) in Africa. The movement has already begun; to transit Africa from a (sadly) default consumption tilt to becoming production conscious and the Ubuntu Dao Project further emphasizes the truth that Africans are innovative enough and we can change ‘our’ world and sure enough ‘the’ world.              </p>
            <a className="about-link"
           href="/"
            ><p>Read More</p></a>
             </div>
             
              <AnimationOnScroll animateIn="animate__slideInRight" className="about-mission">
                <div className="about-card">
                    <img src={Vision} alt="vision" />
                    <h3>OUR VISION</h3>
                    <p>To accelerate the attainment of a thriving Blockchain Ecosystem in Africa, powered by innovation, far-reaching adoption and collaboration. </p>
                </div>
                 <div className="about-card">
                    <img src={Mission} alt="mission"/>
                    <h3>OUR MISSION</h3>
                    <p>Building an ecosystem that fosters unity, patriotism and citizen-driven development through the decentralized economy.   </p>
                </div>
             </AnimationOnScroll>   
        </div>
        {/* end of about page */}

        {/* about image */}
<AnimationOnScroll animateIn="animate__slideInUp" className="about-image-container">
                
                <img  alt="info" src={CommunityDriven} className="about-image-style"/>
                <img  alt="info" src={Transparency} className="about-image-style"/>
             </AnimationOnScroll>  
        {/* end of about image */}
        {/* Partners Section */}


       
        <div className="partners-page">
        <h1>Our Partners</h1>
        <div className="partners-section">
                <img  alt="info" src={CoinGeckoLogo} className="partners-image-style"/>
                <img  alt="info" src={CoinMarketCapLogo} className="partners-image-style"/>
                <img  alt="info" src={BinanceLogo} className="partners-image-style"/>
                <img  alt="info" src={PoocoinsLogo} className="partners-image-style"/>
        </div>

        </div>
         {/* end of partners section */}

         {/* objectives scren page */}
        <div id="objectives-page" className="frame-3">
            <h1 className="objectives-header">OUR OBJECTIVES</h1>
           
                {/* <img alt="overview" src={ObjectivesText} className="objectives-header"/> */}
              {/* objectives card */}
              <AnimationOnScroll animateIn="animate__slideInUp"  className="objectives-container">
               <div className="objectives-card">
                <div className="objectives-innercard">
                    <img  alt="info" src={Positioning}
                    style={{
                       width:"18rem",
                       height:"30rem"
                   }}
                    />
                    {/* <div className="objectives-card-image">
                    <img alt="info" alt="info" alt="info" src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimg alt="info" alt="info" alt="info"aim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                    <img alt="info"  src={Empowering}
                    style={{
                       width:"18rem",
                       height:"30rem"
                   }}
                    />
                    {/* <div className="objectives-card-image">
                    <img alt="info" alt="info" alt="info" src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimg alt="info" alt="info" alt="info"aim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                   <img alt="info"  src={Creativity}
                   style={{
                       width:"15rem",
                       height:"30rem"
                   }}
                   />
                    {/* <div className="objectives-card-image">
                    <img alt="info" alt="info" alt="info" src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimg alt="info" alt="info" alt="info"aim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectives card */}
               {/* objectives card */}
               <div className="objectives-card">
                <div className="objectives-innercard">
                   <img alt="info"  src={Promotion}
                   id="promotion"
                   style={{
                       width:"20rem",
                       height:"30rem"
                   }}
                   />
                    {/* <div className="objectives-card-image">
                    <img alt="info" alt="info" alt="info" src="/"/>
                    </div>
                    <h3 className="objectives-card-header">Positioning</h3>
                    <p className="objectives-card-text">asfagmaerigm aigrimg alt="info" alt="info" alt="info"aim agirngpiarpi iangipirnpiang gairngiprangirn </p> */}
                </div>
               </div>
               {/* end of objectivecard */}
               </AnimationOnScroll>
             
           
             
        </div>
        {/* end of tokenomics page */}


        {/* tokenomics page */}
        <div id="tokenomics-page" className="frame-2">
            
             <div className="tokenomics-info-section">
             
               <img alt="tokrnomics" src={TokenomicsText} className="tokenomics-header"/>
                <img alt="info" 
                    className="tokenomics-image-style"
                     src={TokenomicsDistribution}/>
             </div>  
             <AnimationOnScroll animateIn="animate__slideInRight"  className="tokenomics-image">
                <img alt="info" 
               className="tokenomics-image-style" 
                src={TokenomicsImage}/>
             </AnimationOnScroll> 
        </div>
        {/* end of tokenomics page */}
        {/* token distribution page */}
            <div id="token-distribution-page"
             className="frame-4"

                    style={{
                     backgroundImage: "url(/tokenDistributionBackgroundImage.svg)"
                }}
            >
            <img alt="info" 
               className="token-distribution-header-image-style" 
                src={TokenHeaderImage}/>
                <h1 className="token-distribution-header">Our Projects</h1>
                <div className="project-container">
                    <div className="project-card">
                        <h3>UBUNTU FOUNDATION</h3>
                        <p>Text</p>
                    </div>
                    <div className="project-card">
<h3>UBUNTU CAPITAL</h3>
                        <p>venture fund for blockchain startups</p>
                    </div>
                    <div className="project-card">
<h3>MADE IN AFRICA E-COMMERCE STORE</h3>
                        <p>Inventory Management, Originality and supply powered by nFTs</p>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-card">
<h3>MEDIA COMMUNICATIONS</h3>
                        <p>We would setup a media communicarions platform and also collaborate with different existing media platforms focused on blockchain technology to promote the afrocentric narratives and stamp africa’s relevance in the global blockchain space </p>
                    </div>
                    <div className="project-card">
<h3>AFRICAS BLOCKCHAIN DEVELOPERS INSTITUTE</h3>
                        <p>Text</p>
                    </div>
                    <div className="project-card">
<h3>UBUNTU FOUNDATION</h3>
                        <p>Text</p>
                    </div>
                </div>
                <h1 id="token-roadmap-header">UBUNTU ROADMAP</h1>
                <div className="token-roadmap-image">
              <img alt="info"  src={MobileRoadmap}
                         className="mobile-roadmap-image-style"
                    style={{
                        width:'20rem'
                    }}
                    />
                    <img id="roadmap" alt="info"  src={Roadmap}
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
                    <div>
                        <img alt="info" src={Facebook}/>
                    </div>
                   <div>
                        <img alt="info" src={Telegram}/>
                    </div>
                    <div>
                        <img alt="info" src={Twitter}/>
                    </div>
                   <div>
                        <img alt="info" src={Instagram}/>
                    </div>
                
                </nav>
                <div className="footer-links">
                    <a href="/"><p>White Paper</p></a>
                    <a href="/"><p>Token</p></a>
                    <a href="/"><p>Roadmap</p></a>
                    <a href="/"><p>Contact Us</p></a>
                   
                </div>
            </div>
            <div className="footer-section-2">
                <p>&copy; Ubuntu Dao </p>
            </div>
            <div className="footer-section-3">
            <a href="/"><p>+2347013395472</p></a>
            <a href="/"><p>info@Ubuntudao.com </p></a>
            </div>
        </div>
        {/* end of footer */}

    </div>
    
    //   <div className="desktop---8" 
    //   style={mystyle}
      
    //   >
        
        // {/* <div className="frame-1"> */}
        //   {/* <img alt="info" alt="info" src={Frame} className="App-Frame" alt="Frame" /> */}
        //   {
              /* <div className="frame-1-5">
            <div className="frame-1-4">
              <img alt="info" alt="info" src="" />
            </div>
          </div>
          
          <div className="frame-1-7">
            <img alt="info" alt="info" src="" />
            <div className="ellipse-1" />
            <div className="frame-1-0" />
            <div className="frame-1-1" />
            <div className="frame-1-2" />
          </div>
        </div>
         <div className="group-9">
          
          <div className="frame-1-8">
            <div className="frame-4">
              <img alt="info" alt="info" src={Group} className="App-Group" alt="Group" />
              <div className="ellipse-3-4" />
            </div>
            <div className="frame-5">
              <img alt="info" alt="info" src=""/>
              <div className="ellipse-3-4" />
            </div>
            
            <div className="component-6">
              <div className="component-6">
                <div className="rectangle-7" />
                 <img alt="info" alt="info" src={Group11} className="App-Group11" alt="Group11" />
              </div>
            </div>
            
            
          </div>
          
        </div>
        <div className="frame-6">
          <img alt="info" alt="info" src="" />
          <div className="ellipse-3-4" />
        </div>
       
        <div className="frame-6">
          <img alt="info" alt="info" src="" />
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
          <img alt="info" alt="info" src={Group12} className="App-Group12" alt="Group12" />
        </div>
   
        <img alt="info" alt="info" src="" />
        <img alt="info" alt="info" src="" />
        <div className="rectangle-4" />
        <img alt="info" alt="info" src="" />
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
        <img alt="info" alt="info" src={Group10} className="App-Group10" alt="Group10"/>
      
        </div>
     
      
         
      </div> */
    //   }
    )
  
 
}
export default App;