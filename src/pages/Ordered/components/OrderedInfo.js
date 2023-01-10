import React from 'react';

function OrderedInfo({ info }) {
  return (
    <tr>
      <td>{info.orderNum}</td>
      <td>{info.name}</td>
      <td>{info.quantity}</td>
      <td>{info.destination}</td>
      <td>{info.date}</td>
    </tr>
  );
}

export default OrderedInfo;
