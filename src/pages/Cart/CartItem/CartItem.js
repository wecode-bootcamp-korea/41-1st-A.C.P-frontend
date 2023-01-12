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
  setDefaultTotalPrice,
}) {
  const { cart_id, data } = cartItem;

  const updateCartQuantity = quantity => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      // plant_id,
      plant_quantity: quantity,
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

  // 상품 정보 확인
  const productName = nutrients[0]?.name || plants[0]?.name || pots[0]?.name;
  const productDescription =
    nutrients[0]?.description || plants[0]?.description || pots[0]?.description;
  const productId =
    nutrients[0]?.nutrients_id || plants[0]?.plant_id || pots[0]?.pots_id;
  const productQuantity =
    nutrients[0]?.nutrient_quantity ||
    plants[0]?.plant_quantity ||
    pots[0]?.pot_quantity;
  const productPrice =
    nutrients[0]?.price || plants[0]?.price || pots[0]?.price;

  const totalProductPrice = productQuantity * parseInt(productPrice);

  return (
    <li className="cartItem">
      <CheckBox
        id={cart_id}
        selectItem={selectSingleItem}
        selectedCartIds={selectedCartIds}
        productQuantity={productQuantity}
        productPrice={productPrice}
        calcProductPrice={calcProductPrice}
      />
      <div className="wrapImg">
        <img src="" alt="" className="cartImg" />
      </div>
      <div className="wrapInfo">
        <div className="boxTitle">
          <strong className="title">{productName}</strong>
          <p className="description">{productDescription}</p>
        </div>
        <div className="boxPrice">
          <SelectBoxQuantity
            cartId={cart_id}
            productId={productId}
            cartItems={cartItems}
            productQuantity={productQuantity}
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
      {/* <button type="button" className="btnDelete" onClick={deleteCartItem}>
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button> */}
    </li>
  );
}
