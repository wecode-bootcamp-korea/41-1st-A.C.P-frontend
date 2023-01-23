import React from 'react';
import { FETCH_CART_API } from '../../../../config';
import { fetchApi } from '../../config';
import CheckBox from '../CheckBox/CheckBox';
import SelectBox from '../SelectBox/SelectBox';

export default function CartItem({
  item,
  cartItems,
  setCartItems,
  selectedItems,
  setSelectedItems,
}) {
  const { cart_id, data, itemPrice } = item;
  const isChecked =
    selectedItems.length > 0 &&
    selectedItems.some(item => item.cartId === cart_id);

  const checkSingleCartItem = () => {
    if (isChecked) {
      const newArr = [...selectedItems];
      const filteredArr = newArr.filter(item => item.cartId !== cart_id);
      setSelectedItems(filteredArr);
      return;
    }

    setSelectedItems(prev => [
      ...prev,
      {
        cartId: cart_id,
        data: {
          id: data.id,
          quantity: data.quantity,
          price: data.price,
        },
        itemPrice,
      },
    ]);
  };

  const updateQuantityAndPrice = (list, setList, cartId, quantity) => {
    const newList = [...list];
    const findItem = newList.find(
      item => item.cart_id === cartId || item.cartId === cartId
    );
    findItem.data.quantity = quantity;
    findItem.itemPrice = quantity * findItem.data.price;

    const modifiedItemList = newList.map(item => {
      const hasCartId = item.cart_id === cartId;
      return hasCartId ? findItem : item;
    });
    setList(modifiedItemList);
  };

  const selectChange = e => {
    const { id, value } = e.target;
    const cartId = parseInt(id);
    const quantity = parseInt(value);
    const isSelected =
      selectedItems.findIndex(item => item.cartId === cartId) > -1;

    updateQuantityAndPrice(cartItems, setCartItems, cartId, quantity);
    isSelected &&
      updateQuantityAndPrice(selectedItems, setSelectedItems, cartId, quantity);
  };

  const removeCartItem = async () => {
    const result = await fetchApi(
      `${FETCH_CART_API}/?cartId=${cart_id}`,
      'DELETE'
    );

    if (result.message === 'CART_DELETED') {
      alert('장바구니 아이템이 삭제되었습니다!');
      const newArr = [...cartItems];
      const filteredItems = newArr.filter(item => item.cart_id !== cart_id);
      setCartItems(filteredItems);
      return;
    }
    alert('삭제가 실패했습니다!');
  };

  return (
    <li className="cartItem">
      <CheckBox
        id={cart_id}
        isChecked={isChecked}
        handleCheckItem={checkSingleCartItem}
      />
      <div className="imgWrap">
        <img
          src="/images/productDetail/img02.jpg"
          alt="title"
          className="imgCartItem"
        />
      </div>

      <div className="itemInfo">
        <div className="boxText">
          <strong className="title">{data.name}</strong>
          <p className="desc">{data.description}</p>
        </div>
        <div className="boxPrice">
          <SelectBox
            cartId={cart_id}
            quantity={data.quantity}
            selectChange={selectChange}
          />
          <div className="infoPrice">
            <span className="title">주문금액</span>
            <span className="numPrice">₩ {itemPrice.toLocaleString()}</span>
          </div>
        </div>
        <button type="button" className="btnDelete" onClick={removeCartItem}>
          <img src="/images/common/close_btn.png" alt="close" width={12} />
        </button>
      </div>
    </li>
  );
}
