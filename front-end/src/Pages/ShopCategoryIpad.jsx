import React, { useContext } from 'react';
import './CSS/ShopCategoryIpad.css';
import { ShopContext } from '../Context/ShopContext';
import Ipad from '../Components/Item/iPad';
import Navbar from '../Components/Navbar/Navbar'

const ShopCategoryIpad = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <>
    <Navbar/>
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {products.filter(item => item.category === 'iPad').map((item, i) => (
          <Ipad key={i} id={item.id} name={item.name} product_image={item.product_image} price={item.price} discount={item.discount} />
        ))}
        </div>
      </div>
      </>
    );
}

export default ShopCategoryIpad;
