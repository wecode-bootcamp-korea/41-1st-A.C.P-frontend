import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="listFooter">
        <li>
          <img src="/images/common/img_logo_w.png" alt="Plait" width="86px" />
          <p>All rights reserved.</p>
          {/* <span>회사 브랜드 이름, 로고, All rights reserved.</span> */}
        </li>
        <li>
          <strong className="listTitle">회사정보</strong>
          <p className="listDescription">
            <span className="descInfo">㈜서윤식물 </span>
            <span className="descInfo">CEO - 강서윤 </span>
            <span className="descInfo">E-mail - hiImSeoyunKang@Plait.com </span>
            <span className="descInfo">N - 892-75-03231 </span>
            <span className="descInfo">Phone - 02 - 5024 -7859 </span>
            <span className="descInfo">
              Address - 서울특별시 강남구 테헤란로 427, 11F{' '}
            </span>
            <span className="descInfo">
              통신판매업 신고 제 2023-서울-0001호
            </span>
          </p>
        </li>
        <li>
          <strong className="listTitle">이용약관</strong>
          <div className="boxTerms">
            <Link to="#" className="link">
              회사소개
            </Link>
            <Link to="#" className="link">
              이용약관
            </Link>
            <Link to="#" className="link">
              개인정보처리방침
            </Link>
          </div>
        </li>
        <li>
          <strong className="listTitle">고객문의</strong>
          <p className="listDescription">
            Monday to Friday 10:00am ~ 19:00pm
            <br />
            Saturday, Sunday - off
          </p>
        </li>
      </ul>
    </footer>
  );
}
