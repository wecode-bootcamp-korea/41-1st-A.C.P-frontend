import React, { useEffect, useState } from 'react';
import CartRight from './CartRight/CartRight';
import WrapCart from './WrapCart/WrapCart';
import './Cart.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState();
  const [cartTotalPrice, setCartTotalPrice] = useState();
  const [selectedCatdIds, setSelectedCatdIds] = useState();

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  // useEffect(() => {
  //   fetch('http://10.58.52.132:3000/carts')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data.data[0]);
  //       data.data[0].nutrients[0].name !== null && setCartItems(data);
  //       data.data[0].plants[0].name !== null && setCartItems(data);
  //       data.data[0].pots[0].name !== null && setCartItems(data);
  //       setCartItems(data);

  //       const itemTotalPrice = data.reduce(
  //         (acc, curr) => acc + parseInt(curr.price),
  //         0
  //       );

  //       setCartTotalPrice(itemTotalPrice);
  //     });
  // }, []);

  const handleCheckBtn = cartId => {
    // 배열안에 카트아이디 없으면 넣어주고
    // 있으면 필터처리
    // setSelectedCatdIds()
  };

  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartItems(data);
        const itemTotalPrice = data.reduce(
          (acc, curr) => acc + parseInt(curr.plant_price),
          0
        );
        setCartTotalPrice(itemTotalPrice);
      });
  }, []);

  return (
    <section className={`cart${cartItems ? '' : ' empty'}`}>
      <div className="innerCart">
        <article className="cartLeft">
          <h2 className="titleArticle">장바구니</h2>
          <WrapCart cartItems={cartItems} />
        </article>
        {cartItems && <CartRight cartTotalPrice={cartTotalPrice} />}
      </div>
    </section>
  );
}
