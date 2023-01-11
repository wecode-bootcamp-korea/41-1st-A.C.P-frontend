import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import ProductDetailPot from './pages/Products/ProductDetail/ProductDetailPot';
import ProductDetailNutrient from './pages/Products/ProductDetail/ProductDetailNutrient';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Ordered from './pages/Ordered/Ordered';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/materials/pots/:id" element={<ProductDetailPot />} />
          <Route
            path="/materials/nutrients/:id"
            element={<ProductDetailNutrient />}
          />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/ordered" element={<Ordered />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
