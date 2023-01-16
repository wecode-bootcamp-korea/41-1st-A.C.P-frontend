import React from 'react';

export default function SelectBox({ cartId, quantity, selectChange }) {
  return (
    <div className="selectBox">
      <select
        id={cartId}
        name="quantity"
        value={quantity}
        onChange={selectChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
