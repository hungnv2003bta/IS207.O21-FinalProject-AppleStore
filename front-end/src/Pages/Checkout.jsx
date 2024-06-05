import React,{ useEffect, useState } from 'react';
import CartItems from '../Components/CartItems/CartItems.jsx';
import './CSS/Checkout.css';

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  
  const handleSubmit = async (event) => {
    console.warn(name, address, phone_number, email, note)
    event.preventDefault(); 
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone_number', phone_number);
    formData.append('email', email);
    formData.append('note', note);

    let result = await fetch ("http://localhost:8000/api/checkout", {
      method: 'POST',
      body: formData
    });
    alert("Đơn hàng được đặt thành công!")
  }

  return (
    <div className="container">
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
              <input type="text" name="kh_ten" id="kh_ten" placeholder="Nguyen Van A" />
            </div>
            <div className="input">
              <label>Địa chỉ</label>
              <input type="text" name="kh_diachi" id="kh_diachi" placeholder="Thu Duc" />
            </div>
            <div className="input">
              <label>Điện thoại</label>
              <input type="text" name="kh_dienthoai" id="kh_dienthoai" placeholder="0915659223" />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="text" name="kh_email" id="kh_email" placeholder="nguyenag@gmail.com" />
            </div>
            <div className="input">
              <label>Ghi chú</label>
              <input type="text" name="kh_note" id="kh_note" placeholder="Ghi chú..." />
            </div>
          </div>

          <h4>Hình thức thanh toán</h4>
          <h5> Hiện tại chỉ hỗ trợ thanh toán khi nhận hàng</h5>
          <hr />
          <button className="order-button" type="submit" name="order-button">Đặt hàng</button>
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
              <tr>
                <td>Apple Ipad 4 Wifi 16GB</td>
                <td>11,800,000 VND</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Apple iPhone 5 16GB White</td>
                <td>14,990,000 VND</td>
                <td>8</td>
              </tr>
              <tr>
                <td colSpan="2"><strong>Tổng thành tiền</strong></td>
                <td><strong>143,520,000 VND</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
