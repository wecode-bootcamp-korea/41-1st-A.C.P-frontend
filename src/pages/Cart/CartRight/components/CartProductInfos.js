import React from 'react';
import './CartProductInfos.scss';

function CartProductInfos() {
  return (
    <div className="cartProductInfos">
      <div className="cartProductImg">
        <img src="images/cart/productDetail_img_01.jpg" alt="상품이미지" />
      </div>
      <div className="cartProductMiniInfos">
        <div>
          <p>제품명</p>
          <p>제품 상세 정보</p>
        </div>
        <div>
          <button className="selectBox">
            <span>1</span>
            <div className="selectArrow">
              <img
                src="images/cart/productDetail_bottom_arrow.png"
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
  );
}

export default CartProductInfos;
