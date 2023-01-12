import React from 'react';
import './OrderProductInfos.scss';

function OrderProductInfos({ data }) {
  return (
    <div className="orderProductInfos">
      <div className="orderProductImg">
        <img src="images/order/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="orderProductMiniInfos">
        <div className="miniInfoDetail">
          <p>{data.plant_name}</p>
        </div>
        <div>
          <p className="price">{data.plant_price}₩</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductInfos;
