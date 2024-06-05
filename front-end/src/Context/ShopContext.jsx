import React, { createContext, useState, useEffect } from 'react';

// Tạo ngữ cảnh
export const ShopContext = createContext(null);

// Hàm để tạo giỏ hàng mặc định
const getDefaultCart = (products) => {
  let cart = {};
  if (products) {
    products.forEach(product => {
      cart[product.id] = 0;
    });
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  // Sử dụng useEffect để tải dữ liệu sản phẩm từ API khi component được mount
  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setCartItems(getDefaultCart(data));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  }

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  // Hàm để tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  // Hàm để tính tổng số tiền trong giỏ hàng
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === parseInt(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }

  const contextValue = { getTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
