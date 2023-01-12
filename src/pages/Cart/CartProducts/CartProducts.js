import React from 'react';
import CartItem from '../CartItem/CartItem';
import CheckBox from '../CheckBox/CheckBox';
import './CartProducts.scss';

export default function CartProducts({
  cartItems,
  setCartItems,
  selectAllItems,
  selectSingleItem,
  selectedItems,
  //
  setTotalPrice,
}) {
  // const allCartIdsLength = () => {
  //   return cartItems.map(item => item.cart_id).length;
  // };

  const isAllChecked =
    selectedItems.length > 0 && cartItems.length === selectedItems.length;

  console.log('isAllChecked', isAllChecked);
  return (
    <article className="cartProducts">
      <h2 className="titleArticle">장바구니</h2>
      <div className="wrapCart">
        {/* 전체선택 클릭시 checked ? 모든 상품 가격 * 수량 : 0 */}
        {cartItems ? (
          <>
            <CheckBox
              id="allCheck"
              className="all"
              label="전체선택"
              selectItem={selectAllItems}
              isAllChecked={isAllChecked} // 상품리스트 개수와 selectedItem 개수가 같으면 true or false
            />
            <ul className="cartList">
              {cartItems &&
                cartItems.map(cartItem => {
                  return (
                    <CartItem
                      key={cartItem.cart_id}
                      cartItem={cartItem}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      selectedItems={selectedItems}
                      selectSingleItem={selectSingleItem}
                      //
                      setTotalPrice={setTotalPrice}
                    />
                  );
                })}
            </ul>
          </>
        ) : (
          <p className="txtCart">상품이 존재하지 않습니다.</p>
        )}
      </div>
    </article>
  );
}
