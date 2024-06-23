import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Search.css";
import Navbar from '../Components/Navbar/Navbar'

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input type="text" id="searchInput" placeholder="Tìm kiếm tại đây" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className='template_Container'>
          {
            data
              .filter((val) => {
                if (searchTerm === "") {
                  // return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                const priceWithoutCommas = val.price.replace(/,/g, '');
                // Parse the price value as a float
                const price = parseFloat(priceWithoutCommas);
                // Check if the price is a valid number
                if (isNaN(price)) {
                  console.error('Invalid price:', val.price);
                  return null;
                }
                // Calculate discounted price
                const discountedPrice = price * (1 - val.discount / 100);
                // Format prices with commas
                const formattedPrice = price.toLocaleString();
                const formattedDiscountedPrice = discountedPrice.toLocaleString();
                return (
                  <Link to={`/product/${val.id}`} key={val.id}>
                    <div className='template'>
                      <img src={"http://localhost:8000/" + val.product_image} alt="" />
                      <div className='infor'>
                        <h3>{val.name}</h3>
                        <div className='price'>
                          <p className='new-price'>{formattedDiscountedPrice}đ</p>
                          <p className='old-price'>{formattedPrice}đ</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;
