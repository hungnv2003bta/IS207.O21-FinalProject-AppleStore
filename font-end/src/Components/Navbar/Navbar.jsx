import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/cart-icon.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
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
      <div className="nav-search-cart">
        <Link to='/search'><button><i className='bx bx-search' /></button></Link>
        <div className='nav-login'><Link to='/login'><button>Đăng Nhập</button></Link></div>
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" className="cart-icon"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
