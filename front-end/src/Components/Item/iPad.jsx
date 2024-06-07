import React, { useState } from 'react';
import './CSS/iPad.css'
import { Link } from 'react-router-dom'
const Ipad = (props) => {
  const [selectedStorage, setSelectedStorage] = useState('64GB');
  const handleStorageClick = (storage) => 
  {
    setSelectedStorage(storage);
  }
  const [selectedColor, setSelectedColor] = useState('xanh dương');
  const handleColorClick = (color) => 
    {
      setSelectedColor(color);
    }
  return (
    <div className='item-ipad'>
      <Link to={`/product/${props.id}`}><img src={"http://localhost:8000/" + props.product_image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <Link to={`/product/${props.id}`}>
      <h4>{props.name}</h4>
      <div className="item-ipad-prices">
        <div className="item-ipad-price-new">
          <strong>{props.discountedPrice}</strong>
        </div>
        <div className="item-ipad-price-old">
          {props.price}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Ipad
