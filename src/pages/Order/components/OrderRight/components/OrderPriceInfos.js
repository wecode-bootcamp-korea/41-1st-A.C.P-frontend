import React, { useState } from 'react';
import { useEffect } from 'react';
import './OrderPriceInfos.scss';

function OrderPriceInfos({ data }) {
  const { plant_price } = data;
  const price = parseInt(plant_price).toLocaleString();
  const initialPoint = Number(100000).toLocaleString(); // 추후 백엔드에서 포인트데이터 줘야 함
  const deliveryCost = Number(2500).toLocaleString();

  const [totalPrice, setTotalPrice] = useState(plant_price);
  const [point, setPoint] = useState(Number(100000));

  useEffect(() => {
    setTotalPrice((parseInt(plant_price) + 2500).toLocaleString());
    setPoint((point - Number(plant_price) - 2500).toLocaleString());
  }, []);

  return (
    <div className="orderPriceInfos">
      <div>
        <span>총 주문금액</span>
        <span>{price}₩</span>
      </div>
      <div className="deliveryCost">
        <span>배송비</span>
        <span>{deliveryCost}₩</span>
      </div>
      <div className="point">
        <span>포인트</span>
        <span>{initialPoint + ' point'}</span>
      </div>
      <div className="totalPrice">
        <span>총 결제금액</span>
        <span>{totalPrice}₩</span>
      </div>
      <div className="restPoint">
        <span>잔여포인트</span>
        <span>{point + ' point'}</span>
      </div>
    </div>
  );
}

export default OrderPriceInfos;
