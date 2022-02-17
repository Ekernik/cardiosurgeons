import Link from 'next/link';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import DoctorCard from '@/components/DoctorCard';
import img_doctor from '@/public/static/images/doctors/doctor_Pyagai.jpg';
import ButtonCTA from '@/components/ButtonCTA';

// Желехногорск - 10 марта 2022
export default function Announcement() {
  const dayOfVisit = '10';
  const monthOfVisit = 'марта';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Железногорск,  Алексеевский проезд д. 1';
  const dateOfNews = '17 февраля 2022';
  const city = 'город Железногорск';
  const doctorShortName = 'Пягай В.А.';
  const doctorFullName = 'Пягай Виктор Александрович';
  const doctorLink = '/team/doctor_pyagai';
  const doctorTitles = [
    'Cердечно-сосудистый хирург,',
    'интервенционный радиолог',
  ];
  const price = '1500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RSU7dB';
  const mapsGeometry = [52.346086, 35.337819];
  const SEODetails = {
    title: 'Прием кардиохирурга - Железногорск',
    description: `${city} - ${dayOfVisit} ${monthOfVisit} ${yearOfVisit} - Принимает кардиохирург из Петербурга - ${doctorFullName}. Записывайтесь на прием.`,
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-zheleznogorsk-10.03.2022',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <Greetings
          header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <p className='news__date'>Новость от {dateOfNews} года</p>
            <h2 className='news__title'>
              {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г. в&nbsp;городе
              Железногорске в Медицинском центре «Матис» принимает пациентов
              сердечно-сосудистый хирург из&nbsp;Санкт-Петербурга{' '}
              {doctorShortName}
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  <strong>
                    На прием приглашаем пациентов со&nbsp;следующими
                    заболеваниями органов сердечно-сосудистой системы:
                  </strong>
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — Ишемическая болезнь сердца&nbsp;(ИБС)
                  </li>
                  <li className='article__li'>— Аневризма аорты</li>
                  <li className='article__li'>
                    — Окклюзии и&nbsp;стенозы магистральных артерий
                  </li>
                  <li className='article__li'>— Иная артериальная патология</li>
                </ul>
                <p className='article__p'>
                  Для приема в МЦ «Матис» пациенту необходимы документы:
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
                <div className='marked-container'>
                  <p className='article__p'>
                    Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
                    выполняются бесплатно в&nbsp;рамках федеральных квот
                    на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
                    по&nbsp;ОМС.
                  </p>
                </div>
              </div>
              <div className='news__help-flex'>
                <p
                  className='article__p'
                  style={{ textAlign: 'center', flex: 'none' }}
                >
                  принимает специалист Центра <br />
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
                    rel='noreferrer'
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
                    +7&nbsp;(999)&nbsp;238&#8209;01&#8209;36
                  </a>
                  <br />
                  тел. МДЦ «Матис»:{' '}
                  <a href='tel:+74714845809' className='article__link'>
                    +7&nbsp;(47148)&nbsp;4&#8209;58&#8209;09
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
