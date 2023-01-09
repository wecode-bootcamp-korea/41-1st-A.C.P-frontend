import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import User from './User/User';
import './Login.scss';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const loginChildren = (
    <>
      <h2 className="userTitleSub">회원이 아니신가요?</h2>
      <button className="btnSubmitType2" onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </>
  );

  const signupChildren = (
    <div className="wrapBtn">
      <button className="btnText" onClick={() => navigate('/login')}>
        이미 계정을 가지고 계십니까?
      </button>
    </div>
  );

  const isLoginPage = location.pathname === '/login';
  const bgImage = isLoginPage ? 'login' : 'signup';

  return (
    <>
      <section className="login">
        <article
          className="articleLeft"
          style={{
            backgroundImage: `url('/images/login/img_${bgImage}.jpg')`,
          }}
        />
        <article className="articleRight">
          <User title={isLoginPage ? '로그인' : '회원가입'}>
            {isLoginPage ? loginChildren : signupChildren}
          </User>
        </article>
      </section>
    </>
  );
}
