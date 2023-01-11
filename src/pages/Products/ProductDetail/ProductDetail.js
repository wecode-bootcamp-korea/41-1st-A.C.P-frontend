import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Modal from './components/Modal';
import ProductInfo from './components/ProductInfo';
import DifficultyDot from './DifficultyDot';
import './ProductDetail.scss';

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const productId = params.id;

  console.log(params);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [modalText, setModalText] = useState('');

  const goToPage = path => {
    navigate(`/${path}`);
  };

  // 장바구니 눌렀을 때, 장바구니에 담긴 목록을 백엔드에서 받아서 id 를 확인한 후, 있으면 setModalText('동일한 상품')
  // 없으면 (else 부분), 장바구니에 담는 api를 불러와서 해당 상품정보를 body에 담은 후, 잘 담긴 메세지(success)를 받으면, setModalText('장바구니에 상품이 담겼습니다')!

  const handleModal = e => {
    setIsModalOpen(true);
    fetch('장바구니 담긴 목록 API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        userId: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.filter(item => item.id === productId)) {
          setModalText('동일한 상품이 담겨있습니다.');
        } else {
          fetch('장바구니 담는 API', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
              userId: '',
              plant_id: '',
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.message === 'success') {
                setModalText('장바구니에 상품이 담겼습니다');
              }
            });
        }
      });
  };

  // BE와 통신세팅 -> 상품리스트에서 클릭했을 때 요청되어, 상품상세에 데이터가 뿌려지는 fetch 코드
  // 성공 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    fetch(`http://10.58.52.135:3000/plants/${productId}`, {
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
        setProductInfo(data);
        console.log(data);
      });
  }, [productId]);

  // ===== 난이도 dot 기능용 객체 ===== //
  const difficultyList = {
    Easy: 1,
    Normal: 2,
    Hard: 4,
  };

  // ===== 응답데이터 이름 ===== //
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
          <img
            src="images/productDetail/productDetail_img_01.jpg"
            alt="상품이미지"
          />
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
              구매하기 &nbsp;{plant_price}
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
