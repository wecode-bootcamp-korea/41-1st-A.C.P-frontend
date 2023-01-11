import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { fetchCart } from '../config';
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
  selectedCartIds,
}) {
  const updateCartQuantity = quantity => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      plant_id,
      plant_quantity: quantity,
    };

    fetchCart(fetchUrl, 'POST', fetchData)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // 성공시 카트아이템 다시 세팅
        // setCartItems(data)
      });
  };

  const deleteCartItem = () => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      plant_id,
    };

    fetchCart(fetchUrl, 'POST', fetchData)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // 성공시 카트아이템 다시 세팅
        // setCartItems(data)
      });
  };

  const productPrice = plant_quantity * parseInt(plant_price);

  return (
    <li className="cartItem">
      <CheckBox
        id={cart_id}
        selectItem={selectSingleItem}
        selectedCartIds={selectedCartIds}
      />
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
            <span className="numPrice">₩ {productPrice.toLocaleString()}</span>
          </span>
        </div>
      </div>
      <button type="button" className="btnDelete" onClick={deleteCartItem}>
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button>
    </li>
  );
}
