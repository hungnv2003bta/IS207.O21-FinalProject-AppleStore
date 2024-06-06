import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const handleStorageClick = (storage) => 
  {
    setSelectedStorage(storage);
  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={"http://localhost:8000/" + product.product_image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            {product.discount}
          </div>
          <div className="productdisplay-right-price-old">
            {product.price}
          </div>
        </div>
        <div className="productdisplay-right-storage">
          <h3>Dung lượng</h3>
          <div className="productdisplay-right-storage-options">
            <button className={selectedStorage === '128GB' ? 'selected' : ''} onClick={() => handleStorageClick('128GB')}>128GB</button>
            <button className={selectedStorage === '256GB' ? 'selected' : ''} onClick={() => handleStorageClick('256GB')}>256GB</button>
            <button className={selectedStorage === '512GB' ? 'selected' : ''} onClick={() => handleStorageClick('512GB')}>512GB</button>
          </div>
        </div>
        <div className="productdisplay-right-color">
          <h3>Màu sắc</h3>
          <div className="productdisplay-right-colors">
            <div className="white"></div>
            <div className="black"></div>
            <div className="nature"></div>
            <div className="blue"></div>
          </div>
        </div>
        <button className='addtocart' onClick={() => { addToCart(product.id); }}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
