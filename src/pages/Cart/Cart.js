import React, { useEffect, useState } from 'react';
import CartProducts from './CartProducts/CartProducts';
import CartPriceInfo from './CartPriceInfo/CartPriceInfo';
import './Cart.scss';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // fetch('http://10.58.52.135:3000/carts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization: localStorage.getItem('accessToken'),
    //   },
    // })

    // fetch('/data/cart.json')
    fetch('http://10.58.52.135:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('origin data : ', data);
        const newData = data.map(item => {
          const nutrientsData =
            item.nutrients[0].name !== null && item.nutrients[0];
          const plantsData = item.plants[0].name !== null && item.plants[0];
          const potsData = item.pots[0].name !== null && item.pots[0];

          const categoryList = Object.keys(item).slice(1); // ['nutrients', 'plants', 'pots']
          const categoryIndex =
            (item.nutrients[0].name !== null && '0') ||
            (item.plants[0].name !== null && '1') ||
            (item.pots[0].name !== null && '2');

          const presentData = nutrientsData || plantsData || potsData;

          return {
            cart_id: item.cart_id,
            data: {
              category: categoryList[parseInt(categoryIndex)],
              description: presentData.description,
              name: presentData.name,
              quantity: presentData.quantity,
              id: presentData.id,
              price: presentData.price,
            },
          };
        });
        setCartItems(newData);
      });
  }, []);

  const selectAllItems = e => {
    const isChecked = e.target.checked;
    const newArr = [...cartItems];

    const allCartInfo = newArr.map(item => {
      const category = item.data.category.slice(0, -1);
      return {
        cartId: item.cart_id,
        data: {
          [`${category}Id`]: item.data.id,
          [`${category}Quantity`]: item.data.quantity,
        },
      };
    });

    setSelectedItems(isChecked ? allCartInfo : []);
  };

  const selectSingleItem = (
    e,
    cartId,
    productId,
    category,
    quantity,
    cartItemPrice
  ) => {
    const hasSelectedItem = selectedItems.find(item => item.cartId === cartId);
    const cate = category.slice(0, -1);

    let obj = {
      cartId,
      data: {
        [`${cate}Id`]: productId,
        [`${cate}Quantity`]: quantity,
      },
    };

    if (hasSelectedItem) {
      const filteredList = selectedItems.filter(item => item.cartId !== cartId);
      setSelectedItems(filteredList);
      setTotalPrice(prev => prev - cartItemPrice);
    } else {
      setSelectedItems([...selectedItems, obj]);
      setTotalPrice(prev => prev + cartItemPrice);
    }
  };

  return (
    <section className={`cart${cartItems ? '' : ' empty'}`}>
      <div className="innerCart">
        <CartProducts
          cartItems={cartItems}
          setCartItems={setCartItems}
          selectAllItems={selectAllItems}
          selectSingleItem={selectSingleItem}
          selectedItems={selectedItems}
          //
          setTotalPrice={setTotalPrice}
        />
        {cartItems && (
          <CartPriceInfo
            selectedItems={selectedItems}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </section>
  );
}
