import React, { useState } from 'react';
import './TextInput.scss';

export default function TextInput({
  type,
  name,
  label,
  inputValue,
  setUserInfo,
  setPasswordType,
  setIsValid,
}) {
  const [isLabelMove, setIsLabelMove] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInpChange = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
    (name === 'email' || name === 'password') && checkValidation(value);
    value === '' && setIsError(false);
  };

  const checkValidation = inputValue => {
    const { email, pw } = {
      email: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), // 이메일 유효성 검사 : 영어 알파벳 + '@' + 3글자 이상
      pw: new RegExp('^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'), // 패스워드 유효성 검사 : 특수문자 포함 + 알파벳 8자리 이상
    };
    const isPassedValid = (name === 'email' ? email : pw).test(inputValue);
    setIsError(!isPassedValid);
    setIsValid(prev => ({
      ...prev,
      [name]: isPassedValid,
    }));
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
      <p className="errorText">
        {name === 'email'
          ? '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요.'
          : '비밀번호 형식에 맞지 않습니다.'}
      </p>
    </div>
  );
}
