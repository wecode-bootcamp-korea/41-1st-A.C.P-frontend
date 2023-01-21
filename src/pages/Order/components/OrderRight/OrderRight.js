import React, { useState } from 'react';
import { useEffect } from 'react';
import OrderProductInfos from './components/OrderProductInfos';
import OrderBtn from './components/OrderBtn';
import OrderPriceInfos from './components/OrderPriceInfos';
import './OrderRight.scss';
import { useLocation } from 'react-router-dom';
import { FETCH_ORDER_API } from '../../../../config';

function OrderRight() {
  const [data, setData] = useState('');
  const location = useLocation();
  const [preOrderList, setPreOrderList] = useState([]);

  // const { plant_id, plant_name, plant_price } = ;

  useEffect(() => {
    if (localStorage.getItem('id')) {
      const getId = localStorage.getItem('id');
      setData(JSON.parse(getId));
      console.log(data);
    }

    location.state !== null && setPreOrderList([location.state]);
  }, [location]);

  console.log('OrderRight -> preOrderList', preOrderList);

  // console.log('1회성데이터 이름 가격 확인 ->', plant_name, plant_price);

  const fetchCreateOrder = () => {
    fetch(FETCH_ORDER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        totalPrice: 20000,
        plantId: 1,
        plantQuantity: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos />
        {preOrderList.length > 0 &&
          preOrderList.map(item => {
            const { plant_name, plant_price } = item;
            const arr = Object.keys(item);
            let name = '';
            arr.forEach(element => {
              if (element.includes('name')) {
                name = element;
                return;
              }
            });

            return (
              <OrderProductInfos
                key={item[name]}
                plantName={plant_name}
                plantPrice={plant_price}
              />
            );
          })}
      </div>
      <OrderBtn data={location.state} />
    </div>
  );
}

export default OrderRight;
