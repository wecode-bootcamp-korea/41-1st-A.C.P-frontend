export function fetchCart(url, method = 'GET', fetchData) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(fetchData),
  });
}
