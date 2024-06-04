import React, {useContext, useState, useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Navbar as NavbarBT, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/Icon/cart-icon.png'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>6Tao</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Cửa hàng</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mac")}}><Link style={{textDecoration: 'none'}} to='/mac'>Mac</Link>{menu==="Mac"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("iPhone")}}><Link style={{textDecoration: 'none'}} to='/iphone'>iPhone</Link>{menu==="iPhone"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("iPad")}}><Link style={{textDecoration: 'none'}} to='/ipad'>iPad</Link>{menu==="iPad"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-search-cart">
        <Link to='/search'><button><i className='bx bx-search' /></button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" className="cart-icon"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {
          localStorage.getItem('user-info')?
            // <div className='nav-login'><button onClick={Logout}>Đăng xuất</button></div>
            <Nav>
              <NavDropdown title={<i className='bx bx-user' />} id="nav-dropdown" className="nav-profile">
                <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={Logout}>Đăng xuất</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          :
          <div className='nav-login'><Link to='/login'><button>Đăng Nhập</button></Link></div>
        }
      </div>
    </div>
  )
}

export default Navbar
