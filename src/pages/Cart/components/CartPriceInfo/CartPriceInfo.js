import React from 'react';
import './CartPriceInfo.scss';

export default function CartPriceInfo({ totalPrice }) {
  const shipFee = totalPrice ? 2500 : 0;
  const finalAmount = totalPrice + shipFee;

  return (
    <div className="cartPriceInfo">
      <div className="innerInfo">
        <div className="priceInfoWrap">
          <div className="priceInfoBox">
            <span className="priceInfoItem">
              <span className="title">총 주문금액</span>
              <span className="price">{totalPrice.toLocaleString()}₩</span>
            </span>
            <span className="priceInfoItem">
              <span className="title">배송비</span>
              <span className="price">{shipFee.toLocaleString()}₩</span>
            </span>
          </div>
          <div className="priceInfoBox">
            <span className="priceInfoItem">
              <span className="title">총 결제금액</span>
              <span className="totalPrice">
                {finalAmount.toLocaleString()}₩
              </span>
            </span>
          </div>
          <button type="button" className="btnOrder">
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
