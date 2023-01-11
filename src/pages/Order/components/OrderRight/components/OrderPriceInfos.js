import React from 'react';
import './OrderPriceInfos.scss';

function OrderPriceInfos() {
  return (
    <div className="orderPriceInfos">
      <div>
        <span>총 주문금액</span>
        <span>90,000₩</span>
      </div>
      <div className="deliveryCost">
        <span>배송비</span>
        <span>2,500₩</span>
      </div>
      <div>
        <span>총 결제금액</span>
        <span>92,500₩</span>
      </div>
    </div>
  );
}

export default OrderPriceInfos;
