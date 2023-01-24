import React from 'react';

function OrderedInfo({ date, address }) {
  return (
    <tr>
      <td>00001</td>
      <td>식물명</td>
      <td>1</td>
      <td>{address}</td>
      <td>{date}</td>
    </tr>
  );
}

export default OrderedInfo;
