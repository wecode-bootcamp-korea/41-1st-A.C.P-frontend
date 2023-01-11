import React from 'react';
import './AllCheckBox.scss';

export default function CheckBox({
  id,
  label,
  className,
  selectItem,
  isAllChecked,
}) {
  const handleChangeChk = e => {
    selectItem(e, id);
  };

  return (
    <div className={`checkBox${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        className="inpChk"
        id={id}
        onChange={handleChangeChk}
        // checked={}
      />
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
