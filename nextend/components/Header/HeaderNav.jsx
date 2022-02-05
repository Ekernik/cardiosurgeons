import LinkItem from './LinkItem';
import DropButtonAboutUs from './DropButtonAboutUs';
import DropButtonTreatment from './DropButtonTreatment';
import styles from '@/styles/dropdown.module.scss';
import DropButtonDiagnostics from './DropButtonDiagnostics';
import DropButtonDiseases from './DropButtonDiseases';

export default function HeaderNav() {
  return (
    <nav className='header__nav'>
      <div className='container flex overflow'>
        <ul className='header__menu'>
          <LinkItem link='/' text='Главная' />
          <DropButtonAboutUs styles={styles} />
          <DropButtonDiseases styles={styles} />
          <DropButtonDiagnostics styles={styles} />
          <DropButtonTreatment styles={styles} />
          <LinkItem link='/team' text='Команда' />
          <LinkItem link='/contacts' text='Контакты' />
        </ul>
      </div>
    </nav>
  );
}
