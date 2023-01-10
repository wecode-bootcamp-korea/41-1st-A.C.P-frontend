import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import SelectBoxQuantity from '../SelectBoxQuantity/SelectBoxQuantity';
import './CartItem.scss';

export default function CartItem({
  cartItem: { id, name, description, price, quantity, imgUrl },
  setCartItems,
}) {
  const updateCartQuantity = () => {
    // id와 일치하는 상품 quantity 변경 후 setData로 재렌더링;
  };

  const deleteCartItem = () => {
    // id 값 전달해서 해당 상품 삭제된 cartList 다시 setData후 렌더링;
  };

  return (
    <li className="cartItem">
      <CheckBox id={`check${id}`} />
      <div className="wrapImg">
        <img src={imgUrl} alt="" className="cartImg" width={170} />
      </div>
      <div className="wrapInfo">
        <div className="boxTitle">
          <strong className="title">{name}</strong>
          <p className="description">{description}</p>
        </div>
        <div className="boxPrice">
          <SelectBoxQuantity />
          <span className="priceInfo">
            <span className="titlePrice">주문금액</span>
            <span className="numPrice">
              ₩ {parseInt(price).toLocaleString()}
            </span>
          </span>
        </div>
      </div>
      <button type="button" className="btnDelete">
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button>
    </li>
  );
}
