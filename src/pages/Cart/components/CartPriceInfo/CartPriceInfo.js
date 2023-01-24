import React from 'react';
import { Navigate } from 'react-router-dom';
import { FETCH_ORDER_API } from '../../../../config';
import { fetchApi } from '../../config';
import './CartPriceInfo.scss';

export default function CartPriceInfo({ totalPrice, selectedItems }) {
  const shipFee = totalPrice ? 2500 : 0;
  const finalAmount = totalPrice + shipFee;

  const createOrder = async (e, finalAmount) => {
    // 장바구니 -> 주문하기 임시로 Localstorage 사용
    // 버튼 누르면 Localstorage set 실행
    console.log(selectedItems);
  };

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
          <button
            type="button"
            className="btnOrder"
            onClick={e => createOrder(e, finalAmount)}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
