import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { fetchCart } from '../config';
import SelectBoxQuantity from '../SelectBoxQuantity/SelectBoxQuantity';
import './CartItem.scss';

export default function CartItem({
  cartItem,
  cartItems,
  setCartItems,
  selectSingleItem,
  selectedItems,
  setTotalPrice,
  deleteCartItem,
}) {
  const { cart_id, data } = cartItem;
  const { description, id, name, price, quantity } = data;

  // console.log('quantity', quantity);

  // console.log('cartItem', cartItem);

  const updateCartQuantity = quantity => {
    const fetchUrl = 'http://10.58.52.160:3000/carts';
    const fetchData = {
      // plant_id,
      // plant_quantity: quantity,
    };

    fetchCart(fetchUrl, 'POST', fetchData)
      .then(res => res.json())
      .then(data => {
        // if (data.message === 'success') {
        //   setCartItems;
        // }
        // 성공시 카트아이템 다시 세팅
        // setCartItems(data)
      });
  };

  const [cartItemPrice, setCartItemPrice] = useState(0);

  useEffect(() => {
    setCartItemPrice(quantity * parseInt(price));
  }, [quantity, price]);

  console.log('cartItem Component', cartItemPrice);

  return (
    <li className="cartItem">
      <CheckBox
        id={cart_id}
        selectItem={selectSingleItem}
        selectedItems={selectedItems}
        cartItemPrice={cartItemPrice}
        data={data}
      />
      <div className="wrapImg">
        <img src="/images/productDetail/img03.jpg" alt="" className="cartImg" />
      </div>
      <div className="wrapInfo">
        <div className="boxTitle">
          <strong>{name}</strong>
          <p className="description">{description}</p>
        </div>
        <div className="boxPrice">
          <SelectBoxQuantity
            cartId={cart_id}
            id={id}
            cartItems={cartItems}
            price={price}
            quantity={quantity}
            cartItemPrice={cartItemPrice}
            setCartItemPrice={setCartItemPrice}
            setCartItems={setCartItems}
            // updateCartQuantity={updateCartQuantity}
            //
            setTotalPrice={setTotalPrice}
          />
          <span className="priceInfo">
            <span className="titlePrice">주문금액</span>
            <span className="numPrice">₩ {cartItemPrice}</span>
          </span>
        </div>
      </div>
      <button
        type="button"
        className="btnDelete"
        onClick={() => deleteCartItem(cart_id)}
      >
        <img src="/images/common/close_btn.png" alt="X" width={12} />
      </button>
    </li>
  );
}
