// components/ImageSlider.js
"use client"
import { useState } from 'react';
import hoverCard from '../Common/hovercard';

const images = [
  {
    src: '/images/hero/image1.jpg',
    caption: 'Caption One',
  },
  {
    src: '/images/hero/image2.jpg',
    caption: 'Caption Two',
  },
  {
    src: '/images/hero/image3.jpg',
    caption: 'Caption Three',
  },
  // Add more images with captions as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative mt-20">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <div className="border-4 border-gray-500 rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="block w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full mx-auto my-auto sm:w-1/2 sm:my-auto sm:mx-auto ">
          <div className="bg-transparent text-white p-4 rounded-lg">
            <div className="card-container2">
              <div className="card2">
                <div className="front-content2">
                  <p>{images[currentIndex].caption}</p>
                </div>
                <div className="content2">
                  <p className="heading2">Card Hover</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipii
                    voluptas ten mollitia pariatur odit, ab
                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                    necessitatibus dignissimos molestias.
                  </p>
                  
                </div>
                
              </div>

            </div>
            
          </div>
          <div className="container bg-[color]">
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
