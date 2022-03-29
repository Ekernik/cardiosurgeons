import Link from '@/components/Link';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import img_doctor from '@/images/doctors/doctor_Kim.webp';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

// Великие Луки - 11 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Великие Луки, ул. Лизы Чайкиной, д. 23';
  const doctorFullName = 'Ким Глеб Ирламович';
  const doctorLink = '/team/doctor_kim';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUKAL-D';
  const mapsGeometry = [56.349495, 30.511027];

  const SEODetails = {
    title: 'Прием кардиохирурга в городе Великие Луки.',
    description:
      'Диагностика и лечение кардиохирургических заболеваний в городе Великие Луки. Бесплатное лечение по ОМС и квотам.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-velikie-luki-11.04.2022',
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
            title: '11 апреля 2022',
            pretitle: 'город Великие Луки',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              11 апреля 2022 г. в городе Великие Луки принимает пациентов
              сердечно-сосудистый хирург из Санкт-Петербурга
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  Прием пациентов будет осуществляться в МЦ «Медтайм» с
                  дальнейшим направлением пациентов на БЕСПЛАТНОЕ лечение в
                  Санкт-Петербурге.
                </p>
                <p className='article__p'>
                  Внимание: в апреле 2022 года прием нашего специалиста,
                  сердечно-сосудистого хирурга, кандидата медицинских наук, Ким
                  Глеба Ирламовича будет проводиться только 11 апреля.
                  Записывайтесь!
                </p>
                <p className='article__p'>
                  При себе пациенту необходимо иметь:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Паспорт</li>
                  <li className='article__li'>— Полис ОМС</li>
                  <li className='article__li'>
                    — Страховой номер индивидуального лицевого счёта, СНИЛС.{' '}
                  </li>
                  <li className='article__li'>— медицинские документы</li>
                </ul>
                <p className='article__p'>
                  Важно: мы приглашаем на прием людей с заболеваниями:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Ишемическая болезнь сердца</li>
                  <li className='article__li'>— Патология аорты</li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                  <li className='article__li'>— Клапанные пороки сердца</li>
                </ul>
                <p className='article__p'>
                  По итогам обследования нашим специалистом можно будет получить
                  направление на{' '}
                  <Link
                    href='/besplatnoe-lechenie-po-kvotam'
                    text='бесплатное лечение по квотам'
                  />{' '}
                  и ОМС.
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
