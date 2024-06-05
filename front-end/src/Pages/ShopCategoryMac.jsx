import React, { useContext } from 'react';
import './CSS/ShopCategoryMac.css';
import { ShopContext } from '../Context/ShopContext';
import Mac from '../Components/Item/Mac';
import Navbar from '../Components/Navbar/Navbar'

const ShopCategoryMac = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <><Navbar/>
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {products.filter(item => item.category === 'Mac').map((item, i) => (
          <Mac key={i} id={item.id} name={item.name} product_image={item.product_image} price={item.price} discount={item.discount} />
        ))}
      </div>
    </div>
    </>
  );
}

export default ShopCategoryMac;
