import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TextInput.scss';

export default function TextInput({
  type,
  name,
  label,
  inputValue,
  setUserInfo,
  setPasswordType,
  validCondition,
}) {
  const location = useLocation();
  const [isLabelMove, setIsLabelMove] = useState(false);
  const [isError, setIsError] = useState(false);

  const isErrorCondition = !validCondition[`${name}`] && inputValue !== '';

  useEffect(() => {
    setIsLabelMove(false);
  }, [location.pathname]);

  const handleInpChange = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
    value === '' && setIsError(false);
  };

  const errorMessage = {
    email: '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요.',
    password: '비밀번호 형식에 맞지 않습니다.',
  };

  const togglePwBtn = (
    <button
      type="button"
      className="btnText"
      onClick={() => setPasswordType(type === 'password' ? 'text' : 'password')}
    >
      {type === 'password' ? '보기' : '숨기기'}
    </button>
  );

  const itemInputClassName = `itemInput${isLabelMove ? ' move' : ''}${
    isError ? ' error' : ''
  }`;

  return (
    <div className={itemInputClassName}>
      <div className="boxInput">
        <input
          type={type}
          name={name}
          value={inputValue}
          onChange={handleInpChange}
          onFocus={() => setIsLabelMove(true)}
          onBlur={e => setIsLabelMove(!(e.target.value === ''))}
          className="inpText"
        />
        <label className="label">{label}</label>
        {name === 'password' && togglePwBtn}
      </div>
      <p className="errorText">{isErrorCondition ? errorMessage[name] : ''}</p>
    </div>
  );
}
