import React, { useEffect, useState } from 'react';
import OrderRight from '../../components/OrderRight/OrderRight';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import './CartItem/CartItem.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    // 장바구니 데이터 가져오기
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(data => {
        setCartItems(data);

        const itemTotalPrice = data.reduce(
          (acc, curr) => acc + parseInt(curr.price),
          0
        );

        setCartTotalPrice(itemTotalPrice);
      });
  }, []);

  return (
    <section className={`cart${cartItems.length > 0 ? '' : ' empty'}`}>
      <div className="innerCart">
        <article className="cartLeft">
          {/* 타이틀 */}
          <h2 className="titleArticle">장바구니</h2>

          <div className="wrapItems">
            {/* 전체선택 */}
            {cartItems.length > 0 ? (
              <>
                <div className="checkBox all">
                  <input type="checkbox" className="inpChk" id="allCheck" />
                  <label className="label">전체선택</label>
                </div>
                <div className="cartList">
                  {cartItems.map(data => {
                    return <CartItem key={data.id} data={data} />;
                  })}
                </div>
              </>
            ) : (
              <p className="txtCart">상품이 존재하지 않습니다.</p>
            )}
          </div>
        </article>
        {cartItems.length > 0 && <OrderRight cartTotalPrice={cartTotalPrice} />}
      </div>
    </section>
  );
}
