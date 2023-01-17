import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrderBtn.scss';

function OrderBtn({ data }) {
  const navigate = useNavigate();
  console.log(data);

  const goToPage = path => {
    navigate(`/${path}`, {
      state: data,
    });
  };

  return (
    <div className="orderBtn">
      <button onClick={() => goToPage('ordered')}>주문하기</button>
    </div>
  );
}

export default OrderBtn;
