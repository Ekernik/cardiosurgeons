import Link from '@/components/Link';

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
        <Link
          href='/besplatnoe-lechenie-po-kvotam'
          text='Бесплатное лечение по квотам'
          classes={styles.link__button}
        />
        <Link
          href='/operacii-na-serdce'
          text='Операции на сердце'
          classes={styles.link__button}
        />
        <Link
          href='/kak-zapisatsya-k-kardiohirurgu'
          text='Как записаться к кардиохирургу'
          classes={styles.link__button}
        />
        <Link
          href='/protezirovanie-klapanov-chto-nuzhno-znat'
          text='Протезирование клапанов: что нужно знать'
          classes={styles.link__button}
        />
        <Link
          href='/aritmiya-serdca'
          text='Аритмия сердца'
          classes={styles.link__button}
        />
      </div>
    </div>
  );
}
