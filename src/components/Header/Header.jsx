import React from "react";
import "./scroll.scss";
import "./index.scss";
import "./scroll.js";
import FloatingContacts from "../../components/FloatingContacts";
import Button from "../../atoms/ButtonCTA";
import logo from "../../assets/images/logo_1.png";
import listenToScroll from "./scroll.js";

function Header(props) {
  let handleClick = () => {
    const headerBurger = document.querySelector(".header__menu-burger");
    const headerMenu = document.querySelector(".header__burger-nav");
    const body = document.querySelector("body");
    body.classList.toggle("fixed-page");
    headerMenu.classList.toggle("menu--opened");
    headerBurger.classList.toggle("menu--opened");
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
            <a href="tel:+">+7 (812) 676-25-25</a>
            <p>c 8:00 до 21:00</p>
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
              <a href="#landing-about-us" className="menu__link">
                о нас
              </a>
            </li>
            <li className="menu__item">
              <a href="#landing-services" className="menu__link">
                услуги
              </a>
            </li>
            <li className="menu__item">
              <a href="/team" className="menu__link">
                команда
              </a>
            </li>
            <li className="menu__item">
              <a href="#landing-contacts" className="menu__link">
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
              <a href="/services" className="menu__link">
                услуги
              </a>
              <div className="menu__drop-down">
                <div className="link-container">
                  <a href="/hot/coronarography">Коронарография</a>
                </div>
                <div className="link-container">
                  <a href="/hot/operation_02">
                    Стентирование коронарных артерий
                  </a>
                </div>
                <div className="link-container">
                  <a href="/hot/operation_03">Аорто-коронарное шунтирование</a>
                </div>
                <div className="link-container">
                  <a href="/hot/plastika-klapana">
                    Пластика митрального клапана
                  </a>
                </div>
                <div className="link-container">
                  <a href="/hot/miniinvisiv">
                    Миниинвизивное протезирование клапанов
                  </a>
                </div>
                <div className="link-container">
                  <a href="/hot/protezirovanie">Протезирование аорты</a>
                </div>
                <div className="link-container">
                  <a href="/hot/endarterektomia">Каротидная эндартерэктомия</a>
                </div>
                <div className="link-container">
                  <a href="/hot/ablacia">Радиочастотная абляция</a>
                </div>
              </div>
            </li>
            <li className="menu__item">
              <a href="/team" className="menu__link">
                команда
              </a>
            </li>
            <li className="menu__item">
              <a href="#contacts-section" className="menu__link">
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
