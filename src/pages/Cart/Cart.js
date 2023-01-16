import React, { useEffect, useState } from 'react';
import CartWrap from './components/CartWrap/CartWrap';
import CartPriceInfo from './components/CartPriceInfo/CartPriceInfo';
import { cartDataRefactor, fetchApi } from './config';
import './Cart.scss';
import { GET_CART_API } from '../../config';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const totalPrice = selectedItems.reduce(
    (acc, curr) => acc + curr.itemPrice,
    0
  );

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    // const result = await fetchApi('/data/cart.json');
    const result = await fetchApi(GET_CART_API);
    console.log(result);
    const data = cartDataRefactor(result);
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
