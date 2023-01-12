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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [modalText, setModalText] = useState('');

  // 임시 데이터
  const fakeData = {
    id: 1,
    name: '바보',
    price: '100',
  };

  const goToPage = path => {
    navigate(`/${path}`, {
      state: fakeData,
    });
  };

  // BE와 통신세팅 -> 상품리스트에서 클릭했을 때 요청되어, 상품상세에 데이터가 뿌려지는 fetch 코드
  useEffect(() => {
    fetch(`http://10.58.52.135:3000/pots/${productId}`, {
      method: 'GET', // + 메소드가 GET 이면 body 생략
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
        console.log(data);
      });
  }, [productId]);

  // 조건에 맞게 modal 띄우는 fetch 코드
  const handleModal = e => {
    setIsModalOpen(true);
    fetch('http://10.58.52.135:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.filter(item => item.id === 1)) {
          setModalText('동일한 상품이 담겨있습니다.');
        } else {
          fetch('http://10.58.52.135:3000/carts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
              userId: 100,
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.message === 'upsert data to cart success!!') {
                setModalText('장바구니에 상품이 담겼습니다');
              }
            });
        }
      });
  };

  const { id, name, size, color, price } = productInfo;

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
          <h1>{name}</h1>
          <ProductInfoPot key={id} size={size} color={color} />
          <div className="productDetailBtns">
            <button
              className="payBtn"
              onClick={() => {
                localStorage.setItem('id', JSON.stringify(fakeData));
                // 해당 상품 정보를 fakeData 자리에 넣어야함
                goToPage('order');
              }}
            >
              구매하기 &nbsp;{parseInt(price)}₩
            </button>
            <button className="cartBtn" onClick={handleModal}>
              장바구니
            </button>
          </div>
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

export default ProductDetailPot;
