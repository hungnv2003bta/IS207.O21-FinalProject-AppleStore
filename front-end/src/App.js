import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop' ;
import ShopCategoryIphone from './Pages/ShopCategoryIphone';
import ShopCategoryIpad from './Pages/ShopCategoryIpad';
import ShopCategoryMac from './Pages/ShopCategoryMac';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Search from './Pages/Search';
import iphone_banner from './Components/Assets/Banner/iphone-banner.webp'
import mac_banner from './Components/Assets/Banner/mac-banner.jpeg'
import ipad_banner from './Components/Assets/Banner/ipad-banner.jpeg'
import Footer from './Components/Footer/Footer';
import Protected from './Components/Protected/Protected';

function App() {
  return (
    <div className="site-container">
      <BrowserRouter>
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/Mac' element={<ShopCategoryMac banner={mac_banner} category="Mac"/>}/>
            <Route path='/iPhone' element={<ShopCategoryIphone banner={iphone_banner} category="iPhone"/>}/>
            <Route path='/iPad' element={<ShopCategoryIpad banner={ipad_banner} category="iPad"/>}/>
            <Route path="product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
            </Route>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/cart' element={<Protected Cmp={Cart}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;