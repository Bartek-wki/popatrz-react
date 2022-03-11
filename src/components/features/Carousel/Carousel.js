import React from "react";
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css';
import './Carousel.scss'

const Carousel = () => {
  const flickityOptions = {
    freeScroll: true,
    wrapAround: true,
    autoPlay: true,
    imagesLoaded: true,
    //adaptiveHeight: false,
    setGallerySize: false,
}

  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      disableImagesLoaded={false}
      static
      reloadOnUpdate 
      options={flickityOptions}
      
    > 
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-1.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-2.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-3.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-4.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-5.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-6.jpg`} alt=''/>
      <img src={`${process.env.PUBLIC_URL}/images/carousel/carousel-7.jpg`} alt=''/>
    </Flickity>
  )
}

export default Carousel;