import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Ставрополь - 11 ноября 2021 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const mapPosition = [45.04419, 41.985747];
  const SEODetails = {
    title: 'Прием сердечно-сосудистого хирурга в городе Ставрополь',
    description:
      'Обследование для кардиохирургических больных. Лечение по федеральным квотам и ОМС.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stavropol-02-11-2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{ title: '11 ноября', pretitle: 'город Ставрополь' }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>новость от 6 октября 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              Приглашаем на приём пациентов с&nbsp;заболеваниями органов
              сердечно-сосудистой системы:
            </h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
              <li>Нарушения ритма сердца</li>
            </ul>
            <p>
              Для отбора на дальнейшее оказание <strong>бесплатной</strong>{' '}
              высокотехнологичной медицинской помощи по&nbsp; федеральным квотам
              и&nbsp;ОМС в&nbsp;Санкт-Петербурге.
            </p>
            <p>
              Приём будет проводить врач сердечно-сосудистый хирург Центра
              кардиохирургии КВМТ им.&nbsp;Н.И.Пирогова СПбГУ
              (г.&nbsp;Санкт-Петербург) кандидат медицинских наук Балахонов
              Василий Васильевич 11 ноября 2021&nbsp;г. в&nbsp;
              <strong>Ставропольском Краевом реабилитационном Центре</strong>.
            </p>
            <h3>При себе необходимо иметь следующие копии документов:</h3>
            <ul>
              <li>паспорт (1-я страница и&nbsp;прописка)</li>
              <li>полис ОМС (с&nbsp;двух сторон)</li>
              <li>СНИЛС</li>
            </ul>
            <h3>А также медицинские документы:</h3>
            <h4>
              Обследования для кардиохирургических больных (ИБС, клапаны,
              аорта):
            </h4>
            <ul>
              <li>ЭКГ (описание)</li>
              <li>Эхокардиография</li>
              <li>Осмотр кардиолога (по&nbsp;возможности)</li>
              <li>Коронарография (по&nbsp;возможности)</li>
              <li>
                При наличии сопутствующих заболеваний - консультации
                врачей-специалистов (по&nbsp;возможности)
              </li>
            </ul>
            <h4>
              При сосудистой патологии, дополнительно к&nbsp;вышесказанному:
            </h4>
            <ul>
              <li>
                Дуплексное сканирование брахиоцефальных артерий, аорты, артерий
                нижних конечностей.
              </li>
            </ul>
            <h4>
              При нарушении ритма сердца, дополнительно к&nbsp;вышенаписанному:
            </h4>
            <ul>
              <li>Суточный мониторинг ЭКГ по&nbsp;Холтеру.</li>
            </ul>
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </div>
        <h3>Приём бесплатный.</h3>
        <ButtonCTA
          styling={`greetings__cta ${local_styles.cta}`}
          text='Записаться на прием'
        />
        <div className='marked-container'>
          <p>
            Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова выполняются
            бесплатно в&nbsp;рамках федеральных квот на&nbsp;высокотехнологичную
            медицинскую помощь, а&nbsp;также по&nbsp;ОМС.
          </p>
          <br />
          <p>
            Для госпитализации в&nbsp;Клинику&nbsp;ВМТ им.&nbsp;Н.И.Пирогова
            форма 057-у не&nbsp;требуется.
          </p>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться:{' '}
              <strong>11&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{'  '}
              <a
                href='https://yandex.ru/maps/-/CCUmiVqMWD'
                target='_blank'
                className='article__link'
                rel='noreferrer noopenner'
              >
                г.&nbsp;Ставрополь, ул.&nbsp;Спартака, д.&nbsp;2 (вход
                со&nbsp;стороны ул.&nbsp;Голенева)
              </a>
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
            </p>
            <Map position={mapPosition} />
          </div>
        </div>
        <hr />
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
