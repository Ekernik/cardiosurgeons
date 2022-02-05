import Link from 'next/link';

export default function DropButtonForPatient({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <p
        className={`${styles.link} ${styles.link__button} ${styles.link__button___disabled}`}
        data-dropdown-button
      >
        Информация для пациентов
      </p>
      <div
        className={`${styles.dropdown__menu} ${styles.dropdown__menu___aside} ${styles.about__grid}`}
      >
        <Link href='/besplatnoe-lechenie-po-kvotam'>
          <a className={styles.link__button}>Бесплатное лечение по квотам</a>
        </Link>
        <Link href='/operacii-na-serdce'>
          <a className={styles.link__button}>Операции на сердце</a>
        </Link>
        <Link href='/kak-zapisatsya-k-kardiohirurgu'>
          <a className={styles.link__button}>Как записаться к кардиохирургу</a>
        </Link>
        <Link href='/protezirovanie-klapanov-chto-nuzhno-znat'>
          <a className={styles.link__button}>
            Протезирование клапанов: что нужно знать
          </a>
        </Link>
      </div>
    </div>
  );
}
