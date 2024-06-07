import React, { useContext } from 'react';
import './CSS/ShopCategoryIphone.css';
import { ShopContext } from '../Context/ShopContext';
import Iphone from '../Components/Item/iPhone';
import Navbar from '../Components/Navbar/Navbar';

const ShopCategoryIphone = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <div className='shop-category'>
        <img className="shopcategory-banner" src={props.banner} alt="" />
        <div className="shopcategory-products">
          {products
            .filter(item => item.category === 'iPhone')
            .map((item, i) => {
              // Remove commas from the price value
              const priceWithoutCommas = item.price.replace(/,/g, '');
              // Parse the price value as a float
              const price = parseFloat(priceWithoutCommas);
              // Check if the price is a valid number
              if (isNaN(price)) {
                console.error('Invalid price:', item.price);
                return null;
              }
              // Calculate discounted price
              const discountedPrice = price * (1 - item.discount / 100);
              // Format prices with commas
              const formattedPrice = price.toLocaleString();
              const formattedDiscountedPrice = discountedPrice.toLocaleString();
              // Render the Iphone component
              return (
                <Iphone
                  key={i}
                  id={item.id}
                  name={item.name}
                  product_image={item.product_image}
                  price={formattedPrice} // Use formatted price
                  discount={item.discount}
                  discountedPrice={formattedDiscountedPrice} // Use formatted discounted price
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ShopCategoryIphone;
