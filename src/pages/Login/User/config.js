export const fetchApi = async (url, method = 'GET', fetchdata) => {
  if (method === 'GET') {
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('실패!');
  }

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(fetchdata),
  });

  if (res.ok) {
    const data = res.json();
    return data;
  }
  throw new Error('실패!');
};
