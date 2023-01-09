import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './components/Modal';
import ProductInfo from './components/ProductInfo';
import './ProductDetail.scss';

function ProductDetail() {
  const navigate = useNavigate();

  // const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [productInfo, setProductInfo] = useState([]);

  // const handleModal1 = e => {
  //   setModal1(true);
  // };

  const handleModal2 = e => {
    setModal2(true);
  };

  const goToPage = path => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    fetch('data/productInfo.json')
      .then(res => res.json())
      .then(data => setProductInfo(data));
  }, []);

  // BE와 통신세팅
  // const fetchProductInfos = e => {
  //   e.preventDefault();

  //   fetch('http://10.58.52.67:3000/plants/1', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       plant_id: 1,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     }, []);
  // };

  return (
    <div className="productDetail">
      <div className="productDetailTop">
        <div className="productDetailImage">
          <img
            src="images/productDetail/productDetail_img_01.jpg"
            alt="상품이미지"
          />
        </div>
        <div className="productDetailInfos">
          <h1>Product Name</h1>
          <p>one line description</p>
          <ul>
            {productInfo.map(productInfoDetail => {
              return (
                <ProductInfo
                  key={productInfoDetail.id}
                  productInfoDetail={productInfoDetail}
                />
              );
            })}
          </ul>
          <ul className="plantingInfos">
            <li className="difficulty">
              <span>난이도</span>
              <span className="difficultyDot difficultyDotFill" />
              <span className="difficultyDot difficultyDotFill" />
              <span className="difficultyDot difficultyDotEmpty" />
              <span className="difficultyDot difficultyDotEmpty" />
              <span className="difficultyDot difficultyDotEmpty" />
            </li>
            <li className="plantingCare">
              <span>케어</span>
              <p>겉흙이 마르면 물을 흠뻑주세요</p>
            </li>
          </ul>
          <div className="productDetailBtns">
            <button
              className="payBtn"
              onClick={() => {
                goToPage('order');
              }}
            >
              구매하기 &nbsp;90,000₩
            </button>
            <button className="cartBtn" onClick={handleModal2}>
              장바구니
            </button>
          </div>
        </div>
      </div>
      <div className="productDetailBottom">
        <div className="onlyOnePlant">
          <p>하늘 아래 같은 식물은 없다</p>
          <p>각 식물의 고유한 수형을 담아 한 식물은 하나만 판매해요</p>
        </div>
        <span />
        <div className="ecoPackaging">
          <p>신문지 포장으로 환경과 친하게</p>
          <p>신문지와 종이테이프만을 사용하여 정성스럽게 포장해드립니다</p>
        </div>
      </div>
      {/* { 장바구니에 해당 상품 아이디가 있으면 ? (
        <Modal
          goToOrder={goToOrder}
          goToCart={goToCart}
          // text="( '아니오'를 클릭하시면, 바로 주문결제페이지로 이동합니다. )"
          component1={
            <p>
              장바구니에 이미 동일한 상품이 있습니다. <br />
              장바구니로 이동하시겠습니까?
            </p>
          }
          onClose={() => setModal1(false)}
          component2={
            <div className="modalBtn">
              <button onClick={goToPage(cart)}>이동</button>
            </div>
          }
        />
      ) : ? } */}
      {modal2 && (
        <Modal
          goToCart={() => goToPage('cart')}
          component1={
            <p>
              장바구니에 상품이 담겼습니다. <br />
              장바구니로 이동하시겠습니까?
            </p>
          }
          onClose={() => setModal2(false)}
          component2={
            <div className="modalBtn btn2">
              <button onClick={() => goToPage('cart')}>이동</button>
            </div>
          }
        />
      )}
    </div>
  );
}

export default ProductDetail;
