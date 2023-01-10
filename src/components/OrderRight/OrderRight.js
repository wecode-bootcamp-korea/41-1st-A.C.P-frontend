import React from 'react';
import OrderBtn from './components/OrderBtn';
import OrderPriceInfos from './components/OrderPriceInfos';
import './OrderRight.scss';

function OrderRight({ cartTotalPrice }) {
  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos cartTotalPrice={cartTotalPrice} />
      </div>
      <OrderBtn />
    </div>
  );
}

export default OrderRight;
