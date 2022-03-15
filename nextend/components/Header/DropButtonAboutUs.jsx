import Link from '@/components/Link';
import DropButtonForPatient from './DropButtonForPatient';

export default function DropButtonAboutUs({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        О нас
      </button>
      <div className={`${styles.dropdown__menu} ${styles.about__grid}`}>
        <Link href='/about-us' text='О клинике' classes={styles.link__button} />
        <Link
          href='/structure'
          text='Структура центра'
          classes={styles.link__button}
        />
        <Link
          href='/regions'
          text='Приемы врачей в&nbsp;регионах'
          classes={styles.link__button}
        />
        <DropButtonForPatient styles={styles} />
        <Link href='/announcements' text='Новости' classes={styles.link__button} />
        <Link href='/feedback' text='Отзывы' classes={styles.link__button} />
      </div>
    </div>
  );
}
