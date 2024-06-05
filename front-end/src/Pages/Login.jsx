import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import './CSS/Login.css'
import Navbar from '../Components/Navbar/Navbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/")
    }
  }, [])

  async function login(){
    console.warn(email, password)
    let item = {email, password};
    let result = await fetch("http://localhost:8000/api/login",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();

    if (result && !result.error) {
      localStorage.setItem("user-info", JSON.stringify(result));  
      navigate("/");
    } else {
      alert(result.error);
    }
  }

  return (
    <>
      <Navbar />
      <div className='login'>
        <div className="login-container">
          <h1>Đăng Nhập</h1>
          <div className="login-fields">
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Mật Khẩu' onChange={(e)=>setPassword(e.target.value)}/>
          </div >
          <div className='login-footer'>
            <p className='login-dn'><Link to='/forgotpassword'>Quên mật khẩu?</Link></p>
            <p className='login-dk'>Chưa có tài khoản?<Link to='/signup'><span>Đăng ký tại đây</span></Link></p>
          </div>
          <button onClick={login}>Đăng Nhập</button>
        </div>
      </div>
    </>
  )
}
export default Login