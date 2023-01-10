export function fetchData(url, method = 'GET', fetchdata) {
  let response;

  if (method === 'GET') {
    response = fetch(url);
  } else {
    response = fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(fetchdata),
    });
  }

  if (response.status === 200) {
    return response;
  } else {
    alert('통신에 실패하였습니다. 콘솔에서 메세지를 확인해주세요.');
    console.log('config.js에서 보내주는 응답 입니다.', response);
  }
}
