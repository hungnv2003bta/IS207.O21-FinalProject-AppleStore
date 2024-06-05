import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Protected = (props) => {
  let Cmp=props.Cmp
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      alert("Vui lòng đăng nhập để xem giỏ hàng");
      navigate("/login")
    }
  
  });
  return (
    <div>
      <Cmp/>
    </div>
  )
}

export default Protected
