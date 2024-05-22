import React, { useContext } from 'react';
import './CSS/ShopCategoryIphone.css';
import { ShopContext } from '../Context/ShopContext';
import Iphone from '../Components/Item/iPhone';

const ShopCategoryIphone = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {all_product.filter(item => item.category === 'iPhone').map((item, i) => (
          <Iphone key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default ShopCategoryIphone;
