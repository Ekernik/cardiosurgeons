import Link from 'next/link';
import DropButtonForPatient from './DropButtonForPatient';

export default function DropButtonAboutUs({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        О нас
      </button>
      <div className={`${styles.dropdown__menu} ${styles.about__grid}`}>
        <Link href='/about-us'>
          <a className={styles.link__button}>О клинике</a>
        </Link>
        <Link href='/structure'>
          <a className={styles.link__button}>Структура центра</a>
        </Link>
        <Link href='/regions'>
          <a className={styles.link__button}>Приемы врачей в&nbsp;регионах</a>
        </Link>
        <DropButtonForPatient styles={styles} />
        {/* <Link href="/news">
          <a className={styles.link__button}>Новости</a>
        </Link> */}
        <Link href='/feedback'>
          <a className={styles.link__button}>Отзывы</a>
        </Link>
      </div>
    </div>
  );
}
