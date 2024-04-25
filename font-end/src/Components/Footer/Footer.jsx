import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <a href="!#">
            <p id="footer-logo">6Tao</p>
            </a>
            {/* <div className="socialmedia">
              <p><img src={fb} alt =""/></p>
              <p><img src={insta} alt =""/></p>
            </div> */}
          </div>
          <div className="sb__footer-links-div">
            <h4>SẢN PHẨM</h4>
            <a href="/macs">
              <p>Macs</p>
            </a>
            <a href="/iphones">
              <p>Iphone</p>
            </a>
            <a href="/ipads">
              <p>Ipad</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>6TAO</h4>
            <a href="!#">
              <p>Liên hệ</p>
            </a>
            <a href="!#">
              <p>Tuyển dụng</p>
            </a>
            <a href="!#">
              <p>Thông tin chung</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>HỖ TRỢ KH</h4>
            <a href="!#">
              <p>Chính sách giao hàng</p>
            </a>
            <a href="!#">
              <p>Hướng dẫn thanh toán</p>
            </a>
            <a href="!#">
              <p>Hướng dẫn mua hàng online</p>
            </a>
          </div>
        </div>
    
        <hr></hr>
        
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div class="sb__footer-below-links">
            <a href="!#"><div><p>Tearm & Conditions</p></div></a>
            <a href="!#"><div><p>Privacy</p></div></a>
            <a href="!#"><div><p>Security</p></div></a>
            <a href="!#"><div><p>Cookie Delaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer