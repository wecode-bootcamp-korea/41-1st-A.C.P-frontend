import React from 'react';
import { Link } from 'react-router-dom';
import './OrderBtn.scss';

function OrderBtn() {
  return (
    <div className="orderBtn">
      <Link to="/ordered">
        <button>주문하기</button>
      </Link>
    </div>
  );
}

export default OrderBtn;
