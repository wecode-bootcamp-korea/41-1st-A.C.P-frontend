import React from 'react';
import InfoInput from './components/InfoInput';
import OrderRight from '../../components/OrderRight/OrderRight';
import './Order.scss';

const SELECT_DATE = [
  { id: 1, date: '3일 후' },
  { id: 2, date: '4일 후' },
  { id: 3, date: '5일 후' },
  { id: 4, date: '6일 후' },
  { id: 5, date: '7일 후' },
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
      <OrderRight />
    </div>
  );
}
