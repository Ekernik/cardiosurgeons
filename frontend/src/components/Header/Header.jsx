import React from "react";
import "./scroll.scss";
import "./index.scss";
import "./scroll.js";
import FloatingContacts from "../../components/FloatingContacts";
import Button from "../../atoms/ButtonCTA";
import logo from "../../assets/images/logo_1.png";
import listenToScroll from "./scroll.js";
import LinkItem from "./LinkItem";
import DropList from "./DropList";
import { diagnos, treatments } from "../../assets/databases/links";

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
              Центр кардиохирургии и&nbsp;интервенционной кардиологии <br />
              клиники ВМТ им.&nbsp;Н.И.Пирогова&nbsp;СПбГУ
            </a>
          </div>
          <div className="header__phone">
            <a href="tel:+79992380136">8 (999) 238-01-36</a>
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
            <LinkItem link="/" text="Главная" />
            <LinkItem link="/about-us" text="О нас" />
            <LinkItem link="/treatment" text="Лечение" />
            <LinkItem link="/diagnostics" text="Диагностика" />
            <LinkItem link="/team" text="Команда" />
            <LinkItem link="/contacts" text="Контакты" />
          </ul>
        </nav>
      </div>
      <div className="header__nav">
        <div className="container flex overflow">
          <ul className="header__menu">
            <LinkItem link="/" text="Главная" />
            <LinkItem link="/about-us" text="О нас" />
            <DropList mainLink={treatments.mainLink} links={treatments.links} />
            <DropList mainLink={diagnos.mainLink} links={diagnos.links} />
            <LinkItem link="/team" text="Команда" />
            <LinkItem link="/contacts" text="Контакты" />
          </ul>
        </div>
      </div>
      <FloatingContacts />
    </header>
  );
}

export default Header;
