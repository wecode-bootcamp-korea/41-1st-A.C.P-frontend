import React from 'react';
import { Link } from 'react-router-dom';
import './CartBtn.scss';

function CartBtn() {
  return (
    <div className="cartBtn">
      <Link to="/ordered">
        <button className="btn">주문하기</button>
      </Link>
    </div>
  );
}

export default CartBtn;
