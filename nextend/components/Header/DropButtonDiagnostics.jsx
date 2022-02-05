import Link from 'next/link';

export default function DropButtonDiagnostics({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        Диагностика
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        <Link href='/diagnostics/coronarographia'>
          <a className={styles.link__button}>Коронарография</a>
        </Link>
        <Link href='/diagnostics/computer-tomography'>
          <a className={styles.link__button}>Компьютерная томография</a>
        </Link>
      </div>
    </div>
  );
}
