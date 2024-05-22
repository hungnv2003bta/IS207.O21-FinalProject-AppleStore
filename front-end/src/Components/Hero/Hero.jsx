import React from 'react'
import './Hero.css'
import hero_image from '../Assets/ipadwifi.png'
import party_horn_icon from '../Assets/party_horn_icon.png'
import all_product from '../Assets/all_product'

const Hero = () => {
  const product = all_product.find(item => item.image === hero_image);

  // Extract necessary information from the product
  const productName = product ? product.name : 'Product Not Found';
  const productNewPrice = product ? product.new_price : 'Price Not Available';
  const productOldPrice = product ? product.old_price : 'Price Not Available';


  return (
    <div className='hero'>
      <div className="hero-left">
          <h2>ƯU ĐÃI SIÊU HẤP DẪN</h2>
          <div>
              <div className="hero-left-icon">
                <p>ĐỒNG HÀNH </p>
                <img src={party_horn_icon} alt="" />
              </div>
              <p>CÙNG EM ĐẾN TRƯỜNG</p>
          </div>
          <div className="hero-latest-btn">
              <div>Mua ngay</div>
              <i class='bx bx-right-arrow-alt'></i>
          </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
        <div className="product-info">
          {product &&
            <div>
              <p className="product-name">{productName}</p>
              <p className="old-price">{productOldPrice}</p>
              <p className="new-price">{productNewPrice}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Hero
