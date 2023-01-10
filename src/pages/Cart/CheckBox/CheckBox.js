import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ id, label, className, onChange }) {
  return (
    <div className={`checkBox${className ? ` ${className}` : ''}`}>
      <input type="checkbox" className="inpChk" id={id} onChange={onChange} />
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
