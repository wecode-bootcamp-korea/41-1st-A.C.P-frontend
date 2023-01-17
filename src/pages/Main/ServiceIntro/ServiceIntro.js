import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceIntro.scss';

export default function ServiceIntro() {
  return (
    <div className="serviceIntro">
      <div className="mainGuideBox">
        <div className="mainGuideContentLeft">
          <p className="mainGuideTitle">나만의 식물 찾기</p>
          <br />
          <p className="mainGuideText">
            Plait 의 식물 추천 가이드로 나에게 어울리는 식물을 찾아보세요.
          </p>
          <p className="mainGuideText">
            이 세상에 단 하나뿐인 식물로 일상에 즐거움을 선사합니다.
          </p>
          <br />
          <Link to="">
            <button className="mainNavigateBtn">나의 커스텀 플랜트 찾기</button>
          </Link>
        </div>
        <div className="recommendationGuideImg">
          <img src="/images/main/recommendation.jpg" alt="mainImage" />
        </div>
      </div>
      <div className="blank" />
      <div className="mainDeliveryGuideBox">
        <div className="deliveryGuideImg">
          <img src="/images/main/delivery.jpg" alt="delivery" />
        </div>
        <div className="mainGuideContentRight">
          <p className="mainGuideTitle">
            고객과 환경을 모두 생각한 배송 서비스
          </p>
          <br />
          <p className="mainGuideText">
            친환경 포장재로 불필요한 소비를 줄였습니다.
          </p>
          <p className="mainGuideText">
            주문 시 고객이 지정한 날짜에 안전하게 배송해드립니다.
          </p>
          <br />
          <Link to="/products">
            <button className="mainNavigateBtn">식물 보러 가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
