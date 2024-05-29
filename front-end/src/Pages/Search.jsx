import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Search.css";
import data from "../Components/Assets/all_product.js";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="templateContainer">
      <div className="searchInput_Container">
        <input type="text" id="searchInput" placeholder="Search here" onChange={(event) => {
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
              return (
                <Link to={`/product/${val.id}`}>
                <div className='template' key={val.id}>
                  <img src={val.image} alt="" />
                  <div className='infor'>
                    <h3>{val.name}</h3>
                    <div className='price'>
                      <p className='new-price'>{val.new_price} VNĐ</p>
                      <p className='old-price'>{val.old_price} VNĐ</p>
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

export default Search
