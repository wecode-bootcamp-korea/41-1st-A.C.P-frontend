import React from 'react';
import './OrderPriceInfos.scss';

function OrderPriceInfos({ cartTotalPrice }) {
  const shipFee = 2500;

  return (
    <div className="orderPriceInfos">
      <div>
        <span>총 주문금액</span>
        <span>{cartTotalPrice && cartTotalPrice.toLocaleString()}₩</span>
      </div>
      <div className="deliveryCost">
        <span>배송비</span>
        <span>{shipFee.toLocaleString()}₩</span>
      </div>
      <div>
        <span>총 결제금액</span>
        <span>
          {cartTotalPrice && (cartTotalPrice + shipFee).toLocaleString()}₩
        </span>
      </div>
    </div>
  );
}

export default OrderPriceInfos;
