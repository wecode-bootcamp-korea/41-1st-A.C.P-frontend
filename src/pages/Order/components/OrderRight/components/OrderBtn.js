import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderBtn.scss';

function OrderBtn({ OrderUserInfoData, date, address }) {
  const navigate = useNavigate();

  const goToPage = path => {
    navigate(`/${path}`, { state: { date, address } });
    OrderUserInfoData();
  };

  return (
    <div className="orderBtn">
      <button onClick={() => goToPage('ordered')}>주문하기</button>
    </div>
  );
}

export default OrderBtn;
