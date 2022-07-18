import {
  changeSection,
  openBurgerMenu,
  removeNoScroll,
} from '@/helpers/header_helper';
import LinkItem from '../LinkItem';
import styles from './styles.module.scss';

const BurgerMenu: React.FC = () => {
  return (
    <>
      <div onClick={openBurgerMenu} className={styles.burger}>
        <div className={styles.burger__lines}>
          <span></span>
        </div>
      </div>
      <nav className={styles.burger__nav}>
        {/* Главная */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={removeNoScroll}
            link='/'
            text='Главная'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('middle')}
            text='О нас'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('diseases')}
            text='Заболевания'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('diagnostics')}
            text='Диагностика'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/treatment'
            text='Операции'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/team'
            text='Команда'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/contacts'
            text='Контакты'
            isBurgerItem
          />
        </ul>

        {/* О нас */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('top')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/about-us'
            text='О клинике'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/structure'
            text='Структура центра'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/regions'
            text='Приемы врачей в регионах'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('bottom')}
            text='Информация для пациентов'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/announcements'
            text='Новости'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/feedback'
            text='Отзывы'
            isBurgerItem
          />
        </ul>

        {/* Информация для пациента */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('middle')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/besplatnoe-lechenie-po-kvotam'
            text='Бесплатное лечение по квотам'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/operacii-na-serdce'
            text='Операции на сердце'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/kak-zapisatsya-k-kardiohirurgu'
            text='Как записаться к кардиохирургу'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/protezirovanie-klapanov-chto-nuzhno-znat'
            text='Протезирование клапанов: что нужно знать'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/aritmiya-serdca'
            text='Аритмия сердца'
            isBurgerItem
          />
        </ul>

        {/* Заболевания */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('top')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases'
            text='О заболевания сердца и органов сердечно-сосудистой системы'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('heart-diseases')}
            text='Болезни сердца'
            isBurgerItem
          />
          <LinkItem
            click={() => changeSection('heart-rythm')}
            text='Нарушения ритма сердца'
            isBurgerItem
          />
        </ul>

        {/* Болезни сердца */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('diseases')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/ateroskleros'
            text='Атеросклероз'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/ishemicheskaya-bolezn-serdca'
            text='Ишемическая болезнь сердца (ИБС)'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/stenoz-vnutrennei-sonnoi-arterii'
            text='Стеноз внутренней сонной артерии'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/anevrizma-i-rassloenie-aorti'
            text='Аневризма и расслоение аорты'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/poroki-serdca'
            text='Пороки сердца'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/ishemicheskaya-kardiomiopatiya'
            text='Ишемическая кардиомиопатия'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/dilatacionnaya-kardiomiopatiya'
            text='Дилатационная кардиомиопатия'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/gipertroficheskaya-kardiomiopatiya'
            text='Гипертрофическая кардиомиопатия'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/aortalniy-stenoz'
            text='Аортальный стеноз'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/mitralniy-stenoz'
            text='Митральный стеноз'
            isBurgerItem
          />
        </ul>

        {/* Нарушения ритма сердца */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('diseases')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/sindrom-wpw'
            text='Синдром Вольфа–Паркинсона–Уайта'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/avurt'
            text='Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ)'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/fibrilyaciya-predcerdiy'
            text='Фибрилляция предсердий (ФП)'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/zheludochkovaya-tahikardiya'
            text='Желудочковая тахикардия (ЖТ)'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/trepetanie-predserdiy'
            text='Трепетание предсердий'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/ekstrasistoliya'
            text='Экстрасистолия'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diseases/vnezapnaya-serdechnaya-smert'
            text='Внезапная сердечная смерть (ВСС)'
            isBurgerItem
            // style={{ textAlign: 'center' }}
          />
        </ul>

        {/* Диагностика */}
        <ul className={styles.burger__menu}>
          <LinkItem
            click={() => changeSection('top')}
            text='Назад'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/coronarographia'
            text='Коронарография'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/computer-tomography'
            text='Компьютерная томография'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/stress-ehokardiographiya'
            text='Cтресс-эхокардиография'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/holterovskoe-monitorirovanie-ekg'
            text='Холтеровское мониторирование ЭКГ'
            isBurgerItem
          />
          <LinkItem
            click={removeNoScroll}
            link='/diagnostics/endokrinalnoe-elektrofizicheskoe-issledovanie-efi'
            text='Эндокардиальное электрофизиологическое исследование — ЭФИ'
            isBurgerItem
          />
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
