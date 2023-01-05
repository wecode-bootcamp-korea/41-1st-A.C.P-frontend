import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoInput from './components/InfoInput';
import './Order.scss';

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
            <InfoInput label="수령인 성함" />
            <InfoInput label="수령인 전화번호" />
            <InfoInput label="우편번호" />
            <InfoInput label="주소" />
            <InfoInput label="상세주소" />
          </div>
          <ul>
            <li className="desiredWant">
              <span>수령희망일</span>
              <button className="dateSelectBox">날짜 선택</button>
              <div className="selectArrow">
                <img src="images/productDetail/productDetail_bottom_arrow.png" />
              </div>
              <ul className="selectDate">
                <li>
                  <button>1일 후</button>
                </li>
                <li>
                  <button>2일 후</button>
                </li>
                <li>
                  <button>3일 후</button>
                </li>
                <li>
                  <button>4일 후</button>
                </li>
                <li>
                  <button>5일 후</button>
                </li>
              </ul>
            </li>
            <li>
              <span>배송메세지</span>
              <textarea placeholder="부재 시, 문 앞에 두고 가주세요."></textarea>
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
              <img src="images/productDetail/productDetail_img_01.jpg" />
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
                    <img src="images/productDetail/productDetail_bottom_arrow.png" />
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
