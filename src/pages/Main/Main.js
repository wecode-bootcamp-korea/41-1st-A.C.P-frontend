import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewProducts from './NewProducts';
import './Main.scss';

export default function Main() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch('/data/newProducts.json')
      .then(response => response.json())
      .then(result => setNewProducts(result));
  });

  return (
    <Fragment className="main">
      <div className="logoBar">
        <Link to="/">
          <img src="images/common/img_logo_b.png" alt="plait_logo" />
        </Link>
      </div>
      <div className="mainWrapper">
        <div className="mainImg">
          <img src="images/main/main2.jpg" alt="mainImage" />
        </div>
        <div className="blank" />
        <div className="newProductsTitle">New Plants for You</div>
        <div className="newProductsWrapper">
          {newProducts.map(newProductsInfo => {
            const {
              id,
              productName,
              productPrice,
              productImg,
              imgAlt,
              productPage,
            } = newProductsInfo;
            return (
              <NewProducts
                key={id}
                productName={productName}
                productPrice={productPrice}
                productImg={productImg}
                imgAlt={imgAlt}
                productPage={productPage}
              />
            );
          })}
        </div>
        <div className="blank" />
        <div className="mainGuideBox">
          <div className="mainGuideContentLeft">
            <p className="mainGuideTitle">나만의 식물 가이드</p>
            <br />
            <p className="mainGuideText">
              Plait 의 식물 가이드로 나에게 맞는 기욤댕이 식물을 찾아보세요
            </p>
            <p className="mainGuideText">
              내 방 분위기 라이프 스타일 맞춤형 플랜트 커스텀 플랜트 식물 칭구
              안녕!
            </p>
            <br />
            <Link to="#">
              <button className="mainNavigateBtn">
                나의 커스텀 플랜트 찾기
              </button>
            </Link>
          </div>
          <div className="recommendationGuideImg">
            <img src="images/main/recommendation.jpg" alt="mainImage" />
          </div>
        </div>
        <div className="blank" />
        <div className="mainDeliveryGuideBox">
          <div className="deliveryGuideImg">
            <img src="images/main/delivery.jpg" alt="delivery" />
          </div>
          <div className="mainGuideContentRight">
            <p className="mainGuideTitle">
              고객과 환경을 모두 생각한 배송 서비스
            </p>
            <br />
            <p className="mainGuideText">
              친환경 포장재와 원하는 날짜에 안전하게 배송
            </p>
            <p className="mainGuideText">배송서비스로 특별한 경험을 선물</p>
            <br />
            <Link to="/products">
              <button className="mainNavigateBtn">식물 보러 가기</button>
            </Link>
          </div>
        </div>
        <div className="blank" />
        <div className="slideWrapper">
          <div className="slideBox">
            <div className="subscriptionBox">
              <img src="images/main/pot.jpg" alt="pot subscription" />
            </div>
            <div className="nutrientsBox">
              <img src="images/main/leaf.jpg" alt="nutrients subscription" />
            </div>
            <div className="subscriptionBox">
              <img
                src="images/main/recommendation.jpg"
                alt="pot subscription"
              />
            </div>
            <div className="nutrientsBox">
              <img
                src="images/main/delivery.jpg"
                alt="nutrients subscription"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
