import React from 'react';
import './CartPriceInfos.scss';

function CartPriceInfos({ cartTotalPrice }) {
  const shipFee = 2500;

  return (
    <div className="cartPriceInfos">
      <div className="wrapPriceInfo">
        <span>총 주문금액</span>
        <span>{cartTotalPrice && cartTotalPrice.toLocaleString()}₩</span>
      </div>
      <div className="deliveryCost">
        <span>배송비</span>
        <span>{shipFee.toLocaleString()}₩</span>
      </div>
      <div className="totalPriceInfo">
        <span>총 결제금액</span>
        <span className="numTotalPrice">
          {cartTotalPrice && (cartTotalPrice + shipFee).toLocaleString()}₩
        </span>
      </div>
    </div>
  );
}

export default CartPriceInfos;
