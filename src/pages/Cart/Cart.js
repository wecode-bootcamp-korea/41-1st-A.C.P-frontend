import React, { useEffect, useState } from 'react';
import CartWrap from './components/CartWrap/CartWrap';
import CartPriceInfo from './components/CartPriceInfo/CartPriceInfo';
import { cartDataRefactor, fetchApi } from './config';
import './Cart.scss';
import { FETCH_CART_API } from '../../config';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const totalPrice = selectedItems.reduce(
    (acc, curr) => acc + curr.itemPrice,
    0
  );
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    getCartItems();
    token === null && navigate('/');
  }, []);

  const getCartItems = async () => {
    // const result = await fetchApi('/data/cart.json');
    const result = await fetchApi(FETCH_CART_API);
    console.log(result.data);
    const data = cartDataRefactor(result.data);
    setCartItems(data);
  };

  return (
    <section className="cart">
      <div className="innerCart">
        <CartWrap
          cartItems={cartItems}
          setCartItems={setCartItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <CartPriceInfo totalPrice={totalPrice} />
      </div>
    </section>
  );
}
