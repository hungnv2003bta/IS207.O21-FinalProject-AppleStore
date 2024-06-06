import React, {useContext, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Navbar as NavbarBT, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/Icon/cart-icon.png'
import axios from 'axios'

const Navbar = () => {
  const [menu, setMenu] = useState(localStorage.getItem("selectedMenu") || "shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCartCount = async () => {
      const userInfo = JSON.parse(localStorage.getItem("user-info"));
      if (userInfo && userInfo.id) {
        try {
          const response = await axios.get(`http://localhost:8000/api/cart/count/${userInfo.id}`);
          if (response.data && typeof response.data.cartItemsCount === 'number') {
            setTotalItems(response.data.cartItemsCount);
          } else {
            console.error('Invalid response structure:', response.data);
          }
        } catch (error) {
          console.error('Failed to fetch cart count:', error);
        }
      } else {
        console.error('User info is missing or invalid.');
      }
    };

    fetchCartCount();
  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate('/')
  }

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    localStorage.setItem("selectedMenu", menuName);
  }

  useEffect(() => {
    const savedMenu = localStorage.getItem("selectedMenu");
    if (savedMenu) {
      setMenu(savedMenu);
    }
  }, []);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>6Tao</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("shop")} className={menu === "shop" ? "active" : ""}>
          <Link style={{textDecoration: 'none'}} to='/'>Cửa hàng</Link>{menu === "shop" ? <hr/> : null}
        </li>
        <li onClick={() => handleMenuClick("Mac")} className={menu === "Mac" ? "active" : ""}>
          <Link style={{textDecoration: 'none'}} to='/mac'>Mac</Link>{menu === "Mac" ? <hr/> : null}
        </li>
        <li onClick={() => handleMenuClick("iPhone")} className={menu === "iPhone" ? "active" : ""}>
          <Link style={{textDecoration: 'none'}} to='/iphone'>iPhone</Link>{menu === "iPhone" ? <hr/> : null}
        </li>
        <li onClick={() => handleMenuClick("iPad")} className={menu === "iPad" ? "active" : ""}>
          <Link style={{textDecoration: 'none'}} to='/ipad'>iPad</Link>{menu === "iPad" ? <hr/> : null}
        </li>
      </ul>
      <div className="nav-search-cart">
        <Link to='/search'><button><i className='bx bx-search' /></button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" className="cart-icon"/></Link>
        <div className="nav-cart-count">{totalItems}</div>
        {
          localStorage.getItem('user-info') ?
            <Nav>
              <NavDropdown title={<i className='bx bx-user' />} id="nav-dropdown" className="nav-profile">
                <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/changepassword')}>Thay đổi mật khẩu</NavDropdown.Item>
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
