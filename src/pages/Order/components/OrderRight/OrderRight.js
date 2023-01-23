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
  const state = location.state;
  console.log(state);

  // const [preOrderList, setPreOrderList] = useState([]);

  // const { plant_id, plant_name, plant_price } = ;

  // useEffect(() => {
  //   if (localStorage.getItem('id')) {
  //     const getId = localStorage.getItem('id');
  //     setData(JSON.parse(getId));
  //   }

  //   location.state !== null && setPreOrderList([location.state]);
  // }, [location]);

  // const fetchCreateOrder = () => {
  //   fetch(FETCH_ORDER_API, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('accessToken'),
  //     },
  //     body: JSON.stringify({
  //       totalPrice: 20000,
  //       plantId: 1,
  //       plantQuantity: 1,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //     });
  // };

  return (
    <div className="orderRight">
      <div className="orderInfos">
        <OrderPriceInfos data={state} />
        <OrderProductInfos data={state} />
        {/* {preOrderList.map(item => {
          const { plant_name, plant_price } = item;
          const arr = Object.keys(item); // key 이름들만
          // console.log(arr);
          let name = '';
          arr.forEach(element => {
            if (element.includes('name')) {
              name = element;
              return;
            }
          });

          return (
            <OrderProductInfos
              data={state}
              // key={item[name]}
              // plantName={plant_name}
              // plantPrice={plant_price}
            />
          );
        })} */}
      </div>
      <OrderBtn data={state} />
    </div>
  );
}

export default OrderRight;
