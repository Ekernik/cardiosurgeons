import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import './scroll.js';
import FloatingContacts from '../FloatingContacts';
import Button from '../ButtonCTA';
import logo from '../../public/static/images/logo_1.png';
import listenToScroll from './scroll.js';
import LinkItem from './LinkItem';
import DropButtonAboutUs from './DropButtonAboutUs.jsx';
import DropButtonTreatment from './DropButtonTreatment.jsx';
import styles from './dropdown.module.scss';

export default function Header() {
  useEffect(() => {
    document.addEventListener('click', (e) => {
      let currentDropdown;
      const isDropdownButton = e.target.matches('[data-dropdown-button]');
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
        return;

      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle(styles.active);
      }

      document
        .querySelectorAll(`[data-dropdown].${styles.active}`)
        .forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove(styles.active);
        });
    });
  }, []);

  let handleClick = () => {
    const headerBurger = document.querySelector('.header__menu-burger');
    const headerMenu = document.querySelector('.header__burger-nav');
    const body = document.querySelector('body');
    body.classList.toggle('fixed-page');
    headerMenu.classList.toggle('menu--opened');
    headerBurger.classList.toggle('menu--opened');
  };
  let handleClose = () => {
    const body = document.querySelector('body');
    body.classList.remove('fixed-page');
  };

  return (
    <header className="header" onLoad={listenToScroll}>
      <div className="container header__container">
        <nav className="header__navbar">
          <div className="header__brand">
            <Link href="/">
              <a>
                <div className="brand__logo">
                  <Image
                    src={logo}
                    alt="Логотип Центра кардиохирургии и интервенционной кардиологии"
                    height={40}
                    width={40}
                    layout="intrinsic"
                  />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="brand__name">
                Центр кардиохирургии и&nbsp;интервенционной кардиологии <br />
                клиники ВМТ им.&nbsp;Н.И.Пирогова&nbsp;СПбГУ
              </a>
            </Link>
          </div>
          <div className="header__phone">
            <Link href="tel:+79992380136">
              <a>+7 (999) 238-01-36</a>
            </Link>
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
            <LinkItem click={handleClose} link="/" text="Главная" />
            <LinkItem click={handleClose} link="/about-us" text="О клинике" />
            <LinkItem click={handleClose} link="/treatment" text="Лечение" />
            <LinkItem
              click={handleClose}
              link="/diagnostics"
              text="Диагностика"
            />
            <LinkItem click={handleClose} link="/team" text="Команда" />
            <LinkItem click={handleClose} link="/contacts" text="Контакты" />
            <LinkItem click={handleClose} link="/feedback" text="Отзывы" />
          </ul>
        </nav>
      </div>
      <div className="header__nav">
        <div className="container flex overflow">
          <ul className="header__menu">
            <LinkItem link="/" text="Главная" />
            <DropButtonAboutUs styles={styles} />
            <DropButtonTreatment styles={styles} />
            <LinkItem link="/diagnostics" text="Диагностика" />
            <LinkItem link="/team" text="Команда" />
            <LinkItem link="/contacts" text="Контакты" />
          </ul>
        </div>
      </div>
      <FloatingContacts />
    </header>
  );
}
