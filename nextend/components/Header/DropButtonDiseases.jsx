import Link from 'next/link';

export default function DropButtonDiseases({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        Заболевания
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        <Link href='/diagnostics/ateroskleros'>
          <a className={styles.link__button}>Атеросклероз</a>
        </Link>
      </div>
    </div>
  );
}
