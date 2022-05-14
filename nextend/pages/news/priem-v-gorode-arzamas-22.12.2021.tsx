import { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Арзамас - 22 декабря 2021 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const mapPosition = [55.401693, 43.843023];
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург в городе Арзамас. Кардиохирургия',
    description:
      'Осмотр пациентов с заболеваниями сердца. Прием кардиохирурга, лечение по федеральной квоте и ОМС.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-arzamas-22.12.2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '22 декабря', pretitle: 'город Арзамас' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 15 декабря 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              22 декабря 2021 – г. Арзамас – приглашаем пациентов на&nbsp;прием
              к&nbsp;сердечно-сосудистому хирургу
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
              Прием будет проводиться:{' '}
              <strong>22&#160;декабря&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/maps/-/CCUyUOSs0B'
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                г.&nbsp;Арзамас, ул.&nbsp;Матросова, д.&nbsp;13
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
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
