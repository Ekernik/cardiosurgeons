import { useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
import Nav from './Nav';
import FloatingContacts from '@/components/FloatingContacts';
import Brand from './Brand';
import {
  mountScrollListener,
  mountDropdownListeners,
} from '@/helpers/header_helper';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  useEffect(() => {
    mountDropdownListeners();
    mountScrollListener();
  }, []);

  return (
    <header className={styles.header}>
      <div id='curtain' />
      <div className={`container ${styles.header__container}`}>
        <Brand />
        <BurgerMenu />
      </div>
      <Nav />
      <FloatingContacts />
    </header>
  );
};

export default Header;
