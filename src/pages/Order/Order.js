import React, { useState } from 'react';
import InfoInput from './components/InfoInput';
import OrderRight from './components/OrderRight/OrderRight';
import './Order.scss';
import { FETCH_ORDER_API } from '../../config';

export default function Order() {
  const [dateBox, setDateBox] = useState(false);
  const [date, setDate] = useState('날짜 선택');

  const showDateBox = e => {
    setDateBox(!dateBox);
  };

  const OrderUserInfoData = () => {
    fetch(FETCH_ORDER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: {
        name: 'productName',
        quantity: 1,
        address: 'address',
        id: 'orderNumber',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

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
              // map으로 돌려지고 있는 inputvalue 값은 대체 어떻게 가져옴...?
              // 주소 라벨인 inputvalue 값을 가져와야 하는데
              // 그 이유는 fetch로 POST로 백엔드한테 address를 보내줘야 해서!
            })}
          </div>
          <ul>
            <li className="desiredWant" onClick={showDateBox}>
              <span>수령희망일</span>
              <button className="dateSelectBox">{date}</button>
              <div className="selectArrow">
                <img
                  src="/images/order/productDetail_bottom_arrow.png"
                  alt="선택리스트 창 열기 버튼"
                />
              </div>
              <ul className={`selectDate${dateBox ? ' show' : ''}`}>
                {SELECT_DATE.map(data => {
                  return (
                    <li key={data.id}>
                      <button
                        onClick={() => {
                          setDate(data.date);
                        }}
                      >
                        {data.date}
                      </button>
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
      <OrderRight OrderUserInfoData={OrderUserInfoData} date={date} />
    </div>
  );
}

const SELECT_DATE = [
  { id: 1, date: '날짜 선택' },
  { id: 2, date: '주문일로부터 2일 후' },
  { id: 3, date: '주문일로부터 3일 후' },
  { id: 4, date: '주문일로부터 4일 후' },
  { id: 5, date: '주문일로부터 5일 후' },
  { id: 6, date: '주문일로부터 6일 후' },
];

const INFOINPUT_LABEL_VALUE = [
  { id: 1, value: '수령인 성함' },
  { id: 2, value: '수령인 전화번호' },
  { id: 3, value: '우편번호' },
  { id: 4, value: '주소' },
  { id: 5, value: '상세주소' },
];
