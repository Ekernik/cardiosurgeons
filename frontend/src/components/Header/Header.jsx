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

function Header(props) {
  let handleClick = () => {
    const headerBurger = document.querySelector(".header__menu-burger");
    const headerMenu = document.querySelector(".header__burger-nav");
    const body = document.querySelector("body");
    body.classList.toggle("fixed-page");
    headerMenu.classList.toggle("menu--opened");
    headerBurger.classList.toggle("menu--opened");
  };

  const treatments = {
    mainLink: {
      link: "/treatment",
      text: "Лечение",
    },
    links: [
      {
        link: "/treatment/stentirovanie-koronarnih-arteriy",
        text: "Стентирование коронарных артерий",
      },
      {
        link: "/treatment/aorto-koronarnoe-shuntirovanie",
        text: "Аорто-коронарное шунтирование",
      },
      {
        link: "/treatment/miniinvisivnoe-protezirovanie-klapanov",
        text: "Миниинвизивное протезирование клапанов",
      },
      {
        link: "/treatment/implantacia-kardiostimulyatorov",
        text: "Имплантация кардиостимуляторов",
      },
      {
        link: "/treatment/karotidnaya-endarterektomiya",
        text: "Каротидная эндартерэктомия",
      },
      {
        link: "/treatment/radiochastotnaya-ablyaciya",
        text: "Радиочастотная абляция",
      },
      {
        link: "/treatment/transkatetornaya-implantaciya-aortalnogo-klapana",
        text: "Транскатетерная имплантация аортального клапана",
      },
      {
        
      }
    ],
  };

  const diagnos = {
    mainLink: {
      link: "/diagnostics",
      text: "Диагностика",
    },
    links: [
      {
        link: "/diagnostics/coronarographia",
        text: "Коронарография",
      },
      {
        link: "/diagnostics/ateroskleros",
        text: "Атеросклероз",
      },
    ],
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
            <li className="menu__item">
              <a href="/" className="menu__link">
                Главная
              </a>
            </li>
            <li className="menu__item">
              <a href="/about-us" className="menu__link">
                О нас
              </a>
            </li>
            <li className="menu__item">
              <a href="/treatment" className="menu__link">
                Лечение
              </a>
            </li>
            <li className="menu__item">
              <a href="/diagnostics" className="menu__link">
                Диагностика
              </a>
            </li>
            <li className="menu__item">
              <a href="/team" className="menu__link">
                Команда
              </a>
            </li>
            <li className="menu__item">
              <a href="/contacts" className="menu__link">
                Контакты
              </a>
            </li>
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
