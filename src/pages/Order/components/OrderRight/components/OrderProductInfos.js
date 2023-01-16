import React from 'react';
import './OrderProductInfos.scss';

function OrderProductInfos({ plantName, plantPrice }) {
  return (
    <div className="orderProductInfos">
      <div className="orderProductImg">
        <img src="images/order/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="orderProductMiniInfos">
        <div className="miniInfoDetail">
          <p>{plantName}</p>
        </div>
        <div>
          <p className="price">{parseInt(plantPrice).toLocaleString()}₩</p>
          {/* {parseInt(plant_price).toLocaleString()}₩ */}
        </div>
      </div>
    </div>
  );
}

export default OrderProductInfos;
