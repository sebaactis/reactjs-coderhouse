import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/main/Cart';
import CartProvider from './context/CartContext';
import { Order } from './components/main/Order';
import Form from './components/main/Form';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
          <Route path="/orderFollow" element={<Order />} />

        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};


export default App;
