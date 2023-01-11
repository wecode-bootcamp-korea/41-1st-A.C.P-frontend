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
  // 성공 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    // e.preventDefault(); // <- 태그 고유의 동작을 중단시키는 함수

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

  // ========== 난이도 dot 기능 구현 ========== //

  const [num, setNum] = useState('Easy'); // difficulty 데이터 값 ?
  // const setNum = difficultyList[key];

  const difficultyList = {
    Easy: 1,
    Normal: 2,
    Hard: 4,
  };

  // ========== 난이도 dot 기능 구현 ========== //

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
                level={difficultyList[num]}
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
              // onClick={fetchProductInfos}
              onClick={() => {
                goToPage('order');
              }}
            >
              구매하기 &nbsp;{plant_price}
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

// const [difficultyDot, setDifficultyDot] = useState([
//   false,
//   false,
//   false,
//   false,
//   false,
// ]);

// useEffect(() => {
//   console.log('useEffect함수 실행했나요?');
//   difficultyDotChange();
// }, []);
// const handleModal1 = e => {
//   setModal1(true);
// };

// function difficultyDotChange() {
//   console.log('함수실행중입니다..');
//   switch (productInfo.difficulty) {
//     case 'Easy':
//       return setDifficultyDot([true, false, false, false, false]);
//       break;
//     case 'Normal':
//       return setDifficultyDot([true, true, false, false, false]);
//       break;
//     case 'Hard':
//       return setDifficultyDot([true, true, true, true, false]);
//       break;
//   }
// }

{
  /* productInfo.difficulty === 'Easy' >>> 'difficultyDotFill' 1개 */
}
{
  /* productInfo.difficulty === 'Nomal' >>> 'difficultyDotFill' 2개  */
}
{
  /* productInfo.difficulty === 'Hard' >>> 'difficultyDotFill' 4개 */
}

{
  /* <span
                value={difficultyDot[0]}
                className={`difficultyDot ${
                  difficultyDot[0] ? 'difficultyDotFill' : 'difficultyDotEmpty'
                } `}
              />
              <span
                value={difficultyDot[1]}
                className={`difficultyDot ${
                  difficultyDot[1] ? 'difficultyDotFill' : 'difficultyDotEmpty'
                } `}
              />
              <span
                value={difficultyDot[2]}
                className={`difficultyDot ${
                  difficultyDot[2] ? 'difficultyDotFill' : 'difficultyDotEmpty'
                } `}
              />
              <span
                value={difficultyDot[3]}
                className={`difficultyDot ${
                  difficultyDot[3] ? 'difficultyDotFill' : 'difficultyDotEmpty'
                } `}
              />
              <span
                value={difficultyDot[4]}
                className={`difficultyDot ${
                  difficultyDot[4] ? 'difficultyDotFill' : 'difficultyDotEmpty'
                } `}
              /> */
}

export default ProductDetail;
