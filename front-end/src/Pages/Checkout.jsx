import React from 'react';
import CartItems from '../Components/CartItems/CartItems.jsx';
import './CSS/Checkout.css';

const Checkout = () => {
  return (
    <div className="container">
      <div className="heading-checkout">
        <i className="fa fa-credit-card fa-4x" aria-hidden="true"></i>
        <h2>Thanh toán</h2>
        <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
      </div>
      <div className="payment-content">
        <div className="customer-info">
          <h4>Thông tin khách hàng</h4>
          <div className="list-input-info">
            <div className="input">
              <label>Họ tên</label>
              <input type="text" name="kh_ten" id="kh_ten" value="Nguyen Van A" readOnly />
            </div>
            <div className="input">
              <label>Giới tính</label>
              <input type="text" name="kh_gioitinh" id="kh_gioitinh" value="Nam" readOnly />
            </div>
            <div className="input">
              <label>Địa chỉ</label>
              <input type="text" name="kh_diachi" id="kh_diachi" value="Thu Duc" readOnly />
            </div>
            <div className="input">
              <label>Điện thoại</label>
              <input type="text" name="kh_dienthoai" id="kh_dienthoai" value="0915659223" readOnly />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="text" name="kh_email" id="kh_email" value="nguyenag@gmail.com" readOnly />
            </div>
            <div className="input">
              <label>Ngày sinh</label>
              <input type="text" name="kh_ngaysinh" id="kh_ngaysinh" value="11/6/1989" readOnly />
            </div>
            <div className="input">
              <label>CCCD</label>
              <input type="text" name="kh_cmnd" id="kh_cmnd" value="362209685" readOnly />
            </div>
          </div>

          <h4>Hình thức thanh toán</h4>
          <h5> Hiện tại chỉ hỗ trợ thanh toán khi nhận hàng</h5>
          <div className="payment-method">
            <div className="payment-method-radio">
              <input type="radio" className="custom-pmethod-input" required value="1" />
              <label className="payment-method-lable">Tiền mặt</label>
            </div>
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-pmethod-input" required value="2" />
              <label className="payment-method-lable">Chuyển khoản</label>
            </div>
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-pmethod-input" required value="3" />
              <label className="payment-method-lable">Ship COD</label>
            </div>
          </div>
          <hr />
          <button className="order-button" type="submit" name="order-button">Đặt hàng</button>
        </div>

        <div className="order-products">
          <h4 className="heading-order-products">
            <span className="text-muted">Giỏ hàng</span>
            <span className="total-products">2</span>
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

          <div className="add-coupon">
            <input type="text" placeholder="Mã khuyến mãi" />
            <div className="submit-coupon-button">
              <button type="submit">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
