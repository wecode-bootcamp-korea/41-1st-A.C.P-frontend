export const fetchApi = async (url, method = 'GET', fetchdata) => {
  if (method === 'GET') {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error('실패!');
  }

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: localStorage.getItem('accessToken'),
    },
    body: JSON.stringify(fetchdata),
  });

  if (res.ok) {
    const data = res.json();
    return data;
  }
  throw new Error('실패!');
};

export const cartDataRefactor = fetchResultData => {
  return fetchResultData.map(item => {
    const nutrientsData = item.nutrients[0].name !== null && item.nutrients[0];
    const plantsData = item.plants[0].name !== null && item.plants[0];
    const potsData = item.pots[0].name !== null && item.pots[0];

    const categoryList = Object.keys(item).slice(1); // ['plants', 'pots', 'nutrients']
    const categoryIndex =
      (item.plants[0].name !== null && '0') ||
      (item.pots[0].name !== null && '1') ||
      (item.nutrients[0].name !== null && '2');

    const presentData = nutrientsData || plantsData || potsData;
    const itemPrice = presentData.quantity * presentData.price;

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
      itemPrice,
    };
  });
};
