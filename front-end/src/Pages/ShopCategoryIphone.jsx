import React, { useContext } from 'react';
import './CSS/ShopCategoryIphone.css';
import { ShopContext } from '../Context/ShopContext';
import Iphone from '../Components/Item/iPhone';
import Navbar from '../Components/Navbar/Navbar'

const ShopCategoryIphone = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <><Navbar/>
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {products.filter(item => item.category === 'iPhone').map((item, i) => (
          <Iphone key={i} id={item.id} name={item.name} product_image={item.product_image} price={item.price} discount={item.discount} />
        ))}
      </div>
    </div>
    </>
  );
}

export default ShopCategoryIphone;
