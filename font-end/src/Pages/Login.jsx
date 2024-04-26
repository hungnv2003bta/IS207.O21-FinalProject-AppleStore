import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Đăng Nhập</h1>
        <div className="login-fields">
          <input type="text" placeholder='Tên Đăng Nhập' />
          <input type="password" placeholder='Mật Khẩu' />
        </div >
        <div className='login-footer'>
          <p className='login-dn'>Quên mật khẩu?</p>
          <p className='login-dk'>Chưa có tài khoản?<Link to='/signup'><span>Đăng ký tại đây</span></Link></p>
        </div>  
        <button>Đăng Nhập</button>
      </div>
    </div>
  )
}
export default Login
