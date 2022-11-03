import './App.css';
import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";
//import HomePage from "./pages/homePage";
//import ShoppingCartPage from "./pages/shoppingCartPage";
import { Button } from "antd";

const Home = lazy(() => import(/*webpackChunkName: 'home' */  "./pages/homePage")) ;
const ShoppingCart = lazy(() => import(/*webpackChunkName: 'shoppingcart' */  "./pages/shoppingCartPage"));

function App() {
  return (
    <div className="App">
      <Button type="primary">按钮</Button>
      <ul>
          <li>
              <Link to="/home">Home</Link>
          </li>
          <li>
              <Link to="/shoppingcart">ShoppingCart</Link>
          </li>
      </ul>
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
