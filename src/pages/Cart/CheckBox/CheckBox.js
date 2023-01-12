import React from 'react';
import './CheckBox.scss';

export default function CheckBox({
  id,
  label,
  className,
  selectItem,
  selectedCartIds,
  isAllChecked,
  productQuantity,
  productPrice,
}) {
  const handleChangeChk = e => {
    selectItem(e, id, productQuantity, productPrice);
  };

  return (
    <div className={`checkBox${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        className="inpChk"
        id={id}
        onChange={handleChangeChk}
        checked={
          id === 'allCheck' ? isAllChecked : selectedCartIds.includes(id)
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
