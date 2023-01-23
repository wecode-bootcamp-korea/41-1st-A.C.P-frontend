import React from 'react';
import OrderProductInfos from './components/OrderProductInfos';
import OrderBtn from './components/OrderBtn';
import OrderPriceInfos from './components/OrderPriceInfos';
import './OrderRight.scss';
import { useLocation } from 'react-router-dom';

function OrderRight({ OrderUserInfoData, date }) {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos data={state} />
        <OrderProductInfos data={state} />
      </div>
      <OrderBtn
        data={state}
        OrderUserInfoData={OrderUserInfoData}
        date={date}
      />
    </div>
  );
}

export default OrderRight;
