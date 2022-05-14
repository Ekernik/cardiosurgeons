import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Арзамас - 22 декабря 2021 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Арзамас, ул. Матросова, д. 13';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Арзамас';
  const price = '2000 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOSs0B';
  const mapsGeometry = [55.401693, 43.843023];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Арзамас.',
    description:
      'Сердечно-сосудистый хирург из Петербурга. Прием пациентов и бесплатное лечение по федеральным квотам. ',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-arzamas-09.02.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `09 февраля`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от {dateOfNews} года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              09 февраля 2022 г. – г. Арзамас – приглашаем пациентов
              на&nbsp;прием к&nbsp;сердечно-сосудистому хирургу
            </h3>
            <p>
              В&nbsp;МЦ «ЛОР+» будет производить прием и&nbsp;консультацию
              специалист Центра кардиохирургии и&nbsp;кардиологии ВМТ
              им.&nbsp;Н.И.Пирогова, сердечно-сосудистый хирург, кандидат
              медицинских наук Балахонов Василий Васильевич.
            </p>
            <p>
              Для отбора на&nbsp;дальнейшее оказание бесплатной
              высокотехнологичной медицинской помощи по&nbsp;федеральным квотам
              и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются пациенты
              со&nbsp;следующими заболеваниями органов сердечно-сосудистой
              системы:
            </p>
            <ul>
              <li>Клапанные пороки сердца</li>
              <li>Ишемическая болезнь сердца</li>
              <li>Патология периферических сосудов</li>
              <li>Патология аорты</li>
            </ul>
            <h3>При себе пациенту необходимо иметь:</h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
            <h3>Стоимость приёма — {price}.</h3>
            <ButtonCTA styling={local_styles.cta} text='Записаться на прием' />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться: <strong>09 февраля 2022&nbsp;г.</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href={mapsLink}
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                {addressOfVisit}
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
            </p>
            <Map position={mapsGeometry} />
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
