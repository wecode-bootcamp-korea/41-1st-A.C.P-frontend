import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPriceInfo.scss';

export default function CartPriceInfo({ totalPrice, selectedItems }) {
  const navigate = useNavigate();
  const shipFee = totalPrice ? 2500 : 0;
  const finalAmount = totalPrice + shipFee;

  const createOrder = async (e, finalAmount) => {
    switch (true) {
      case selectedItems.length === 0:
        alert('장바구니의 상품을 선택해주세요!');
        return;
      case selectedItems.length > 1:
        alert('현재 선택된 상품이 1개인 경우만 주문이 가능합니다.');
        return;
      default:
        console.log('장바구니 예외상황 통과!');
        break;
    }
    // 장바구니 -> 주문하기 임시로 Localstorage 사용
    // 버튼 누르면 Localstorage set 실행
    console.log('selectedItems', selectedItems);
    const products = selectedItems.map(item => {
      const { id, quantity, name, description } = item.data;
      return {
        plantId: id,
        plantQuantity: quantity,
        name: name,
        description: description,
        itemPrice: item.itemPrice,
      };
    });
    const orderItems = {
      totalPrice: finalAmount,
      products: products,
    };
    localStorage.setItem('orders', JSON.stringify(orderItems));
    alert('주문 완료!');

    if (localStorage.getItem('orders') !== undefined) {
      navigate('/order');
    }
  };

  return (
    <div className="cartPriceInfo">
      <div className="innerInfo">
        <div className="priceInfoWrap">
          <div className="priceInfoBox">
            <span className="priceInfoItem">
              <span className="title">총 주문금액</span>
              <span className="price">{totalPrice.toLocaleString()}₩</span>
            </span>
            <span className="priceInfoItem">
              <span className="title">배송비</span>
              <span className="price">{shipFee.toLocaleString()}₩</span>
            </span>
          </div>
          <div className="priceInfoBox">
            <span className="priceInfoItem">
              <span className="title">총 결제금액</span>
              <span className="totalPrice">
                {finalAmount.toLocaleString()}₩
              </span>
            </span>
          </div>
          <button
            type="button"
            className="btnOrder"
            onClick={e => createOrder(e, finalAmount)}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
