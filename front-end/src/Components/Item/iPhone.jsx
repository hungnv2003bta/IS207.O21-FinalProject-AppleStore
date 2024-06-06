import React, { useState } from 'react';
import './CSS/iPhone.css'
import { Link } from 'react-router-dom'
const Iphone = (props) => {
  const [selectedStorage, setSelectedStorage] = useState('128GB');
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
    <div className='item-iphone'>
      <Link to={`/product/${props.id}`}><img src={"http://localhost:8000/" + props.product_image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <div className="iphone-storage-options">
        <button className={selectedStorage === '128GB' ? 'selected' : ''} onClick={() => handleStorageClick('128GB')}>128GB</button>
        <button className={selectedStorage === '256GB' ? 'selected' : ''} onClick={() => handleStorageClick('256GB')}>256GB</button>
        <button className={selectedStorage === '512GB' ? 'selected' : ''} onClick={() => handleStorageClick('512GB')}>512GB</button>
      </div>
      <div className="iphone-color-options">
        <button className={selectedColor === 'xanh dương' ? 'selected xanh-duong' : 'xanh-duong'} onClick={() => handleColorClick('xanh dương')}></button>
        <button className={selectedColor === 'trắng' ? 'selected trang' : 'trang'} onClick={() => handleColorClick('trắng')}></button>
        <button className={selectedColor === 'xanh lá' ? 'selected xanh-la' : 'xanh-la'} onClick={() => handleColorClick('xanh lá')}></button>
        <button className={selectedColor === 'hồng' ? 'selected hong' : 'hong'} onClick={() => handleColorClick('hồng')}></button>
      </div>
      <Link to={`/product/${props.id}`}>
      <h4>{props.name}</h4>
      <div className="item-iphone-prices">
        <div className="item-iphone-price-new">
          <strong>{props.discount}</strong>
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
