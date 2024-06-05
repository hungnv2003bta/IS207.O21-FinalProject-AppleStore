import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import Navbar from '../Components/Navbar/Navbar'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <>
    <Navbar />
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" width="100%" height="500"/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 20 products
        </p>
        <div className="shopcategory-sort">
          Sort by <i class='bx bx-chevron-down'></i>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        LoadMore
      </div>
    </div>
    </>
  )
}

export default ShopCategory