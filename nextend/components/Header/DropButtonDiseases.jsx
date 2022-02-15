import Link from '@/components/Link';

export default function DropButtonDiseases({ styles }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <button className={styles.link} data-dropdown-button>
        Заболевания
      </button>
      <div className={`${styles.dropdown__menu} ${styles.treatment__grid}`}>
        <div className={styles.dropdown} data-dropdown>
          <p
            className={`${styles.link} ${styles.link__button} ${styles.link__button___disabled}`}
            data-dropdown-button
          >
            Болезни сердца
          </p>
          <div
            className={`${styles.dropdown__menu} ${styles.dropdown__menu___aside} ${styles.about__grid}`}
          >
            <Link
              href='/diagnostics/ateroskleros'
              text='Атеросклероз'
              classes={styles.link__button}
            />
          </div>
        </div>
        <div className={styles.dropdown} data-dropdown>
          <p
            className={`${styles.link} ${styles.link__button} ${styles.link__button___disabled}`}
            data-dropdown-button
          >
            Нарушения ритма сердца
          </p>
          <div
            className={`${styles.dropdown__menu} ${styles.dropdown__menu___aside} ${styles.about__grid}`}
          >
            <Link
              href='/diseases/sindrom-wpw'
              text='Синдром Вольфа–Паркинсона–Уайта'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/avurt'
              text='Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ)'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/fibrilyaciya-predcerdiy'
              text='Фибрилляция предсердий (ФП)'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/zheludochkovaya-tahikardiya'
              text='Желудочковая тахикардия (ЖТ)'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/trepetanie-predserdiy'
              text='Трепетание предсердий'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/ekstrasistoliya'
              text='Экстрасистолия'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/vnezapnaya-serdechnaya-smert'
              text='Внезапная сердечная смерть (ВСС)'
              classes={styles.link__button}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
