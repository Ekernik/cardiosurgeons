import Link from '@/components/Link';
import styles from './styles.module.scss';

export const DropdownDiseases: React.FC = () => {
  return (
    <li className={styles.dropdown} data-dropdown>
      <button className={styles.button_link} data-dropdown-button>
        <Link
          href='/diseases'
          text='Заболевания'
          classes={styles.link}
          data-dropdown-button
        />
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
            <Link
              href='/diseases/ishemicheskaya-bolezn-serdca'
              text='Ишемическая болезнь сердца (ИБС)'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/stenoz-vnutrennei-sonnoi-arterii'
              text='Стеноз внутренней сонной артерии'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/anevrizma-i-rassloenie-aorti'
              text='Аневризма и расслоение аорты'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/poroki-serdca'
              text='Пороки сердца'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/ishemicheskaya-kardiomiopatiya'
              text='Ишемическая кардиомиопатия'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/dilatacionnaya-kardiomiopatiya'
              text='Дилатационная кардиомиопатия'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/gipertroficheskaya-kardiomiopatiya'
              text='Гипертрофическая кардиомиопатия'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/aortalniy-stenoz'
              text='Аортальный стеноз'
              classes={styles.link__button}
            />
            <Link
              href='/diseases/mitralniy-stenoz'
              text='Митральный стеноз'
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
    </li>
  );
};
