import React from 'react';
import './OrderProductInfos.scss';

function OrderProductInfos() {
  return (
    <div className="orderProductInfos">
      <div className="orderProductImg">
        <img src="images/order/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="orderProductMiniInfos">
        <div className="miniInfoDetail">
          <p>제품명</p>
          <p>제품 상세 정보</p>
        </div>
        <div>
          <p className="price">90,000₩</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductInfos;