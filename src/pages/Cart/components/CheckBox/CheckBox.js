import React from 'react';
import './CheckBox.scss';

export default function AllCheckBox({ id, label, isChecked, handleCheckItem }) {
  const changeChecked = () => {
    handleCheckItem();
  };

  return (
    <div className={label ? 'checkBox all' : 'checkBox'}>
      <input
        type="checkbox"
        className="inpChk"
        id={label ? id : `cartItem${id}`}
        onChange={changeChecked}
        checked={isChecked}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}
