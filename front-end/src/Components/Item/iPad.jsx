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
      <div className="ipad-storage-options">
        <button className={selectedStorage === '64GB' ? 'selected' : ''} onClick={() => handleStorageClick('64GB')}>64GB</button>
        <button className={selectedStorage === '256GB' ? 'selected' : ''} onClick={() => handleStorageClick('256GB')}>256GB</button>
      </div>
      <div className="ipad-color-options">
        <button className={selectedColor === 'xanh dương' ? 'selected xanh-duong' : 'xanh-duong'} onClick={() => handleColorClick('xanh dương')}></button>
        <button className={selectedColor === 'bạc' ? 'selected bac' : 'bac'} onClick={() => handleColorClick('bạc')}></button>
        <button className={selectedColor === 'kem' ? 'selected kem' : 'kem'} onClick={() => handleColorClick('kem')}></button>
      </div>
      <Link to={`/product/${props.id}`}>
      <h4>{props.name}</h4>
      <div className="item-ipad-prices">
        <div className="item-ipad-price-new">
          <strong>{props.discount}</strong>
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
