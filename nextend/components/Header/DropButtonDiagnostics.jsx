import Link from '@/components/Link';

export default function DropButtonDiagnostics({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        Диагностика
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        <Link
          href='/diagnostics/coronarographia'
          text='Коронарография'
          classes={styles.link__button}
        />
        <Link
          href='/diagnostics/computer-tomography'
          text='Компьютерная томография'
          classes={styles.link__button}
        />
        <Link
          href='/diagnostics/stress-ehokardiographiya'
          text='Стресс-эхокардиография'
          classes={styles.link__button}
        />
        <Link
          href='/diagnostics/holterovskoe-monitorirovanie-ekg'
          text='Холтеровское мониторирование ЭКГ'
          classes={styles.link__button}
        />
        <Link
          href='/diagnostics/endokrinalnoe-elektrofizicheskoe-issledovanie-efi'
          text='Эндокардиальное электрофизиологическое исследование — ЭФИ'
          classes={styles.link__button}
        />
      </div>
    </div>
  );
}
