import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import các trang đã tạo trước đó (giả sử bạn có các file như Home.js, Collection.js...)
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />             {/* Trang chủ */}
        <Route path="/collection" element={<Collection />} />  {/* Bộ sưu tập */}
        <Route path="/about" element={<About />} />        {/* Giới thiệu */}
        <Route path="/contact" element={<Contact />} />    {/* Liên hệ */}
        <Route path="/product/:id" element={<Product />} />{/* Sản phẩm */}
        <Route path="/cart" element={<Cart />} />          {/* Giỏ hàng */}
        <Route path="/login" element={<Login />} />        {/* Đăng nhập */}
        <Route path="/placeorder" element={<PlaceOrder />} /> {/* Đặt hàng */}
        <Route path="/order" element={<Order />} />        {/* Đơn hàng */}
      </Routes>
    </Router>
  );
}

export default App;
