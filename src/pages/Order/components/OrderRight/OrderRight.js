import React from 'react';
import OrderProductInfos from './components/OrderProductInfos';
import OrderBtn from './components/OrderBtn';
import OrderPriceInfos from './components/OrderPriceInfos';
import './OrderRight.scss';

function OrderRight() {
  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos />
        <OrderProductInfos />
      </div>
      <OrderBtn />
    </div>
  );
}

export default OrderRight;
