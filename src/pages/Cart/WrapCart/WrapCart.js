import React from 'react';
import CartItem from '../CartItem/CartItem';
import CheckBox from '../CheckBox copy/CheckBox';
import './WrapCart.scss';

export default function WrapCart({
  cartItems,
  selectAllItems,
  selectSingleItem,
  selectedCartIds,
}) {
  const allCartIdsLength = () => {
    return cartItems.map(item => item.cart_id).length;
  };

  return (
    <div className="wrapCart">
      {cartItems ? (
        <>
          <CheckBox
            id="allCheck"
            className="all"
            label="전체선택"
            selectItem={selectAllItems}
            isAllChecked={allCartIdsLength() === selectedCartIds.length}
          />
          <ul className="cartList">
            {cartItems &&
              cartItems.map(cartItem => {
                return (
                  <CartItem
                    key={cartItem.cart_id}
                    cartItem={cartItem}
                    selectedCartIds={selectedCartIds}
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
