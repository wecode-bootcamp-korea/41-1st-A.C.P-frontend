import React from 'react';
import CartBtn from './components/CartBtn';
import CartPriceInfos from './components/CartPriceInfos';
import './CartRight.scss';
import { fetchCart } from '../config';
import { useNavigate } from 'react-router-dom';

function CartRight({ selectedCartIds, cartTotalPrice }) {
  const navigate = useNavigate();
  const fetchOrder = () => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      cart_id: selectedCartIds,
      total_price: cartTotalPrice,
    };

    // 주문하기 버튼 클릭 시 [선택된 상품 아이디 전달]
    fetchCart(fetchUrl, 'POST', fetchData)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // 성공시 주문완료페이지로 이동

        // 아니면 알림창 띄워주기
      });
  };

  return (
    <div className="cartRight">
      <div className="cartInfos">
        <CartPriceInfos cartTotalPrice={cartTotalPrice} />
      </div>
      <CartBtn fetchOrder={fetchOrder} />
    </div>
  );
}

export default CartRight;
