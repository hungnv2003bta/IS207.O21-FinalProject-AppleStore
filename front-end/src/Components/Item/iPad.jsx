import React, { useState } from 'react';
import './CSS/iPad.css'
import { Link } from 'react-router-dom'
const Ipad = (props) => {
  const [selectedStorage, setSelectedStorage] = useState('64GB');
  const handleStorageClick = (storage) => 
  {
    setSelectedStorage(storage);
  }
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={"http://localhost:8000/" + props.product_image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <div className="storage-options">
        <button className={selectedStorage === '64GB' ? 'selected' : ''} onClick={() => handleStorageClick('64GB')}>64GB</button>
        <button className={selectedStorage === '256GB' ? 'selected' : ''} onClick={() => handleStorageClick('256GB')}>256GB</button>
      </div>
      <Link to={`/product/${props.id}`}>
      <h4>{props.name}</h4>
      <div className="item-prices">
        <div className="item-price-new">
          <strong>{props.discount}</strong>
        </div>
        <div className="item-price-old">
          {props.price}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Ipad
