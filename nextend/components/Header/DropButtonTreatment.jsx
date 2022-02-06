import Link from '@/components/Link';
import { treatments } from '@/public/static/databases/links';

export default function DropButtonTreatment({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        <Link
          href='/treatment'
          text='Операции'
          classes={styles.button_link}
          data-dropdown-button
        />
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        {treatments.links.map((link, i) => {
          return (
            <Link
              key={Date.now() + i}
              href={link.link}
              text={link.text}
              classes={styles.link__button}
            />
          );
        })}
      </div>
    </div>
  );
}
