import React, { useState } from 'react';
import './CSS/iPhone.css'
import { Link } from 'react-router-dom'

const Iphone = (props) => {
  return (
    <div className='item-iphone'>
      <Link to={`/product/${props.id}`}><img src={"http://localhost:8000/" + props.product_image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <Link to={`/product/${props.id}`}>
      <h4>{props.name}</h4>
      <div className="item-iphone-prices">
        <div className="item-iphone-price-new">
          <strong>{props.discountedPrice}</strong>
        </div>
        <div className="item-iphone-price-old">
          {props.price}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Iphone
