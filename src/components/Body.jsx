import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import video1 from '../assets/BackVideo.mp4';
import video2 from '../assets/carouselVideo.mp4';
import video3 from '../assets/carouselVideo2.mp4';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Body = () => {
  return (
    <div className="h-[550px] -mt-24 md:mt-6 w-screen flex justify-center items-center overflow-hidden">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="material-icons"> <BiLeftArrow/>  </span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute mr-4 top-1/2 transform -translate-y-1/2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="material-icons "> <BiRightArrow/>  </span>
            </button>
          )
        }
      >
        <div className="w-full h-full">
          <video autoPlay muted controls className="w-full h-full object-cover">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-full">
          <video autoPlay muted controls className="w-full h-full object-cover">
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-full">
          <video autoPlay muted controls className="w-full h-full object-cover">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Carousel>
    </div>
  );
}

export default Body;
