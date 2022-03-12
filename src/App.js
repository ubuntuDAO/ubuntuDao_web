import React, { useState, useEffect } from "react";

import './App.css'

// import './src/images';

import TokenomicsImage from "./images/tokenomicsnew (1).svg";
import MobileTokenomicsImage from './images/mobile-treasury-imagenew.svg'
import Empowering from "./images/Empowering.svg";
import Creativity from "./images/Creativity.svg";
import Positioning from "./images/Positioning.svg";
import Promotion from "./images/Promotion.svg";

import MobileEmpowering from "./images/mobileEmpowering.svg";
import MobileCreativity from "./images/mobileCreativity.svg";
import MobilePositioning from "./images/mobilePositioning.svg";
import MobilePromotion from "./images/mobilePromotion.svg";
// import Telegram from "./images/telegram.svg";
// import Facebook from "./images/facebook.svg";
import Mission from "./images/mission.svg";
import Vision from "./images/vision.svg";
import Transparency from "./images/tranparency-strategic.svg";
import CommunityDriven from "./images/community-pan-african (1).svg";
// import Instagram from "./images/instagram.svg";
// import Twitter from "./images/twitter.svg";
import OverviewText from "./images/OverviewText.svg";
// import ObjectivesText from './images/ObjectivesText.svg';
import TokenomicsText from './images/TokenomicsText.svg';
import MobileRoadmap from './images/mobileRoadmap.svg'
// import MobileDistribution from './images/mobileDistribution.svg'
// import TokenDistribution from './images/tokenDistributionImage.svg'
import TokenomicsDistribution from './images/tokenDistributionImage (2).svg'
import MobileTokenomicsDistribution from './images/mobile-tokenomics (1).svg'
import Roadmap from './images/newUbuntu-Dao-ROADMAP.svg'
import MenuBar from './images/menubar.svg'
import UbuntuLogo from './images/ubuntuMainLogo.svg'
// import UbuntuColorLogo from './images/UBUNTU-Color-Logo.svg'
// import PoocoinsLogo from './images/PoocoinsLogo (1).svg'
// import BinanceLogo from './images/BinanceLogo (1).svg'
// import CoinMarketCapLogo from './images/CoinMarketCapLogo (1).svg'
// import CoinGeckoLogo from './images/CoingeckoLogo.svg'
import TokenHeaderImage from './images/headerImage.svg'

import TelegramIcon from './images/telegram-icon.svg'
import InstagramIcon from './images/instagram-icon.svg'
import TwitterIcon from './images/twitter-icon.svg'
import FacebookIcon from './images/facebook-icon.svg'
import DiscordIcon from './images/discord-icon.svg'
import RedditIcon from './images/reddit-icon.svg'

import BlockchainImage from './images/Blockchain Dev Institute.svg'
import MadeInAfricaImage from './images/Made in Africa Initiative.svg'
import UbuntuCapitalImage from './images/Ubuntu Capital.svg'
import LittlePhilantrophist from './images/Little Philanthropist.svg'

// mobile
import MobileBlockchainImage from './images/Mobile Blockchain Dev Institute.png'
import MobileMadeInAfricaImage from './images/Mobile Made in Africa Initiative.png'
import MobileUbuntuCapitalImage from './images/Mobile Ubuntu Capital.png'
import MobileLittlePhilantrophist from './images/Mobile Little Philanthropist.png'


import WhitepaperPDF from './images/UBUNTU DAO WHITEPAPER.pdf'
import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
import {AnimationOnScroll} from 'react-animation-on-scroll' 


// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";
export const App  = () => {
 const [menu, setMenu] = useState(false)
 const [currentSlide, setCurrentSlide] = useState(MobileLittlePhilantrophist)
 const [webCurrentSlide, setWebCurrentSlide] = useState(LittlePhilantrophist)
 const [firstSlideStyle, setFirstSlideStyle] = useState(null)
  const [secondSlideStyle, setSecondSlideStyle] = useState(null)
   const [thirdSlideStyle, setThirdSlideStyle] = useState(null)
    const [fourthSlideStyle, setFourthSlideStyle] = useState(null)

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
                                <li><a href="#tokenomics-page" className="lope">Tokenomics</a></li>
                                <li><a href="#roadmap" className="lope">Roadmap</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
            )
        } else {
            return null
        }
    }

    useEffect(() => {
       setTimeout(() => {
         if (currentSlide=== MobileLittlePhilantrophist){
             setCurrentSlide(MobileMadeInAfricaImage)
             setWebCurrentSlide(MadeInAfricaImage)
             setSecondSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setFirstSlideStyle(null)
                        setThirdSlideStyle(null)
                        setFourthSlideStyle(null)
             
         }else if(currentSlide === MobileMadeInAfricaImage){

                         setCurrentSlide(MobileBlockchainImage)
                          setWebCurrentSlide(BlockchainImage)
             setFourthSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })

                        setFirstSlideStyle(null)
                        setThirdSlideStyle(null)
                        setSecondSlideStyle(null)
         } else if(currentSlide === MobileBlockchainImage){
            

                        setCurrentSlide(MobileUbuntuCapitalImage)
                         setWebCurrentSlide(UbuntuCapitalImage)
              setThirdSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setFirstSlideStyle(null)
                        setSecondSlideStyle(null)
                        setFourthSlideStyle(null)
         } else{
             setCurrentSlide(MobileLittlePhilantrophist)
              setWebCurrentSlide(LittlePhilantrophist)
            
                        setFirstSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })

                        setSecondSlideStyle(null)
                        setThirdSlideStyle(null)
                        setFourthSlideStyle(null)
         }
       }, 10000);
    }, [currentSlide]);



  
    return (
    <div className="main-body">
    {/* welcome page */}
        <div id="welcome-page" className="frame-1"
            
        >
        <div className="welcome-container"
        style={{
//             backgroundImage: "url(/homeSVG.svg)",
//              "backgroundRepeat": "no-repeat",
 
//   backgroundSize:" cover"
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
                    <a href="#welcome-page" className="nav-link"><p >HOME</p></a>
                    <a href="#about-page" className="nav-link"> <p >OVERVIEW</p></a>
                     <a href="#tokenomics-page" className="nav-link"> <p >TOKENOMICS</p></a>
                       <a href="#roadmap" className="nav-link"><p>ROADMAP</p></a>
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
                target="_blank"
                href={WhitepaperPDF}
                rel="noreferrer"
                className="welcome-button"
               
                >
                    <p>WHITE PAPER</p>
                    </a>
            </div>
            
        </div>
            <div    
                className="second-section"
                style={{
                     backgroundImage: "url(/SecondHalfHomePage-2.svg)",
                      backgroundRepeat: "no-repeat",
                        backgroundSize:" 100vh",
                        display:"none",
                        visibility:"hidden"
 
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
                <p className="about-text">Ubuntu Dao is a community driven project that seeks to drive the adoption of Blockchain Technology in Africa through education, the stimulation of a creator ecosystem and strategic charity. This project will position Africa in the fore-front of this breakthrough technology, not just through its usage, but also in the creation of innovative solutions which will be adopted globally. The movement has already begun to transit Africa from a default consumption tilt to becoming production conscious and the Ubuntu Dao project further emphasizes the truth that Africans are innovative enough and we can change 'our' world and sure enough, 'the' world.</p>
            {/* <a className="about-link"
           href="/"
            ><p>Read More</p></a> */}
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
        {/* Project Section */}


        <div className="projects-page">
        <h1>OUR PROJECTS</h1>
        <div className="projects-section">
             <div className="project-container">
              <img src={currentSlide} alt='our project initiative' className="mobile-project-image-card"/>
              <img src={webCurrentSlide} alt="wrb our porject initiative" className="project-image-card"/>
                <div className="slide-container">
                    <span 
                    style={firstSlideStyle}
                    
                    onClick={()=>{
                        setCurrentSlide(MobileLittlePhilantrophist)
                        setFirstSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setSecondSlideStyle(null)
                        setThirdSlideStyle(null)
                        setFourthSlideStyle(null)
                    }}
                    className="slide-select">
<p>&#160; </p>
                    </span>
                    <span 
                    onClick={()=>{
                        setCurrentSlide(MobileMadeInAfricaImage)
                         setSecondSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setFirstSlideStyle(null)
                        setThirdSlideStyle(null)
                        setFourthSlideStyle(null)
                    }}
                    style={secondSlideStyle}
                     className="slide-select">
                        <p>&#160; </p>
                    </span>
                    <span onClick={()=>{
                        
                        setCurrentSlide(MobileUbuntuCapitalImage)
                         setThirdSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setSecondSlideStyle(null)
                        setFirstSlideStyle(null)
                        setFourthSlideStyle(null)
                    }} 
                    style={thirdSlideStyle}
                    className="slide-select">
                        <p>&#160; </p>
                    </span>
                    <span onClick={()=>{
                        setCurrentSlide(MobileBlockchainImage)
                         setFourthSlideStyle({
                            width: '32px',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff'
                        })
                        setSecondSlideStyle(null)
                        setThirdSlideStyle(null)
                        setFirstSlideStyle(null)
                    }} 
                    style={fourthSlideStyle}
                    className="slide-select">
                        <p>&#160; </p>
                    </span>
                </div>
             </div>
        </div>

        </div>
       
         {/* end of project section */}

         {/* objectives scren page */}
        <div id="objectives-page" className="frame-3">
            <h1 className="objectives-header">OUR OBJECTIVES</h1>
           
                {/* <img alt="overview" src={ObjectivesText} className="objectives-header"/> */}
              {/* objectives card */}
              <AnimationOnScroll animateIn="animate__slideInUp"  className="objectives-container">
               <div className="objectives-card">
                <div className="objectives-innercard">
                    <img  alt="info" src={Positioning}
                    className="objectives-component"
                    style={{
                       width:"18rem",
                       height:"30rem",
                       
                   }}
                    />
                    <img  alt="info" src={MobilePositioning}
                    className="mobile-objectives-component"
                    style={{
                       width:"100%",
                      
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
                     className="objectives-component"
                    style={{
                       width:"18rem",
                       height:"30rem",
                       marginTop:"2rem"
                   }}
                    />
                    <img alt="info"  src={MobileEmpowering}
                     className="mobile-objectives-component"
                   style={{
                       width:"100%",
                  marginTop:"-2rem"
                       
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
                    className="objectives-component"
                   style={{
                       width:"15rem",
                      height:"30rem"
                   }}
                   />
                   <img alt="info"  src={MobileCreativity}
                    className="mobile-objectives-component"
                  style={{
                       width:"100%",
                      
                      
                      
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
                    className="objectives-component"
                   id="promotion"
                   style={{
                       width:"20rem",
                        height:"30rem",
                        marginTop:"-3rem"
                      
                   }}
                   />
                   <img alt="info"  src={MobilePromotion}
                    className="mobile-objectives-component"
                   id="promotion"
                  style={{
                       width:"100%",
                        marginLeft:"0rem",
                        marginTop:"-1.2rem"
                       
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
                     <img alt="info" 
                    className="mobile-tokenomics-image-style"
                     src={MobileTokenomicsDistribution}/>
             </div>  
             <AnimationOnScroll animateIn="animate__slideInRight"  className="tokenomics-image">
                <img alt="info" 
               className="tokenomics-image-style" 
                src={TokenomicsImage}/>
                <img alt="info" 
               className="mobile-tokenomics-image-style" 
                src={MobileTokenomicsImage}/>
             </AnimationOnScroll> 
        </div>
        {/* end of tokenomics page */}
        {/* token distribution page */}
            <div id="token-distribution-page"
             className="frame-4"

                   
            >
            {/* <img alt="info" 
               className="token-distribution-header-image-style" 
                src={TokenHeaderImage}/> */}
              
                {/* <h1 className="token-roadmap-header">UBUNTU DAO ROADMAP</h1> */}
                <div className="token-roadmap-image">
              <img alt="info"  src={MobileRoadmap}
                         className="mobile-roadmap-image-style"
                    style={{
                        width:'20rem'
                    }}
                    />
                    <img id="roadmap" alt="info"  src={Roadmap}
                         className="token-roadmap-image-style"
                    // style={{
                    //     width:'100vw'
                    // }}
                    />
                </div>
            </div>
        {/* end of token distribution page */}
        <div className="footer-container">       
        <img alt="info" 
               className="token-distribution-header-image-style" 
                src={TokenHeaderImage}/>
        {/* Footer */}
        <div id="footer-section" className="footer" 
         style={{
                     backgroundImage: "url(/tokenDistributionBackgroundImage.svg)"
                }}
        >
         
            <div className="footer-section-1">
            <div className="footer-logo">
             <img src={UbuntuLogo} alt="logo" className="ubuntu-footer-logo" />
            </div>
            
           
            
                <nav className="footer-social">
                    <div>
                    <a href="https://telegram.com" target="_blank" rel="noreferrer" >
<img alt="info" src={TelegramIcon}/>
                    </a>
                        
                    </div>
                   <div>
                   <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <img alt="info" src={InstagramIcon}/>
                        </a>
                    </div>
                    <div>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <img alt="info" src={TwitterIcon}/>
                        </a>
                    </div>
                   <div>
                   <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <img alt="info" src={FacebookIcon}/>
                        </a>
                    </div>
                     <div>
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <img alt="info" src={DiscordIcon}/>
                        </a>
                    </div>
                     <div>
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <img alt="info" src={RedditIcon}/>
                        </a>
                    </div>
                
                </nav>
                <div className="footer-links">
                    <a target="_blank"
                href={WhitepaperPDF}
                rel="noreferrer"
                    ><p>White Paper</p></a>
                    <a href="/"><p>Token</p></a>
                    <a href="/"><p>Roadmap</p></a>
                    <a href="/"><p>Contact Us</p></a>
                   
                </div>
            </div>
            <div className="footer-section-2">
                {/* <p>&copy; Ubuntu Dao 2020 </p> */}
                <a href="/"><p>&copy; Ubuntu DAO 2022 </p></a>
            </div>
            <div className="footer-section-3">
            
            <a href="/" className="partnership-footer"><p>partnerships@UbuntuDAO.com </p></a>
            <a href="/" className="copy"><p>&copy; Ubuntu DAO 2022 </p></a>
            </div>
            
       
        </div>
</div>
        {/* <div className="partners-container">
            <img src={CoinGeckoLogo} alt='congecko' className="coingecko"/>
            <img src={CoinMarketCapLogo} alt='coinmarket' className="coinmarket"/>
            <img src={BinanceLogo} alt='binance' className="binance"/>
            <img src={PoocoinsLogo} alt='poocoin' className="poocoin"/>
        </div> */}
        {/* end of footer */}
        {/* <div className="mobile-footer-section-2">
                <p>&copy; Ubuntu Dao </p>
            </div> */}
        

    </div>
    
    
       
    )
  
 
}
export default App;