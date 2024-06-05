import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/ForgetPassword.css'

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/forgetpassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone_number }),
    });
  };

  return (
    <div className='forgetPassword'>
      <form onSubmit={handleSubmit} className="forgetPassword-form">
        <h1>Reset Password</h1>
        <input 
          type="email" 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Submit</button>
        <p className='back-to-login'><Link to='/login'>Back to Login</Link></p>
      </form>
    </div>
  );
}

export default ForgetPassword;
