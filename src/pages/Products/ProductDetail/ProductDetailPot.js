import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from './components/Modal';
import ProductInfoPot from './components/ProductInfoPot';
import './ProductDetailPot.scss';

function ProductDetailPot() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  console.log(params);

  // const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [productInfo, setProductInfo] = useState([]);

  const handleModal2 = e => {
    setModal2(true);
  };

  const goToPage = path => {
    navigate(`/${path}`);
  };

  // ===== Mock Data 상품 정보 =====
  // useEffect(() => {
  //   fetch('data/productInfo.json')
  //     .then(res => res.json())
  //     .then(data => setProductInfo(data));
  // }, []);

  // BE와 통신세팅 -> 상품리스트에서 클릭했을 때 요청되어, 상품상세에 데이터가 뿌려지는 fetch 코드
  useEffect(() => {
    // e.preventDefault(); // <- 태그 고유의 동작을 중단시키는 함수

    fetch(`http://10.58.52.135:3000/pots/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        pot_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
        console.log(data);
      });
  }, [productId]);

  // BE와 통신세팅 -> 장바구니 버튼을 클릭했을 때, 장바구니에 담긴 상품들의 아이디와 일치하는게 있는지 조건 검사하고 결과를 받아야하는 fetch 코드, 동적라우팅은 상품리스트로!
  const fetchCartBtn = e => {
    // e.preventDefault(); // <- 태그 고유의 동작을 중단시키는 함수

    fetch('http://10.58.52.135:3000/plants/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        plant_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }, []);
  };

  // BE와 통신세팅 -> 주문하기 버튼을 클릭했을 때, 해당 상품 아이디를 요청하여 오더페이지에 뿌려져야 되는 fetch 코드
  const fetchOrderBtn = e => {
    // e.preventDefault(); // <- 태그 고유의 동작을 중단시키는 함수

    fetch('http://10.58.52.135:3000/plants/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        plant_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }, []);
  };

  const { id, pot_name, size, color, pot_price } = productInfo;

  return (
    <div className="productDetailPot">
      <div className="productDetailTop">
        <div className="productDetailImage">
          <img
            src="images/productDetail/productDetail_img_01.jpg"
            alt="상품이미지"
          />
        </div>
        <div className="productDetailInfos">
          <h1>이태리 화분</h1>
          <ProductInfoPot key={id} size={size} color={color} />
          <div className="productDetailBtns">
            <button
              className="payBtn"
              onClick={() => {
                goToPage('order');
              }}
            >
              구매하기 &nbsp;25,000₩
            </button>
            <button className="cartBtn" onClick={handleModal2}>
              장바구니
            </button>
          </div>
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

export default ProductDetailPot;
