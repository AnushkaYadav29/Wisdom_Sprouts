import React from 'react'
import ImgOne from '../assets/AshaImg1.webp';
import ImgTwo from '../assets/AshaImg2.jpg';
import ImgThree from '../assets/AshaImg3.jpg';
import './HeroSection.css'

const HeroSection = () => {
  return (
<div className="container-fluid" style={{height:"500px"}}>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ImgOne} className="d-block customImg " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ImgTwo} className="d-block customImg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ImgThree} className="d-block customImg" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    
    
  )
}

export default HeroSection