import React from 'react';

function OrderedInfo({ info, name }) {
  console.log(name);
  return (
    <tr>
      <td>00001</td>
      <td>{name}</td>
      <td>1</td>
      <td>위워크타워 1층</td>
      <td>2023/01/30</td>
    </tr>
  );
}

export default OrderedInfo;
