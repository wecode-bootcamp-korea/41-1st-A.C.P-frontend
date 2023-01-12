import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { fetchCart } from '../config';
import SelectBoxQuantity from '../SelectBoxQuantity/SelectBoxQuantity';
import './CartItem.scss';

export default function CartItem({
  cartItem,
  cartItems,
  setCartItems,
  selectSingleItem,
  selectedCartIds,
  calcProductPrice,
}) {
  const { cart_id, data } = cartItem;
  const { name, description, id, quantity, price } = data;

  // console.log('cartItem', cartItem);

  const updateCartQuantity = quantity => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      // plant_id,
      // plant_quantity: quantity,
    };

    fetchCart(fetchUrl, 'POST', fetchData)
      .then(res => res.json())
      .then(data => {
        // if (data.message === 'success') {
        //   setCartItems;
        // }
        // 성공시 카트아이템 다시 세팅
        // setCartItems(data)
      });
  };

  // const deleteCartItem = () => {
  //   const fetchUrl = 'http://10.58.52.160:3000/carts';
  //   const fetchData = {
  //     plant_id,
  //   };

  //   fetchCart(fetchUrl, 'POST', fetchData)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       // 성공시 카트아이템 다시 세팅
  //       // setCartItems(data)
  //     });
  // };

  const deleteCartItem = () => {};
  // const updateCartQuantity = () => {};

  const totalProductPrice = quantity * parseInt(price);

  return (
    <li className="cartItem">
      <CheckBox
        id={cart_id}
        selectItem={selectSingleItem}
        selectedCartIds={selectedCartIds}
        quantity={quantity}
        price={price}
        calcProductPrice={calcProductPrice}
      />
      <div className="wrapImg">
        <img src="" alt="" className="cartImg" />
      </div>
      <div className="wrapInfo">
        <div className="boxTitle">
          <strong>{name}</strong>
          <p className="description">{description}</p>
        </div>
        <div className="boxPrice">
          <SelectBoxQuantity
            cartId={cart_id}
            id={id}
            cartItems={cartItems}
            quantity={quantity}
            setCartItems={setCartItems}
            // updateCartQuantity={updateCartQuantity}
          />
          <span className="priceInfo">
            <span className="titlePrice">주문금액</span>
            <span className="numPrice">
              ₩ {totalProductPrice.toLocaleString()}
            </span>
          </span>
        </div>
      </div>
      <button type="button" className="btnDelete">
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button>
    </li>
  );
}
