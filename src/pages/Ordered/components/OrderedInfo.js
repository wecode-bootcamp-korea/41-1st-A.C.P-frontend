import React from 'react';

function OrderedInfo({ date }) {
  return (
    <tr>
      <td>00001</td>
      <td>식물명</td>
      <td>1</td>
      <td>위워크타워 1층</td>
      <td>{date}</td>
    </tr>
  );
}

export default OrderedInfo;
