import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      if (user.role_id === 0) {
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/")
    }
  }, [])

  async function login(){
    console.warn(email, password)
    let item = {email, password};
    let result = await fetch("http://localhost:8000/api/loginadmin",{
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
      navigate("/home");
    } else {
      alert(result.error);
    }
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h1>ADMIN</h1>
        <div className="login-fields">
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Mật Khẩu' onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="error">{error}</p>}
        </div>
        <div className='login-footer'>
          <p className='login-dn'> <Link to='/forgetPassword'><span>Quên mật khẩu?</span></Link></p>
        </div>
        <button onClick={login}>Đăng Nhập</button>
      </div>
    </div>
  );
};

export default Login;
