import React, {useContext, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Navbar as NavbarBT, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/Icon/cart-icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState(localStorage.getItem("selectedMenu") || "shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const navigate = useNavigate()

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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
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
