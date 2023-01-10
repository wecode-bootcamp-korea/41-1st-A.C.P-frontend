import React, { useState } from 'react';
import './SelectBoxQuantity.scss';

function SelectBoxQuantity({ updateCartQuantity }) {
  const [quantityBox, setQuantityBox] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const showQuantityBox = e => {
    setQuantityBox(!quantityBox);
  };

  const handleSelectClick = e => {
    const quantity = e.target.value;
    setSelectedQuantity(quantity);
    updateCartQuantity(quantity);
    setQuantityBox(false);
  };

  return (
    <div className="selectBoxQuantity">
      <button className="selectBox" onClick={showQuantityBox}>
        {selectedQuantity}
      </button>
      <div className="selectArrow">
        <img
          src="images/cart/productDetail_bottom_arrow.png"
          alt="선택리스트 창 열기 버튼"
          className="imgIcon"
        />
      </div>
      <ul className={`${quantityBox ? 'listSelect show' : 'listSelect'}`}>
        {QUANTITY.map(data => {
          return (
            <li key={data.id} className="itemSelect">
              <button
                type="button"
                className="btnSelect"
                onClick={handleSelectClick}
                value={data.quantity}
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

export default SelectBoxQuantity;

const QUANTITY = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
  { id: 3, quantity: 3 },
  { id: 4, quantity: 4 },
  { id: 5, quantity: 5 },
];
