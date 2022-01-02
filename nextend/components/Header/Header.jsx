import Link from 'next/link';
import { useEffect } from 'react';
import HeaderBrand from './HeaderBrand';
import BurgerMenu from './BurgerMenu';
import HeaderNav from './HeaderNav';
import FloatingContacts from '../FloatingContacts';
import Button from '../ButtonCTA';
import styles from '@/styles/dropdown.module.scss';
import { listenToScroll } from './watchScroll.js';

const mountDropdownListeners = () => {
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
};

export default function Header() {
  useEffect(() => {
    mountDropdownListeners();
    listenToScroll();
  }, []);

  return (
    <header className="header" onLoad={listenToScroll}>
      <div className="container header__container">
        <div className="header__navbar">
          <HeaderBrand />
          <div className="header__phone">
            <Link href="tel:+79992380136">
              <a>+7 (999) 238-01-36</a>
            </Link>
          </div>
          <Button styling="header__cta" text="Записаться на прием" />
        </div>
        <BurgerMenu />
      </div>
      <HeaderNav />
      <FloatingContacts />
    </header>
  );
}
