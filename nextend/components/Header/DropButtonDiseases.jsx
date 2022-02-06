import Link from '@/components/Link';

export default function DropButtonDiseases({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        Заболевания
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        <Link
          href='/diagnostics/ateroskleros'
          text='Атеросклероз'
          classes={styles.link__button}
        />
      </div>
    </div>
  );
}
