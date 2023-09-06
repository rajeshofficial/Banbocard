import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Slider.css'; 
import img1 from '../Images /ProductImg/img1.jpeg' ;
import img2 from '../Images /ProductImg/img2.jpeg' ;
import img3 from '../Images /ProductImg/img3.jpeg' ;
import img4 from'../Images /ProductImg/img4.jpeg' ;



export default function ImageSlider() {
    const images = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const productDescription = 'An eco friendly digital Cards l;ets save earth together  ';
    const buyButtonUrl = 'https://example.com/buy-product';
  

        return (
            <div className="slider-container">
              <div className="slider-content">
                <div className="slider-icons">
                  <FaArrowLeft onClick={nextSlide} className="icon-left" />
                </div>
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                <FaArrowRight onClick={prevSlide} className="icon-right" />
                <div className="product-info">
                  <p className="product-description">{productDescription}</p>
                  <a href={buyButtonUrl} className="buy-button" target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
          
  }