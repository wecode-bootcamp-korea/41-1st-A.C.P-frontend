import React from 'react';
import './CheckBox.scss';

export default function CheckBox({
  id, // allCheck || cartId
  data,
  label,
  className,
  selectItem,
  selectedItems,
  isAllChecked,
  cartItemPrice,
}) {
  const handleChangeChk = e => {
    if (id === 'allCheck') {
      selectItem(e, id);
    } else {
      selectItem(e, id, data.id, data.category, data.quantity, cartItemPrice);
    }
  };

  return (
    <div className={`checkBox${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        className="inpChk"
        id={id}
        onChange={handleChangeChk}
        checked={
          id === 'allCheck'
            ? isAllChecked
            : selectedItems.some(item => item.cartId === id)
        }
      />
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
