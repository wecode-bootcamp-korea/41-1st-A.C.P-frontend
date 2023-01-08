import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoInput from './components/InfoInput';
import './Order.scss';

const SELECT_DATE = [
  { id: 1, date: '1일 후' },
  { id: 2, date: '2일 후' },
  { id: 3, date: '3일 후' },
  { id: 4, date: '4일 후' },
  { id: 5, date: '5일 후' },
];

const INFOINPUT_LABEL_VALUE = [
  { id: 1, value: '수령인 성함' },
  { id: 2, value: '수령인 전화번호' },
  { id: 3, value: '우편번호' },
  { id: 4, value: '주소' },
  { id: 5, value: '상세주소' },
];

export default function Order() {
  return (
    <div className="order">
      <div className="orderLeft">
        <div className="ordererInfos">
          <h2>주문자 정보</h2>
          <div className="infoInputs">
            <InfoInput label="주문자 성함" />
            <InfoInput label="주문자 전화번호" />
          </div>
        </div>
        <div className="destinationInfos">
          <h2>배송지 정보</h2>
          <div className="infoInputs">
            {INFOINPUT_LABEL_VALUE.map(data => {
              return <InfoInput key={data.id} label={data.value} />;
            })}
          </div>
          <ul>
            <li className="desiredWant">
              <span>수령희망일</span>
              <button className="dateSelectBox">날짜 선택</button>
              <div className="selectArrow">
                <img
                  src="images/order/productDetail_bottom_arrow.png"
                  alt="선택리스트 창 열기 버튼"
                />
              </div>
              <ul className="selectDate">
                {SELECT_DATE.map(data => {
                  return (
                    <li key={data.id}>
                      <button>{data.date}</button>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <span>배송메세지</span>
              <textarea placeholder="부재 시, 문 앞에 두고 가주세요." />
            </li>
          </ul>
        </div>
      </div>

      <div className="orderRight">
        <div className="orderInfosFixed">
          <div className="orderPriceInfos">
            <div>
              <span>총 주문금액</span>
              <span>90,000₩</span>
            </div>
            <div className="deliveryCost">
              <span>배송비</span>
              <span>2,500₩</span>
            </div>
            <div>
              <span>총 결제금액</span>
              <span>92,500₩</span>
            </div>
          </div>
          <div className="orderProductInfos">
            <div className="orderProductImg">
              <img
                src="images/order/productDetail_img_01.jpg"
                alt="상품이미지"
              />
            </div>
            <div className="orderProductMiniInfos">
              <div>
                <p>제품명</p>
                <p>제품 상세 정보</p>
              </div>
              <div>
                <button className="selectBox">
                  <span>1</span>
                  <div className="selectArrow">
                    <img
                      src="images/order/productDetail_bottom_arrow.png"
                      alt="선택리스트 창 열기 버튼"
                    />
                  </div>
                </button>
                <ul>
                  <li>
                    <button>1</button>
                  </li>
                  <li>
                    <button>2</button>
                  </li>
                  <li>
                    <button>3</button>
                  </li>
                  <li>
                    <button>4</button>
                  </li>
                  <li>
                    <button>5</button>
                  </li>
                </ul>
                <p>90,000₩</p>
              </div>
            </div>
          </div>
        </div>
        <div className="orderBtn">
          <Link to="/ordered">
            <button className="orderBtn">주문하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
