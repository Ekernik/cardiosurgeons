import { NextPage } from 'next';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Волхов - 21 декабря 2021 - Старосоцкая
const Announcement: NextPage = () => {
  const doctor = doctors[12];
  const mapPosition = [59.906458, 32.350507];
  const SEODetails = {
    title: 'Прием кардиолога в городе Волхов',
    description:
      'Лечение болезней сердца по ОМС и федеральным квотам в г. Волхов',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-volhov-21.12.2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '21 декабря', pretitle: 'город Волхов' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 15 декабря 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              21 декабря 2021&nbsp;г. в&nbsp;городе Волхове ведет прием
              кардиолог, кандидат медицинских наук из&nbsp;Санкт-Петербурга
              Старосоцкая&nbsp;М.В.
            </h3>
            <p>
              Отбор пациентов и&nbsp;дальнейшее направление на&nbsp;
              <strong>бесплатное</strong> хирургическое лечение
              в&nbsp;Петербурге будет проводиться в&nbsp;клинике «ВолховМед».
            </p>
            <p>
              Приглашаем пациентов со&nbsp;следующими заболеваниями органов
              сердечно-сосудистой системы:
            </p>
            <ul>
              <li>ИБС (ишемическая болезнь сердца)</li>
              <li>Нарушения ритма сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
              <li>Клапанные пороки сердца</li>
            </ul>
            <h3>
              Документы, необходимые для&nbsp;получения консультации специалиста
              нашего Центра кардиохирургии и&nbsp;интервенционной кардиологии
              Клиники высоких медицинских технологий им.&nbsp;Н.И.Пирогова:
            </h3>
            <ul>
              <li>полис ОМС</li>
              <li>паспорт</li>
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
              <strong>21&#160;декабря&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/maps/-/CCUyUOQT3B'
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                г.&nbsp;Волхов, Кировский&nbsp;пр., д.&nbsp;37
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
