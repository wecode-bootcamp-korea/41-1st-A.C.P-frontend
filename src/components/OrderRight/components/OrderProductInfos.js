import React, { useState } from 'react';
import './OrderProductInfos.scss';

const QUANTITY = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
  { id: 3, quantity: 3 },
  { id: 4, quantity: 4 },
  { id: 5, quantity: 5 },
];

function OrderProductInfos() {
  const [quantityBox, setQuantityBox] = useState(false);
  const [quantity, setQuantity] = useState('1');

  const showQuantityBox = e => {
    setQuantityBox(!quantityBox);
  };

  return (
    <div className="orderProductInfos">
      <div className="orderProductImg">
        <img src="images/order/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="orderProductMiniInfos">
        <div>
          <p>제품명</p>
          <p>제품 상세 정보</p>
        </div>
        <div>
          <button className="selectBox" onClick={showQuantityBox}>
            <span>{quantity}</span>
            <div className="selectArrow">
              <img
                src="images/order/productDetail_bottom_arrow.png"
                alt="선택리스트 창 열기 버튼"
              />
            </div>
          </button>
          <ul className={`${quantityBox ? 'show' : ''}`}>
            {QUANTITY.map(data => {
              return (
                <li key={data.id}>
                  <button
                    onClick={e => {
                      return setQuantity(data.quantity);
                    }}
                  >
                    {data.quantity}
                  </button>
                </li>
              );
            })}
          </ul>
          <p>90,000₩</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductInfos;
