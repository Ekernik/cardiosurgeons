import Link from '@/components/Link';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import img_doctor from '@/images/doctors/doctor_Kappushev.webp';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

// Черкесск - 25 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Черкесск, ул. Красногорская, д. 1/36';
  const doctorFullName = 'Капушев Руслан Юсуфович';
  const doctorLink = '/team/doctor_kappushev';
  const doctorTitles = [
    'Cердечно-сосудистый хирург,',
    'интервенционный радиолог',
  ];
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
      <div className='App'>
        <div id='curtain' />
        <Header />
        <Greetings
          header={{
            title: '25 апреля 2022',
            pretitle: 'город Черкесск',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              25 апреля – МЦ «Доктор М» (г. Черкесск) - прием
              сердечно-сосудистого хирурга Капушева Руслана Юсуфовича
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  На прием приглашаем пациентов со следующими заболеваниями
                  сердца:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— ИБС</li>
                  <li className='article__li'>
                    — Аневризма и расслоение аорты
                  </li>
                  <li className='article__li'>
                    — Окклюзии магистральных артерий
                  </li>
                  <li className='article__li'>
                    — Стенозы магистральных артерий
                  </li>
                  <li className='article__li'>— Иная артериальная патология</li>
                </ul>
                <p className='article__p'>
                  Для того, чтобы получить консультацию нашего кардиохирурга,
                  Вам необходимо с собой иметь следующие документы:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Паспорт</li>
                  <li className='article__li'>— Полис ОМС</li>
                  <li className='article__li'>— СНИЛС</li>
                  <li className='article__li'>
                    — имеющиеся медицинские документы
                  </li>
                </ul>
                <p className='article__p'>
                  Стоимость приёма <strong>бесплатно</strong>.
                </p>
                <ButtonCTA
                  styling='greetings__cta news__cta'
                  text='Записаться на прием'
                />
              </div>
              <div className='news__help-flex'>
                <p
                  className='article__p'
                  style={{ textAlign: 'center', flex: 'none' }}
                >
                  прием ведет: <br />
                  <Link href={doctorLink} text={doctorFullName} />
                </p>
                <DoctorCard
                  className='news__doctor-card'
                  imgSrc={img_doctor}
                  imgAlt={`Доктор ${doctorFullName}`}
                  title={doctorFullName}
                  subtitle={doctorTitles}
                  link={doctorLink}
                  showMore={true}
                />
              </div>
            </div>
            <hr />
            <div className='news__main-flex'>
              <div className='news__help-flex'>
                <p className='article__p'>
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
                <Map position={mapsGeometry} />
                <PhoneLink
                  phoneNumber='+7 (999) 238-01-36'
                  text='тел. для записи: '
                />
              </div>
            </div>
            <hr />
          </div>
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Announcement;
