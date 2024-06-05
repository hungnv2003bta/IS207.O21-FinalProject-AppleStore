import React, { useState } from 'react';
import './CSS/Mac.css'
import { Link } from 'react-router-dom'
const Ipad = (props) => {
  const [selectedStorage, setSelectedStorage] = useState('RAM 8GB - SSD 256GB');
  const handleStorageClick = (storage) => 
  {
    setSelectedStorage(storage);
  }
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={"http://localhost:8000/" + props.product_image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <div className="storage-options">
        <button className={selectedStorage === 'RAM 8GB - SSD 256GB' ? 'selected' : ''} onClick={() => handleStorageClick('RAM 8GB - SSD 256GB')}>RAM 8GB - SSD 256GB</button>
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
