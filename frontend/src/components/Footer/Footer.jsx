import React from 'react';
import './index.scss';
import reestr from '../../assets/documents/reestr.pdf';
import FAB from '../FAB/FAB';
import insta_logo from '../../assets/svg/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <FAB />
      <div className="container text-center">
        <div className="social-links">
          <a
            href="https://www.instagram.com/heartteam.spb/"
            target="_blank"
            className="social-links__link"
            rel="noreferrer"
          >
            <img
              src={insta_logo}
              alt="ссылка на наш instagram"
              className="social-links__icon"
            />
            heartteam.spb
          </a>
        </div>
        <hr className="footer__hr" />
        <span className="footer__copyright">© copyright 2021</span>
        <a
          href={reestr}
          target="_blank"
          className="footer__mark"
          rel="noreferrer"
        >
          выписка из реестра лицензий по состоянию на 23.04.2021
        </a>
      </div>
    </footer>
  );
}

export default Footer;
