import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop' ;
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Search from './Pages/Search';
import iphone_banner from './Components/Assets/iphone_banner.jpg'
import mac_banner from './Components/Assets/mac_banner.jpg'
import ipad_banner from './Components/Assets/ipad-banner.jpg'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/macs' element={<ShopCategory banner={mac_banner} category="macs"/>}/>
        <Route path='/iphones' element={<ShopCategory banner={iphone_banner} category="iphones"/>}/>
        <Route path='/ipads' element={<ShopCategory banner={ipad_banner} category="ipads"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;