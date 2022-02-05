import Link from 'next/link';
import { treatments } from '@/public/static/databases/links';

export default function DropButtonTreatment({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        <Link href="/treatment">
          <a className={styles.button_link} data-dropdown-button>
            Операции
          </a>
        </Link>
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        {treatments.links.map((link, i) => {
          return (
            <Link href={link.link} key={Date.now() + i}>
              <a className={styles.link__button}>{link.text}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
