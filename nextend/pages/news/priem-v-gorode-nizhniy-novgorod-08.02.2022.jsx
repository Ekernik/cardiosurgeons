import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Greetings from '../../components/Greetings';
import Footer from '../../components/Footer';
import Contacts from '../../components/Contacts';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import DoctorCard from '../../components/DoctorCard';
import img_doctor from '../../public/static/images/doctors/doctor_Balahonov.jpg';
import ButtonCTA from '../../components/ButtonCTA';

// Нижний Новгород - 08 февраля 2022
export default function Announcement() {
  const titleContent =
    'Кардиохирург в Нижнем Новгороде. Сердечно-сосудистая хирургия';
  const descriptionContent =
    'Прием специалистов клиники кардиохирургии и кардиологии ВМТ им. Н.И. Пирогова';
  const linkToArticle =
    'https://heartteamspb.com/news/priem-v-gorode-nizhniy-novgorod-08.02.2022';
  const dayOfVisit = '08';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Нижний Новгород, ул. Краснодонцев д. 19, к. 1';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Нижний Новгород';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const price = '2500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOv7WD';
  const mapsGeometry = [56.255322, 43.852258];

  return (
    <>
      <Head>
        <title>{titleContent}</title>
        <meta property='og:title' content={titleContent} />
        <meta name='description' content={descriptionContent} />
        <meta property='og:description' content={descriptionContent} />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://heartteamspb.com/static/images/bg-doctors.webp'
        />
        <meta property='og:url' content={linkToArticle} />
      </Head>
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <Greetings
          header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от {dateOfNews} года</h6>
            <h2 className='news__title'>
              Проводим отбор пациентов на&nbsp;бесплатное хирургическое лечение
              в&nbsp;Санкт-Петербурге. Прием состоится {dayOfVisit}{' '}
              {monthOfVisit} {yearOfVisit}&nbsp;г. в&nbsp;клинике «Александрия»
              (г.&nbsp;Нижний Новгород).
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>На прием приглашаются пациенты с:</p>
                <ul className='article__ul'>
                  <li className='article__li'>— Ишемической болезнью сердца</li>
                  <li className='article__li'>— Патологией аорты</li>
                  <li className='article__li'>— Клапанными пороками сердца</li>
                  <li className='article__li'>
                    — Патологией периферических сосудов
                  </li>
                  <li className='article__li'>— Другими патологиями</li>
                </ul>
                <p className='article__p'>
                  Чтобы попасть на прием к&nbsp;специалисту нашего Центра Вам
                  необходимо иметь с&nbsp;собой:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— паспорт</li>
                  <li className='article__li'>— полис ОМС</li>
                  <li className='article__li'>— СНИЛС</li>
                  <li className='article__li'>
                    — имеющиеся медицинские документы.
                  </li>
                </ul>
                <p className='article__p'>
                  Стоимость приёма <strong>{price}</strong>.
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
                  <Link href={doctorLink}>
                    <a className='article__link'>{doctorFullName}</a>
                  </Link>
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
                  Прием будет проводиться:{' '}
                  <strong>
                    {dayOfVisit}&#160;{monthOfVisit}&#160;{yearOfVisit}&#160;г.
                  </strong>
                </p>
                <p className='article__p'>
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
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: mapsGeometry,
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={mapsGeometry} />
                    <FullscreenControl />
                    <ZoomControl />
                  </Map>
                </YMaps>
                <p className='article__p'>
                  тел. для записи:{' '}
                  <a href='tel:+79992380136' className='article__link'>
                    8&nbsp;(999)&nbsp;238&#8209;01&#8209;36
                  </a>
                </p>
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
}
