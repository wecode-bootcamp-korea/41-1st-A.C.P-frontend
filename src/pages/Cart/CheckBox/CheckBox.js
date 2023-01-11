import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ cartId, label, className, selectItem }) {
  const handleClickChk = e => {
    selectItem(e, cartId);
  };

  return (
    <div className={`checkBox${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        className="inpChk"
        id={cartId}
        onClick={handleClickChk}
      />
      {label && (
        <label className="label" htmlFor={cartId}>
          {label}
        </label>
      )}
    </div>
  );
}
