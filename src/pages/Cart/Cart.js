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
    if (!token) {
      alert('현재 회원만 장바구니 사용이 가능합니다. 로그인해주세요!');
      navigate('/login');
    }
    getCartItems();
  }, [token, navigate]);

  const getCartItems = async () => {
    const result = await fetchApi(FETCH_CART_API);
    const data = cartDataRefactor(result.data);
    setCartItems(data);
    console.log('processed data', data);
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
        <CartPriceInfo totalPrice={totalPrice} selectedItems={selectedItems} />
      </div>
    </section>
  );
}
