import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import CheckBox from '../CheckBox/CheckBox';
import './WrapCart.scss';

export default function WrapCart({
  cartItems,
  selectAllItems,
  selectSingleItem,
}) {
  // const [selectedItems, setSelectedItems] = useState([]);

  // const selectAllItems = () => {
  //   const cartItemsIds = cartItems.map(item => item.id);
  //   setSelectedItems(cartItemsIds);
  // };

  // const selectSingleItem = e => {
  //   const { id, checked } = e.target;
  //   if (!checked) {
  //     setSelectedItems(prev => [...prev, parseInt(id)]);
  //   } else {
  //     let filteredList = selectedItems.filter(
  //       selectedItemId => selectedItemId !== id
  //     );
  //     setSelectedItems(filteredList);
  //   }
  // };

  return (
    <div className="wrapCart">
      {cartItems ? (
        <>
          <CheckBox
            id="allCheck"
            className="all"
            label="전체선택"
            selectItem={selectAllItems}
          />
          <ul className="cartList">
            {cartItems.map(cartItem => {
              return (
                <CartItem
                  key={cartItem.cart_id}
                  cartItem={cartItem}
                  selectSingleItem={selectSingleItem}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p className="txtCart">상품이 존재하지 않습니다.</p>
      )}
    </div>
  );
}
