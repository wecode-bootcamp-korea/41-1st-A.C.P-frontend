import React from 'react';
import './OrderProductInfos.scss';

function OrderProductInfos({ data }) {
  const { plant_name, plant_price, plant_description } = data;

  return (
    <div className="orderProductInfos">
      <div className="orderProductImg">
        <img src="/images/order/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="orderProductMiniInfos">
        <div className="miniInfoDetail">
          <p className="miniInfoDetailName">{plant_name}</p>
          <p className="miniInfoDetailInfo">{plant_description}</p>
        </div>
        <div>
          <p className="price">{parseInt(plant_price).toLocaleString()}₩</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductInfos;
