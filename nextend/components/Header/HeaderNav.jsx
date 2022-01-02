import LinkItem from './LinkItem';
import DropButtonAboutUs from './DropButtonAboutUs';
import DropButtonTreatment from './DropButtonTreatment';
import styles from '@/styles/dropdown.module.scss';

export default function HeaderNav() {
  return (
    <nav className="header__nav">
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
    </nav>
  );
}
