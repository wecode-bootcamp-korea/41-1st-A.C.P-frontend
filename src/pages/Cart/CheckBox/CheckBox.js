import React from 'react';
import './CheckBox.scss';

export default function CheckBox({
  id,
  label,
  className,
  selectItem,
  selectedCartIds,
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
