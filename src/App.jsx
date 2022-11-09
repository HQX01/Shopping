import './App.css';
import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import HomePage from "./pages/homePage";
// import ShoppingCartPage from "./pages/shoppingCartPage";
import logo from './logo.svg';
import bigpicture from './bigpicture.png';
import './iconfont.css';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/homePage'));
const ShoppingCart = lazy(() => import(/* webpackChunkName: 'shoppingcart' */ './pages/shoppingCartPage'));

function App() {
  return (
    <div className="App">
      <span className="iconfont icon-add-cart"> </span>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shoppingcart">ShoppingCart</Link>
        </li>
      </ul>
      <img src={bigpicture} className="big-picture" alt="bigpicture" />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
