import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();
    
    
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user-info"));
        const user_id= user.id; 
        const response = await axios.get(`http://localhost:8000/api/cart/items/${user_id}`);

        if (response.data && response.data.cartItems) {
          setCartItems(response.data.cartItems);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const getProductDetails = async () => {
    try {
      const productDetailsPromises = cartItems.map(item => {
        return axios.get(`http://localhost:8000/api/products/${item.product_id}`);
      });

      const productDetailsResponses = await Promise.all(productDetailsPromises);
      const productDetails = productDetailsResponses.map(response => response.data);
      setProductDetails(productDetails);
    } catch (error) {
      console.error('Failed to fetch product details:', error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [cartItems])

  const removeFromCart = async (itemId) => {
    console.log('Removing item:', itemId);
    try {
      await axios.delete(`http://localhost:8000/api/cart/remove/${itemId}`);
      setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Sản phẩm</p>
        <p>Tên sản phẩm</p>
        <p>Giá</p>
        <p>Số lượng</p>
        <p>Tổng tiền</p>
        <p>Xoá</p>
      </div>
      <hr />
      {cartItems.map((item, index)=> (
        <div key={item.id}>
          <div className="cartitems-format">
            <img src={"http://localhost:8000/" + productDetails[index]?.product_image} className="carticon-product-icon"/>
            <p>{productDetails[index]?.name}</p>
            <p>${productDetails[index]?.price}</p>
            <button className="cartitems-quantity">{item.qty}</button>
            <p>${item.total_money}</p>
            <i className='bx bx-trash' onClick={() => removeFromCart(item.id)}></i>
          </div>
          <hr />
        </div>
      ))}
      <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default CartItems;
