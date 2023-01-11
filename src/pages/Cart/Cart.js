import React, { useEffect, useState } from 'react';
import CartRight from './CartRight/CartRight';
import WrapCart from './WrapCart/WrapCart';
import './Cart.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState();
  const [cartTotalPrice, setCartTotalPrice] = useState();
  const [selectedCartIds, setSelectedCartIds] = useState([]);

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

  const selectAllItems = e => {
    const isChecked = e.target.checked;
    const allCartIds = cartItems.map(item => item.cart_id);
    setSelectedCartIds(isChecked ? allCartIds : []);
  };

  const selectSingleItem = (e, cartId) => {
    console.log(cartId);
    const hasCartId = selectedCartIds.includes(cartId);

    if (hasCartId) {
      const filteredList = selectedCartIds.filter(
        selectedId => selectedId !== cartId
      );
      setSelectedCartIds(filteredList);
    } else {
      setSelectedCartIds([...selectedCartIds, cartId]);
    }
  };

  console.log(selectedCartIds);

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
          <WrapCart
            cartItems={cartItems}
            selectAllItems={selectAllItems}
            selectSingleItem={selectSingleItem}
          />
        </article>
        {cartItems && <CartRight cartTotalPrice={cartTotalPrice} />}
      </div>
    </section>
  );
}
