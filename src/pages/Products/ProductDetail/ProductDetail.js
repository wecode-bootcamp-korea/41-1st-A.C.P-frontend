import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FETCH_CART_API, FETCH_PLANTS_API } from '../../../config';
import Modal from './components/Modal';
import ProductInfo from './components/ProductInfo';
import DifficultyDot from './DifficultyDot';
import './ProductDetail.scss';

function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const token = localStorage.getItem('accessToken');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [modalText, setModalText] = useState('');

  const goToPage = path => {
    navigate(`/${path}`, {
      state: productInfo,
    });
  };

  // // 조건에 맞게 modal 띄우는 fetch 코드
  const handleModal = e => {
    if (!token) {
      alert('현재 회원만 장바구니 사용이 가능합니다. 로그인해주세요!');
      return;
    }

    setIsModalOpen(true);
    fetch('http://43.201.37.226:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        let dataArr = [{ ...data }];

        if (dataArr.filter(data => data.data[0].plants[0].id === productId)) {
          // console.log(data.data[0].plants[0].id);
          setModalText('동일한 상품이 담겨있습니다.');
        } else {
          fetch(FETCH_CART_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: localStorage.getItem('accessToken'),
            },
            body: JSON.stringify({
              plantId: productId,
              plantQuantity: 1,
            }),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.message === 'upsert data to cart success!!') {
                setModalText('장바구니에 상품이 담겼습니다');
              }
            });
        }
      });
  };

  // BE와 통신세팅 -> 상품리스트에서 클릭했을 때 요청되어, 상품상세에 데이터가 뿌려지는 fetch 코드
  useEffect(() => {
    // scrollTop
    window.scrollTo(0, 0);

    fetch(`${FETCH_PLANTS_API}/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [productId]);

  // ===== 난이도 dot 기능용 객체 ===== //
  const difficultyList = {
    Easy: 1,
    Normal: 2,
    Hard: 4,
  };

  // ===== 응답데이터 객체 구조 할당 ===== //
  const {
    id,
    plant_name,
    plant_description,
    species,
    position,
    size,
    mood,
    difficulty,
    care,
    plant_price,
  } = productInfo;

  return (
    <div className="productDetail">
      <div className="productDetailTop">
        <div className="productDetailImage">
          <img src="/images/productDetail/img03.jpg" alt="상품이미지" />
        </div>
        <div className="productDetailInfos">
          <h1>{plant_name}</h1>
          <p>{plant_description}</p>
          <ProductInfo
            key={id}
            species={species}
            position={position}
            size={size}
            mood={mood}
          />
          <ul className="plantingInfos">
            <li className="difficulty">
              <span>난이도</span>
              <DifficultyDot
                key={difficultyList.key}
                level={difficultyList[difficulty]}
              />
            </li>
            <li className="plantingCare">
              <span>케어</span>
              <p>{care}</p>
            </li>
          </ul>
          <div className="productDetailBtns">
            <button
              className="payBtn"
              onClick={() => {
                goToPage('order');
              }}
            >
              구매하기 &nbsp;
              {parseInt(plant_price).toLocaleString()}₩
            </button>
            <button className="cartBtn" onClick={handleModal}>
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
      {isModalOpen && (
        <Modal
          component1={
            <p>
              {modalText} <br />
              장바구니로 이동하시겠습니까?
            </p>
          }
          onClose={() => setIsModalOpen(false)}
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
