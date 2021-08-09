import React from 'react';
import './scroll.scss';
import './index.scss';
import './scroll.js';
import FloatingContacts from '../../components/FloatingContacts';
import Button from '../../atoms/ButtonCTA';
import logo from '../../assets/images/logo_1.png';
import listenToScroll from './scroll.js';

function Header(props) {
  let handleClick = () => {
    const headerBurger = document.querySelector('.header__menu-burger');
    const headerMenu = document.querySelector('.header__burger-nav');
    const body = document.querySelector('body');
    body.classList.toggle('fixed-page');
    headerMenu.classList.toggle('menu--opened');
    headerBurger.classList.toggle('menu--opened');
  };

  return (
    <header className="header" onLoad={listenToScroll}>
      <div className="container header__container">
        <nav className="header__navbar">
          <div className="header__brand">
            <a href="/">
              <img
                className="brand__logo"
                role="presentation"
                src={logo}
                alt=""
              />
            </a>
            <a href="/" className="brand__name">
              Центр кардиохирургии и интервенционной кардиологии
            </a>
          </div>
          <div className="header__phone">
            <a href="tel:+79992380136">8 (999) 238-01-36</a>
            <p>c 9:00 до 17:00</p>
          </div>
          <Button styling="header__cta" text="Записаться на прием" />
        </nav>
        <div onClick={handleClick} className="header__burger">
          <div className="header__menu-burger">
            <span></span>
          </div>
        </div>
        <nav className="header__burger-nav">
          <ul className="burger__menu">
            <li className="menu__item">
              <a href="/" className="menu__link">
                главная
              </a>
            </li>
            <li className="menu__item">
              <a href="/about-us" className="menu__link">
                о нас
              </a>
            </li>
            <li className="menu__item">
              <a href="/treatment" className="menu__link">
                лечение
              </a>
            </li>
            <li className="menu__item">
              <a href="/diagnostics" className="menu__link">
                диагностика
              </a>
            </li>
            <li className="menu__item">
              <a href="/team" className="menu__link">
                команда
              </a>
            </li>
            <li className="menu__item">
              <a href="/contacts" className="menu__link">
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__nav">
        <div className="container flex overflow">
          <ul className="header__menu">
            <li className="menu__item">
              <a href="/" className="menu__link">
                главная
              </a>
            </li>
            <li className="menu__item">
              <a href="/about-us" className="menu__link">
                о нас
              </a>
            </li>

            <li className="menu__item">
              <a href="/treatment" className="menu__link">
                лечение
              </a>
              <div className="menu__drop-down">
                <div className="link-container">
                  <a href="/treatment/coronarographia">Коронарография</a>
                </div>
                <div className="link-container">
                  <a href="/treatment/stentirovanie-koronarnih-arteriy">
                    Стентирование коронарных артерий
                  </a>
                </div>
                <div className="link-container">
                  <a href="/treatment/aorto-koronarnoe-shuntirovanie">Аорто-коронарное шунтирование</a>
                </div>
                <div className="link-container">
                  <a href="/treatment/plastika-mitralnogo-klapana">Пластика митрального клапана</a>
                </div>
                <div className="link-container">
                  <a href="/treatment/miniinvisivnoe-protezirovanie-klapanov">
                    Миниинвизивное протезирование клапанов
                  </a>
                </div>
                <div className="link-container">
                  <a href="/treatment/protezirovanie-aorti">Протезирование аорты</a>
                </div>
                <div className="link-container">
                  <a href="/treatment/karotidnaya-endarterektomiya">Каротидная эндартерэктомия</a>
                </div>
                <div className="link-container">
                  <a href="/treatment/radiochastotnaya-ablyaciya">Радиочастотная абляция</a>
                </div>
              </div>
            </li>
            <li className="menu__item">
              <a href="/diagnostics" className="menu__link">
                диагностика
              </a>
            </li>
            <li className="menu__item">
              <a href="/team" className="menu__link">
                команда
              </a>
            </li>
            <li className="menu__item">
              <a href="/contacts" className="menu__link">
                контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
      <FloatingContacts />
    </header>
  );
}

export default Header;
