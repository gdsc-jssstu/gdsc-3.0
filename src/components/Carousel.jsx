import React, {useState, useRef} from 'react';
import imageUrlFor from '../utils/imageForUrl';


const Carousel = ({images}) => {
    
    const [currentImage, setCurrentImage] = React.useState(0);
  
    
    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  
    const scrollToImage = i => {
      
      setCurrentImage(i);
      
      refs[i].current.scrollIntoView({
        
        behavior: 'smooth',
        
        block: 'nearest',

        inline: 'start',
      });
    };
  
    const totalImages = images.length;

    const nextImage = () => {
      if (currentImage >= totalImages - 1) {
        scrollToImage(0);
      } else {
        scrollToImage(currentImage + 1);
      }
    };
  
    const previousImage = () => {
      if (currentImage === 0) {
        scrollToImage(totalImages - 1);
      } else {
        scrollToImage(currentImage - 1);
      }
    };
    const arrowStyle =
      'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    const sliderControl = isLeft => (
      <button
        type="button"
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
        style={{ top: '40%' }}
      >
        <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
          {isLeft ? '◀' : '▶'}
        </span>
      </button>
    );

    const caraousel = {
      display: "inline-flex", 
      overflowX: "hidden",
      scrollSnapType: "x mandatory",
      width:"100%",
      height:"15rem",
    }
  
    return (
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-screen place-items-center">
          <div style={caraousel}>
            {sliderControl(true)}
            {images?.map((img, i) => (
              <div className="flex w-full flex-shrink-0 justify-items-center" key={img} ref={refs[i]}>
                <img src={imageUrlFor(img.asset._ref).url()} className="w-full object-contain" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    );
  };


  export default Carousel;