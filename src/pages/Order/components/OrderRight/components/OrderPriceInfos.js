import React, { useState } from 'react';
import { useEffect } from 'react';
import './OrderPriceInfos.scss';

function OrderPriceInfos() {
  const price = '90,000';
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(
      `${(Number(price.split(',').join('')) + 2500).toLocaleString()}`
    );
  });

  return (
    <div className="orderPriceInfos">
      <div>
        <span>총 주문금액</span>
        <span>{price}₩</span>
      </div>
      <div className="deliveryCost">
        <span>배송비</span>
        <span>2,500₩</span>
      </div>
      <div className="point">
        <span>포인트</span>
        <span>100,000 point</span>
      </div>
      <div className="totalPrice">
        <span>총 결제금액</span>
        <span>{totalPrice}₩</span>
      </div>
      <div className="restPoint">
        <span>잔여포인트</span>
        <span>7,500 point</span>
      </div>
    </div>
  );
}

export default OrderPriceInfos;
