import React, { useEffect, useState, useRef } from 'react';
import './NewCollections.css';
import Homepage from '../Item/Homepage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewCollections = () => {
  const [products, setProducts] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className='new-collections'>
      <h1>SẢN PHẨM MỚI</h1>
      <hr />
      <div className='collections-and-arrows'>
        <div>
          <button onClick={() => slider.current.slickPrev()}><i className='bx bx-chevron-left'></i></button> 
        </div>
        <div className="collections">
          <Slider ref={slider} {...settings}>
            {products
              .sort((a, b) => b.id - a.id)
              .slice(0, 5)
              .map((item, i) => {
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
        <div>
          <button onClick={() => slider.current.slickNext()}><i className='bx bx-chevron-right'></i></button>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
