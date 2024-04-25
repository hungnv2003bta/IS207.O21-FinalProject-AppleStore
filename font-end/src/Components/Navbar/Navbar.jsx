import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import cart_icon from '../Assets/cart-icon.png'
import account from '../Assets/account.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>6Tao</p>
      </div>
      <ul className="nav-menu">
        <li  onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Cửa hàng</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("macs")}}><Link style={{textDecoration: 'none'}} to='/macs'>Mac</Link>{menu==="macs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("iphones")}}><Link style={{textDecoration: 'none'}} to='/iphones'>Iphone</Link>{menu==="iphones"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("ipads")}}><Link style={{textDecoration: 'none'}} to='/ipads'>Ipad</Link>{menu==="ipads"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-search-cart-login">
        <Link to='/search'><button><i className='bx bx-search' /></button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" className="icon"/></Link>
        <div className="nav-cart-count">0</div>
        <Link to='/loginsignup'><img src={account} alt="account-icon" className="icon"/></Link>
        
      </div>
    </div>  
  )
}

export default Navbar
