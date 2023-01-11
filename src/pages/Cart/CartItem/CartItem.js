import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import SelectBoxQuantity from '../SelectBoxQuantity/SelectBoxQuantity';
import './CartItem.scss';

export default function CartItem({
  cartItem: {
    cart_id,
    plant_id,
    plant_name,
    plant_description,
    plant_price,
    plant_quantity,
    plant_imgUrl,
  },
  setCartItems,
  selectSingleItem,
}) {
  const cartItemPrice = plant_quantity * parseInt(plant_price);

  const updateCartQuantity = quantity => {
    // fetch('/data/cart.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     plant_id,
    //     plant_quantity: quantity,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     // 성공시 카트아이템 다시 세팅
    //     // setCartItems(data)
    //   });
  };

  const deleteCartItem = () => {
    // fetch('/data/cart.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     plant_id,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     // 성공시 카트아이템 다시 세팅
    //     // setCartItems(data)
    //   });
  };

  return (
    <li className="cartItem">
      <CheckBox cartId={cart_id} selectItem={selectSingleItem} />
      <div className="wrapImg">
        <img src={plant_imgUrl} alt="" className="cartImg" />
      </div>
      <div className="wrapInfo">
        <div className="boxTitle">
          <strong className="title">{plant_name}</strong>
          <p className="description">{plant_description}</p>
        </div>
        <ul className="listSubsidiary">
          <li className="itemSubsidiary">아이템1</li>
          <li className="itemSubsidiary">아이템2</li>
          <li className="itemSubsidiary">아이템3</li>
        </ul>
        <div className="boxPrice">
          <SelectBoxQuantity
            id={cart_id}
            setCartItems={setCartItems}
            updateCartQuantity={updateCartQuantity}
          />
          <span className="priceInfo">
            <span className="titlePrice">주문금액</span>
            <span className="numPrice">₩ {cartItemPrice.toLocaleString()}</span>
          </span>
        </div>
      </div>
      <button type="button" className="btnDelete" onClick={deleteCartItem}>
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button>
    </li>
  );
}
