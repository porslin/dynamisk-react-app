import './App.css';
import styled from 'styled-components';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: papayawhip;
  padding: 4em;
  box-sizing: border-box;
  `

export default App;
