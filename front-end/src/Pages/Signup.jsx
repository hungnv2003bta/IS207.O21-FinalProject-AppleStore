import React from 'react'
import './CSS/Signup.css'
const Signup = () => {
    return (
        <div className='signup'>
            <div className='signup-container'>
                <h1>Đăng Ký</h1>
                <div className='signup-fields'>
                    <p>Họ và tên *</p>
                    <input type='text' id="Họ và tên" name='Họ và tên' />
                    <p>Tên đăng nhập *</p>
                    <input type='text' id="Tên đăng nhập" name='Tên đăng nhập'/>
                    <p>Mật khẩu *</p>
                    <input type='text' id='Mật khẩu' name='Mật khẩu'/>
                    <p>Nhập lại mật khẩu *</p>
                    <input type='text' id='Nhập lại mật khẩu' name='Nhập lại mật khẩu'/>
                    <p>Email *</p>
                    <input type='text' id='Email' name='Email'/>
                    <p>Địa chỉ</p>
                    <input type='text' id='Địa chỉ' name='Địa chỉ'/>
                </div>
                <button>Tạo tài khoản</button>
            </div>
        </div>       
    )
}
export default Signup