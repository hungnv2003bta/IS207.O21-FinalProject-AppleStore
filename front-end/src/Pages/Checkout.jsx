import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/Checkout.css';
import Navbar from '../Components/Navbar/Navbar'

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [user_info, setUser] = useState({});
  const [user_id, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user-info"));
        setUser(user);
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

  useEffect(() => {
    const sum = cartItems.reduce((total, item) => total + parseInt(item.total_money), 0);
    setTotalSum(sum);
  }, [cartItems, productDetails]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('user_id', user_id);
  //   formData.append('note', note);
  //   formData.append('status', 0);
  //   formData.append('total_money', totalSum);
  //   formData.append('address', address);
  //   if (cartItems && cartItems.length) {
  //     cartItems.forEach((item, index) => {
  //         formData.append(`cartItems[${index}][product_id]`, item.product_id);
  //         formData.append(`cartItems[${index}][price]`, productDetails[index]?.price);
  //         formData.append(`cartItems[${index}][qty]`, item.qty);
  //         formData.append(`cartItems[${index}][total_money]`, item.total_money);
  //     });
  //   }
    
  //   try {
  //     await Promise.all(cartItems.map(async (item) => {
  //         try {
  //             const response = await axios.put(`http://localhost:8000/api/product-items/${item.product_id}`, {
  //                 qty_in_stock: item.qty
  //             });

  //             console.log('qty_enough', response.data.qty_in_stock);
  //             if (response.data.qty_in_stock < 0) {
  //                 throw new Error("Số lượng sản phẩm không đủ!");
  //             }
  //             else{
  //               const response = await fetch("http://localhost:8000/api/orders", {
  //                 method: 'POST',
  //                 body: formData
  //               });
          
  //               if (response.ok) {
  //                   alert("Đặt hàng thành công!");
  //                   console.log('cart details', cartItems);
  //                   await Promise.all(cartItems.map(async (item) => {
  //                       if (item.user_id === user_id) {
  //                           await axios.delete(`http://localhost:8000/api/cart/remove/${item.id}`);
  //                       }
  //                   }));
  //                   window.location.reload();
  //               } else {
  //                   alert("Đặt hàng thất bại.");
  //               }

  //             }
  //         } catch (error) {
  //             console.error('Error updating quantity:', error);
  //             throw error; // Propagate the error to the outer catch block
  //         }
  //     }));
  // } catch (error) {
  //     console.error("Network error:", error);
  //     alert("Đặt hàng thất bại vì số lượng sản phẩm trong kho ");
  // }
  

  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('note', note);
    formData.append('status', 0);
    formData.append('total_money', totalSum);
    formData.append('address', address);
    if (cartItems && cartItems.length) {
        cartItems.forEach((item, index) => {
            formData.append(`cartItems[${index}][product_id]`, item.product_id);
            formData.append(`cartItems[${index}][price]`, productDetails[index]?.price);
            formData.append(`cartItems[${index}][qty]`, item.qty);
            formData.append(`cartItems[${index}][total_money]`, item.total_money);
        });
    }

    try {
        // Kiểm tra số lượng sản phẩm trong kho trước khi đặt hàng
        const qtyCheckResponses = await Promise.all(cartItems.map(async (item) => {
            const response = await axios.put(`http://localhost:8000/api/product-items/${item.product_id}`, {
                qty_in_stock: item.qty
            });
            return response.data.qty_in_stock;
        }));

        const isQtyEnough = qtyCheckResponses.every(qty_in_stock => qty_in_stock >= 0);

        if (!isQtyEnough) {
            throw new Error("Số lượng sản phẩm không đủ!");
        }

        // Gửi đơn hàng một lần
        const response = await fetch("http://localhost:8000/api/orders", {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert("Đặt hàng thành công!");
            console.log('cart details', cartItems);

            // Xóa các sản phẩm trong giỏ hàng sau khi đặt hàng thành công
            await Promise.all(cartItems.map(async (item) => {
                if (item.user_id === user_id) {
                    await axios.delete(`http://localhost:8000/api/cart/remove/${item.id}`);
                }
            }));

            window.location.reload();
        } else {
            alert("Đặt hàng thất bại.");
        }

    } catch (error) {
        console.error("Network error:", error);
        alert("Đặt hàng thất bại vì số lượng sản phẩm trong kho không đủ.");
    }
};


  useEffect(() => {
    if(user_info){
      setUserId(user_info.id);
      setName(user_info.name);
      setPhoneNumber(user_info.phone_number);
      setEmail(user_info.email);
    }
  });

  return (
    <div className="container">
      <Navbar />
      <div className="heading-checkout">
        <i className="fa fa-credit-card fa-4x" aria-hidden="true"></i>
        <h2>Thanh toán</h2>
        <p className="lead">Vui lòng kiểm tra thông tin khách hàng, thông tin giỏ hàng trước khi đặt hàng.</p>
      </div>
      <div className="payment-content">
        <div className="customer-info">
          <h4>Thông tin khách hàng</h4>
          <div className="list-input-info">
            <div className="input">
              <label>Họ tên</label>
              {user_info ? (
                <input style={{ fontWeight: 'bold' }} type="text" name="kh_ten" id="kh_ten" value={user_info.name} readOnly />
              ) : (
                <input type="text" name="kh_ten" id="kh_ten" placeholder="Nguyen Van A" onChange={(e)=>setName(e.target.value)}/>
              )}
            </div>
            <div className="input">
              <label>Địa chỉ</label>
              <input type="text" name="kh_diachi" id="kh_diachi" placeholder="Thu Duc" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className="input">
              <label>Điện thoại</label>
              {user_info ? (
                <input  style={{ fontWeight: 'bold' }} type="text" name="kh_dienthoai" id="kh_dienthoai" value={user_info.phone_number} readOnly/>
              ):(
                <input type="text" name="kh_dienthoai" id="kh_dienthoai" placeholder="0915659223" onChange={(e)=>setPhoneNumber(e.target.value)}/>
              )}
            </div>
            <div className="input">
              <label>Email</label>
              {user_info ? (
                <input style={{ fontWeight: 'bold' }} type="text" name="kh_email" id="kh_email" value={user_info.email} readOnly/>
              ):(
                <input type="text" name="kh_email" id="kh_email" placeholder="nguyenag@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
              )}
            </div>
            <div className="input">
              <label>Ghi chú</label>
              <input type="text" name="kh_note" id="kh_note" placeholder="Ghi chú..." onChange={(e)=>setNote(e.target.value)}/>
            </div>
          </div>

          <h4>Hình thức thanh toán</h4>
          <h5> ***Hiện tại chỉ hỗ trợ thanh toán khi nhận hàng***</h5>
          <hr />
          <button className="order-button" type="submit" name="order-button" onClick={handleSubmit}>Đặt hàng</button>
        </div>

        <div className="order-products">
          <h4 className="heading-order-products">
              Giỏ hàng
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{productDetails[index]?.name}</td>
                  <td>{productDetails[index]?.price} VND</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"><strong>Tổng thành tiền</strong></td>
                <td><strong>{totalSum} VND</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
