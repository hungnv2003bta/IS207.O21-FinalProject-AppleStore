import React, { useContext } from 'react';
import './CSS/ShopCategoryMac.css';
import { ShopContext } from '../Context/ShopContext';
import Mac from '../Components/Item/Mac';
import Navbar from '../Components/Navbar/Navbar'

const ShopCategoryMac = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <><Navbar/>
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {all_product.filter(item => item.category === 'Mac').map((item, i) => (
          <Mac key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
    </>
  );
}

export default ShopCategoryMac;
