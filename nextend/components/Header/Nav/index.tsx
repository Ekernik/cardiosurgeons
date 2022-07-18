import LinkItem from '../LinkItem';
import {
  DropdownAboutUs,
  DropdownTreatment,
  DropdownDiagnostics,
  DropdownDiseases,
} from '../Dropdown';
import styles from './styles.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={`container ${styles.header__menu}`}>
        <LinkItem link='/' text='Главная' />
        <DropdownAboutUs />
        <DropdownDiseases />
        <DropdownDiagnostics />
        <DropdownTreatment />
        <LinkItem link='/team' text='Команда' />
        <LinkItem link='/contacts' text='Контакты' />
      </ul>
    </nav>
  );
};

export default Nav;
