import React from 'react';
import './CSS/Homepage.css'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  return (
    <div className='item-homepage'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={"http://localhost:8000/" + props.product_image} alt="" /></Link>
      <h4>{props.name}</h4>
      <div className="item-homepage-prices">
        <div className="item-homepage-price-new">
          <strong>{props.discount}</strong>
        </div>
        <div className="item-homepage-price-old">
          {props.price}
        </div>
      </div>
    </div>
  )
}

export default Homepage
