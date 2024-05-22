import React from 'react';
import './CSS/Homepage.css'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <h4>{props.name}</h4>
      <div className="item-prices">
        <div className="item-price-new">
          <strong>{props.new_price}</strong>
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Homepage
