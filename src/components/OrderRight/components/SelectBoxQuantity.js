import React, { useState } from 'react';
import './SelectBoxQuantity.scss';

function SelectBoxQuantity() {
  const [quantityBox, setQuantityBox] = useState(false);
  const [quantity, setQuantity] = useState('1');

  const showQuantityBox = e => {
    setQuantityBox(!quantityBox);
  };

  return (
    <div className="selectBoxQuantity">
      <button className="selectBox">{quantity}</button>
      <div className="selectArrow" onClick={showQuantityBox}>
        <img
          src="images/order/productDetail_bottom_arrow.png"
          alt="선택리스트 창 열기 버튼"
        />
      </div>
      <ul className={`${quantityBox ? 'show' : ''}`}>
        {QUANTITY.map(data => {
          return (
            <li key={data.id}>
              <button
                onClick={e => {
                  setQuantity(data.quantity);
                  setQuantityBox(false);
                }}
              >
                {data.quantity}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const QUANTITY = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
  { id: 3, quantity: 3 },
  { id: 4, quantity: 4 },
  { id: 5, quantity: 5 },
];

export default SelectBoxQuantity;
