import React from 'react';
import { Link } from 'react-router-dom';

import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productDetailTop">
        <div className="productDetailImage">
          <img src="images/productDetail/productDetail_img_01.jpg" />
        </div>
        <div className="productDetailInfos">
          <h1>Product Name</h1>
          <p>one line description</p>
          <ul>
            <li>
              <span>종류</span>
              <p>천남성과 (Araceae)</p>
            </li>
            <li>
              <span>크기</span>
              <p>20 - 40cm</p>
            </li>
            <li>
              <span>위치</span>
              <p>Houseplant</p>
            </li>
            <li>
              <span>분위기</span>
              <p>adorable</p>
            </li>
          </ul>
          <ul className="plantingInfos">
            <li className="difficulty">
              <span>난이도</span>
              <span className="difficultyDot difficultyDotFill"></span>
              <span className="difficultyDot difficultyDotFill"></span>
              <span className="difficultyDot difficultyDotEmpty"></span>
              <span className="difficultyDot difficultyDotEmpty"></span>
              <span className="difficultyDot difficultyDotEmpty"></span>
            </li>
            <li className="plantingCare">
              <span>케어</span>
              <p>겉흙이 마르면 물을 흠뻑주세요</p>
            </li>
          </ul>
          <div className="productDetailBtns">
            <Link to="/order" className="linkToOrder">
              <button className="payBtn">구매하기 &nbsp;90,000₩ </button>
            </Link>
            <button className="cartBtn">장바구니</button>
          </div>
        </div>
      </div>
      <div className="productDetailBottom">
        <div className="onlyOnePlant">
          <p>하늘 아래 같은 식물은 없다</p>
          <p>각 식물의 고유한 수형을 담아 한 식물은 하나만 판매해요</p>
        </div>
        <span></span>
        <div className="ecoPackaging">
          <p>신문지 포장으로 환경과 친하게</p>
          <p>신문지와 종이테이프만을 사용하여 정성스럽게 포장해드립니다</p>
        </div>
      </div>
    </div>
  );
}
// 구매하기 버튼 누르면 결제페이지
// 장바구니 버튼 누르면 장바구니 팝업

export default ProductDetail;
