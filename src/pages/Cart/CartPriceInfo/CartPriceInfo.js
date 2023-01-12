import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchCart } from '../config';
import './CartPriceInfo.scss';

function CartPriceInfo({ totalPrice }) {
  const navigate = useNavigate();

  // const fetchOrder = () => {
  //   // const fetchUrl = 'http://10.58.52.160:3000/carts';
  //   const fetchUrl = '/data/cart.json';
  //   const fetchData = {
  //     cart_id: selectedCartIds,
  //     total_price: cartTotalPrice,
  //   };

  //   // 주문하기 버튼 클릭 시 [선택된 상품 아이디 전달]
  //   fetchCart(fetchUrl, 'POST', fetchData)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       // 성공시 주문완료페이지로 이동

  //       // 아니면 알림창 띄워주기
  //     });
  // };

  const handleOrderClick = () => {
    // fetchOrder();
  };

  const shipFee = totalPrice ? 2500 : 0;
  const totalProductsPrice = totalPrice + shipFee;

  return (
    <div className="cartPriceInfo">
      <div className="innerInfo">
        <div className="boxPriceInfo">
          <div className="wrapPriceInfo">
            <span>총 주문금액</span>
            <span>{totalPrice}₩</span>
          </div>
          <div className="deliveryCost">
            <span>배송비</span>
            <span>{shipFee}₩</span>
          </div>
          <div className="totalPriceInfo">
            <span>총 결제금액</span>
            <span className="numTotalPrice">
              {totalProductsPrice.toLocaleString()}₩
            </span>
          </div>
        </div>
      </div>
      <div className="cartBtn">
        <button className="btn" onClick={handleOrderClick}>
          주문하기
        </button>
      </div>
    </div>
  );
}

export default CartPriceInfo;
