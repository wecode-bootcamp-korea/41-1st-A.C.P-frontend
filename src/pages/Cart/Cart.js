import React, { useEffect, useState } from 'react';
import OrderRight from '../../components/OrderRight/OrderRight';
import WrapCart from './WrapCart/WrapCart';
import './Cart.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    // 장바구니 데이터 가져오기
    // fetch('/data/cart.json')
    fetch('http://10.58.52.132:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartItems(data);

        // const itemTotalPrice = data.reduce(
        //   (acc, curr) => acc + parseInt(curr.price),
        //   0
        // );

        // setCartTotalPrice(itemTotalPrice);
      });
  }, []);

  return (
    <section className={`cart${cartItems.length > 0 ? '' : ' empty'}`}>
      <div className="innerCart">
        <article className="cartLeft">
          <h2 className="titleArticle">장바구니</h2>
          <WrapCart cartItems={cartItems} />
        </article>
        {cartItems.length > 0 && <OrderRight cartTotalPrice={cartTotalPrice} />}
      </div>
    </section>
  );
}
