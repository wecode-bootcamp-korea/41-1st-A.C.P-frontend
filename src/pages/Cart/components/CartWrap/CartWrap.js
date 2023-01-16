import React from 'react';
import CartItem from '../CartItem/CartItem';
import CheckBox from '../CheckBox/CheckBox';

export default function CartWrap({
  cartItems,
  setCartItems,
  selectedItems,
  setSelectedItems,
}) {
  const isAllChecked =
    selectedItems.length > 0 && selectedItems.length === cartItems.length;

  const handleAllCheckItem = () => {
    if (isAllChecked) {
      setSelectedItems([]);
      return;
    }

    const allSelectedItems = cartItems.map(item => {
      const { cart_id, data, itemPrice } = item;
      return {
        cartId: cart_id,
        data: {
          id: data.id,
          quantity: data.quantity,
          price: data.price,
        },
        itemPrice,
      };
    });
    setSelectedItems(allSelectedItems);
  };

  return (
    <div className="cartWrap">
      <h2 className="cartWrapTitle">장바구니</h2>
      {cartItems.length > 0 ? (
        <div className="cartWrapContent">
          <CheckBox
            id="allCheck"
            label="전체 선택"
            isChecked={isAllChecked}
            handleCheckItem={handleAllCheckItem}
          />
          <ul className="cartItemList">
            {cartItems.map(item => {
              return (
                <CartItem
                  key={item.cart_id}
                  item={item}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="cartWrapText">장바구니에 상품이 존재하지 않습니다.</p>
      )}
    </div>
  );
}
