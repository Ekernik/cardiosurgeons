import Link from 'next/link';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import img_doctor from '@/public/static/images/doctors/doctor_Balahonov.jpg';

// Арзамас - 22 декабря 2021
export default function Announcement() {
  const dayOfVisit = '09';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Арзамас, ул. Матросова, д. 13';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Арзамас';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
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
      <div id='curtain' />
      <div className='App'>
        <Header />
        <Greetings
          header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от {dateOfNews} года</h6>
            <h2 className='news__title'>
              {dayOfVisit} {monthOfVisit} {yearOfVisit} – г. Арзамас –
              приглашаем пациентов на&nbsp;прием к&nbsp;сердечно-сосудистому
              хирургу
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  {dayOfVisit} {monthOfVisit} в&nbsp;МЦ «ЛОР+» будет производить
                  прием и&nbsp;консультацию специалист Центра кардиохирургии
                  и&nbsp;кардиологии ВМТ им.&nbsp;Н.И.Пирогова,
                  сердечно-сосудистый хирург, кандидат медицинских наук
                  Балахонов Василий Васильевич.
                </p>
                <p className='article__p'>
                  Для отбора на&nbsp;дальнейшее оказание бесплатной
                  высокотехнологичной медицинской помощи по&nbsp;федеральным
                  квотам и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются
                  пациенты со&nbsp;следующими заболеваниями органов
                  сердечно-сосудистой системы:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Клапанные пороки сердца</li>
                  <li className='article__li'>— Ишемическая болезнь сердца</li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                  <li className='article__li'>— Патология аорты</li>
                </ul>
                <p className='article__p'>
                  При себе пациенту необходимо иметь:
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
                    {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г.
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
