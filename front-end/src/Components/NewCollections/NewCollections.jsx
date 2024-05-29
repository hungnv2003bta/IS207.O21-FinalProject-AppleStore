//// npm install react-slick --save
//// npm install slick-carousel
import React, { useRef } from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Homepage from '../Item/Homepage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewCollections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  const slider = useRef(null)

  return (
    <div className='new-collections'>
      <h1>SẢN PHẨM MỚI</h1>
      <hr />
      <div className='collections-and-arrows'>
        <div>
          <button onClick={() => slider.current.slickPrev()}><i class='bx bx-chevron-left'></i></button> 
        </div>
        <div className="collections">
          <Slider ref={slider} {...settings}>
          {new_collection.map((item,i) => {
            return <Homepage key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
          </Slider>
        </div>
        <div>
          <button onClick={() => slider.current.slickNext()}><i class='bx bx-chevron-right'></i></button>
        </div>
      </div>
    </div>
  );
};

export default NewCollections
