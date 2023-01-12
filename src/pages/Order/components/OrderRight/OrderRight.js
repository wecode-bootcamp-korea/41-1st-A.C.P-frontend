import React, { useState } from 'react';
import { useEffect } from 'react';
import OrderProductInfos from './components/OrderProductInfos';
import OrderBtn from './components/OrderBtn';
import OrderPriceInfos from './components/OrderPriceInfos';
import './OrderRight.scss';
import { useLocation } from 'react-router-dom';

function OrderRight() {
  const [data, setData] = useState('');
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (localStorage.getItem('id')) {
      const getId = localStorage.getItem('id');
      setData(JSON.parse(getId));
      console.log(data);
    }
  }, []);

  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos />
        <OrderProductInfos data={location.state} />
      </div>
      <OrderBtn />
    </div>
  );
}

export default OrderRight;
