import React, { useEffect, useState } from 'react';
import CartProducts from './CartProducts/CartProducts';
import CartPriceInfo from './CartPriceInfo/CartPriceInfo';
import './Cart.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCartIds, setSelectedCartIds] = useState([]);
  const [defaultTotalPrice, setDefaultTotalPrice] = useState(0);

  // useEffect(() => {
  //   // const fetchUrl = 'http://10.58.52.160:3000/carts';
  //   const fetchUrl = '/data/cart.json';

  //   fetch(fetchUrl)
  //     .then(res => {
  //       console.log(res);
  //       res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setCartItems(data);

  //       // const itemTotalPrice = data.reduce(
  //       //   (acc, curr) => acc + parseInt(curr.price),
  //       //   0
  //       // );

  //       // setDefaultTotalPrice(itemTotalPrice);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://10.58.52.135:3000/carts')
      // fetch('/data/cart.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newData = data.map(item => {
          const nutrientsData =
            item.nutrients[0].name !== null && item.nutrients[0];
          const plantsData = item.plants[0].name !== null && item.plants[0];
          const potsData = item.pots[0].name !== null && item.pots[0];

          // console.log(objKey);
          const presentData = nutrientsData || plantsData || potsData;

          console.log(presentData);
          const objKey = Object.keys(presentData);
          const category = objKey[3].slice(0, objKey[3].indexOf('_'));

          return {
            cart_id: item.cart_id,
            data: {
              category: category,
              description: presentData.description,
              name: presentData.name,
              quantity: presentData[`${category}_quantity`],
              id: presentData[`${category}s_id`],
              price: presentData.price,
            },
          };
        });

        console.log(newData);

        // setCartItems(newData);

        // const itemTotalPrice = data.reduce(
        //   (acc, curr) => acc + parseInt(curr.plant_price),
        //   0
        // );
        // setDefaultTotalPrice(itemTotalPrice);
      });
  }, []);

  const selectAllItems = e => {
    const isChecked = e.target.checked;
    const allCartIds = cartItems.map(item => item.cart_id);
    setSelectedCartIds(isChecked ? allCartIds : []);
    if (isChecked) {
      // 총 상품가격 0원 초기화
    } else {
      // 모든 상품가격 + quauntity 더해서 set
    }
    // setTotalPrice(prev => prev - quantity * price);
  };

  const selectSingleItem = (e, cartId, quantity, price) => {
    // console.log(cartId);
    const hasCartId = selectedCartIds.includes(cartId);

    if (hasCartId) {
      const filteredList = selectedCartIds.filter(
        selectedId => selectedId !== cartId
      );
      setSelectedCartIds(filteredList);
      setTotalPrice(prev => prev - quantity * price);
    } else {
      setSelectedCartIds([...selectedCartIds, cartId]);
      setTotalPrice(prev => prev + quantity * price);
    }
  };

  const calcProductPrice = (id, quantity, price) => {
    setTotalPrice(prev => prev + quantity * price);
  };

  // console.log('totalPrice', totalPrice);
  // const cartTotalPrice =  // 체크된 상품 수량 * 가격 // 모두 더하기

  return (
    <section className={`cart${cartItems ? '' : ' empty'}`}>
      <div className="innerCart">
        <CartProducts
          cartItems={cartItems}
          setCartItems={setCartItems}
          selectAllItems={selectAllItems}
          selectSingleItem={selectSingleItem}
          selectedCartIds={selectedCartIds}
          calcProductPrice={calcProductPrice}
          setDefaultTotalPrice={setDefaultTotalPrice}
        />
        {cartItems && (
          <CartPriceInfo
            selectedCartIds={selectedCartIds}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </section>
  );
}
