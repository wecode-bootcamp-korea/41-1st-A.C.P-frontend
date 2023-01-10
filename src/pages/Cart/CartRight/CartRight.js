import React from 'react';
import CartBtn from './components/CartBtn';
import CartPriceInfos from './components/CartPriceInfos';
import './CartRight.scss';

function CartRight({ cartTotalPrice }) {
  return (
    <div className="cartRight">
      <div className="cartInfos">
        <CartPriceInfos cartTotalPrice={cartTotalPrice} />
      </div>
      <CartBtn />
    </div>
  );
}

export default CartRight;
