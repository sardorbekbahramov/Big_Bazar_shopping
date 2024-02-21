import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from './images/main_image1.jpg'
import img2 from './images/main_image3.jpg'
import img3 from './images/main_image6.jpg'

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      return (
        <Slider {...settings}>
          <div>
            <img className='w-screen h-[764px] object-cover focus:outline-none focus:border-none' src={img1} alt="img" />
          </div>
          <div>
            <img className='w-screen h-[764px] object-cover focus:outline-none focus:border-none' src={img2} alt="img" />
          </div>
          <div>
            <img className='w-screen h-[764px] object-cover focus:outline-none' src={img3} alt="img" />
          </div>
        </Slider>
      );
}

export default Banner;
// "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg"
// "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg"
// "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg"
// "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"