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

// Черкесск - 25 апреля 2022 - Каппушев
const Announcement: NextPage = () => {
  const doctor = doctors[7];
  const addressOfVisit = 'г. Черкесск, ул. Красногорская, д. 1/36';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RWedxB';
  const mapsGeometry = [44.208295, 42.043796];
  const SEODetails = {
    title: 'Прием сердечно-сосудистого хирурга в городе Черкесске.',
    description:
      'Выездной прием кардиохирурга из Санкт-Петербурга в городе Черкесске. Дата: 25 апреля 2022 года.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-cherkessk-25.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{
          title: '25 апреля 2022',
          pretitle: 'город Черкесск',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              25 апреля – МЦ «Доктор М» (г. Черкесск) - прием
              сердечно-сосудистого хирурга Капушева Руслана Юсуфовича
            </h3>
            <p>
              На прием приглашаем пациентов со следующими заболеваниями сердца:
            </p>
            <ul>
              <li>ИБС</li>
              <li>Аневризма и расслоение аорты</li>
              <li>Окклюзии магистральных артерий</li>
              <li>Стенозы магистральных артерий</li>
              <li>Иная артериальная патология</li>
            </ul>
            <h3>
              Для того, чтобы получить консультацию нашего кардиохирурга, Вам
              необходимо с собой иметь следующие документы:
            </h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы</li>
            </ul>
            <h3>Стоимость приёма — бесплатно.</h3>
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
              Прием будет проводиться по адресу:{' '}
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
