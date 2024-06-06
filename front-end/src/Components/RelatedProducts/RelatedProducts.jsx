import React, { useContext, useRef } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './RelatedProducts.css';
import Homepage from '../Item/Homepage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProducts = ({ category, id }) => {
  const { products } = useContext(ShopContext);
  const relatedProducts = products.filter(product => product.category === category && product.category !== '' && product.id !== id);

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
    <div className="related-products">
      <h1>Sản phẩm liên quan</h1>
      <hr/>
      <div className="related-and-arrows">
        <div>
          <button onClick={() => slider.current.slickPrev()}><i class='bx bx-chevron-left'></i></button> 
        </div>
        <div className="related-product">
          <Slider ref={slider} {...settings}>
          {relatedProducts.map((item,i) => {
            return <Homepage key={i} id={item.id} name={item.name} product_image={item.product_image} price={item.price} discount={item.discount} />
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

export default RelatedProducts;
