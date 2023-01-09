import React from 'react';
import CartItem from '../CartItem/CartItem';
import '../CartItem/CartItem.scss';

export default function WrapCart({ cartItems }) {
  return (
    <div className="wrapItems">
      {cartItems.length > 0 ? (
        <>
          <div className="checkBox all">
            <input type="checkbox" className="inpChk" id="allCheck" />
            <label className="label">전체선택</label>
          </div>
          <ul className="cartList">
            {cartItems.map(cartItem => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />;
            })}
          </ul>
        </>
      ) : (
        <p className="txtCart">상품이 존재하지 않습니다.</p>
      )}
    </div>
  );
}
