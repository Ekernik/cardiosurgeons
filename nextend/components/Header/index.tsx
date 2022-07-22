import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Nav from './Nav';
import FormModal from '@/components/FormModal';
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

  const [showFormModal, setShowFormModal] = useState(false);
  const openFormModal = () => setShowFormModal(true);
  const handleClose = () => setShowFormModal(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Brand openFormModal={openFormModal} />
        <BurgerMenu />
      </div>
      <Nav />
      {showFormModal && <FormModal handleClose={handleClose} />}
    </header>
  );
};

export default Header;
