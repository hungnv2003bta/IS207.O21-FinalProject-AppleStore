import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDisplay.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [userId, setUserId] = useState({});
  const [productId, setProductId] = useState({});
  const [qty, setQty] = useState(1);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleStorageClick = (storage) => 
  {
    setSelectedStorage(storage);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-info"));
    setUserId(user.id);
    setProductId(product.id);
    
    axios.get(`http://localhost:8000/api/products/${product.id}`).then((result) =>
      setTotalMoney(result.data.price)
    )

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('product_id', productId);
    formData.append('qty', qty);
    formData.append('total_money', totalMoney);

    axios.post('http://localhost:8000/api/cart/add', formData)
    .then((response) => {
      toast('Đã thêm sản phẩm vào giỏ hàng!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })

  }; 

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
        <button className='addtocart' onClick={handleSubmit}>
          Thêm vào giỏ hàng
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDisplay;
