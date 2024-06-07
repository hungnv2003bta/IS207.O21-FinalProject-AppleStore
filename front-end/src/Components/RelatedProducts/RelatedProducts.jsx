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
    slidesToShow: relatedProducts.length > 1 ? 3 : 1, // Show only one slide if there's only one product
    slidesToScroll: 1,
    arrows: false,
    vertical: relatedProducts.length === 1, // Vertical scrolling if only one product
  };

  const slider = useRef(null);

  return (
    <div className="related-products">
      <h1>Sản phẩm liên quan</h1>
      <hr/>
      <div className="related-and-arrows">
        {relatedProducts.length > 1 && (
          <div>
            <button onClick={() => slider.current.slickPrev()}><i className='bx bx-chevron-left'></i></button> 
          </div>
        )}
        <div className="related-product">
          <Slider ref={slider} {...settings}>
            {relatedProducts.map((item, i) => {
                const priceWithoutCommas = item.price.replace(/,/g, '');

                const price = parseFloat(priceWithoutCommas);

                if (isNaN(price)) {
                  console.error('Invalid price:', item.price);
                  return null; 
                }
                const discountedPrice = price * (1 - item.discount / 100);
                const formattedDiscountedPrice = discountedPrice.toLocaleString();
                const formattedPrice = price.toLocaleString();
                return <Homepage 
                key={i} 
                id={item.id} 
                name={item.name} 
                product_image={item.product_image} 
                price={formattedPrice} 
                discount={item.discount} 
                discountedPrice={formattedDiscountedPrice}/>
              })}
          </Slider>
        </div>
        {relatedProducts.length > 1 && (
          <div>
            <button onClick={() => slider.current.slickNext()}><i className='bx bx-chevron-right'></i></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
