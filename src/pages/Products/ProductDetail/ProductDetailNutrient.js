import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from './components/Modal';
import ProductInfoNutrients from './components/ProductInfoNutrients';
import './ProductDetailNutrient.scss';

function ProductDetailNutrient() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [modalText, setModalText] = useState('');

  const goToPage = path => {
    navigate(`/${path}`, {
      state: productInfo,
    });
  };

  // BE와 통신세팅 -> 상품리스트에서 클릭했을 때 요청되어, 상품상세에 데이터가 뿌려지는 fetch 코드
  useEffect(() => {
    // scrollTop
    window.scrollTo(0, 0);

    fetch(`http://43.201.37.226:3000/nutrients/${productId}`, {
      method: 'GET',
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
    fetch('http://43.201.37.226:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.filter(item => item.id === 1)) {
          setModalText('동일한 상품이 담겨있습니다.');
        } else {
          fetch('http://43.201.37.226:3000/carts', {
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
              if (data.message === 'upsert data to cart success!!') {
                setModalText('장바구니에 상품이 담겼습니다');
              }
            });
        }
      });
  };

  const { id, nutrient_name, nutrient_type } = productInfo;

  return (
    <div className="productDetailNutrient">
      <div className="productDetailTop">
        <div className="productDetailImage">
          <img
            src="/images/productDetail/productDetail_img_01.jpg"
            alt="상품이미지"
          />
        </div>
        <div className="productDetailInfos">
          <h1>{nutrient_name}</h1>
          <ProductInfoNutrients key={id} type={nutrient_type} />
          <div className="productDetailBtns">
            <button
              className="payBtn"
              onClick={() => {
                goToPage('order');
              }}
            >
              구매하기 &nbsp;10,000₩
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

export default ProductDetailNutrient;
