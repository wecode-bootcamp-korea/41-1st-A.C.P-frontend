import React from 'react';
import './CartBtn.scss';

function CartBtn({ fetchOrder }) {
  const handleOrderClick = () => {
    fetchOrder();
  };

  return (
    <div className="cartBtn">
      <button className="btn" onClick={handleOrderClick}>
        주문하기
      </button>
    </div>
  );
}

export default CartBtn;
