import React,  from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';


import BlockchainImage from '../../src/images/Blockchain Dev Institute.svg'
import MadeInAfricaImage from '../../src/images/Made in Africa Initiative.svg'
import UbuntuCapitalImage from '../../src/images/Ubuntu Capital.svg'
import LittlePhilantrophist from '../../src/images/Little Philanthropist.svg'


import CarouselSlider from "react-carousel-slider";

export const Carousel  = () => {

    let data = [
        {
            des: '1',
            imgSrc: {BlockchainImage},
        },
        {
            des: '2',
            imgSrc: {MadeInAfricaImage},
        },
        {
            des: '3',
            imgSrc: {UbuntuCapitalImage},
        },
        {
            des: '4',
            imgSrc: {LittlePhilantrophist},
        },
    ]

    let sliderBoxStyle = {
  height: "250px"
  , width: "200px"
  , background: "tranparent"
};

let itemsStyle = {
  height: "100%",
   padding: "20px"
  , background: "#FFCA28"
  , borderRadius: "4px"
  , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  textAlign: "left"
  ,width:"50%"
  , background: "transparent"
  , fontSize: "36px"
  , fontWeight: 300
};

let buttonSetting = {
  placeOn: "middle-inside",
  hoverEvent: true,
  style: {
    left: {
      margin: "0px 0px 0px 10px"
    },
    right: {
      margin: "0px 10px 0px 0px"
    }
  }
};

let manner = {
  autoSliding: {interval: "4s"},
   duration: "0.3s"
};
  
    return (
    <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
    )
  
 
}
export default Carousel;