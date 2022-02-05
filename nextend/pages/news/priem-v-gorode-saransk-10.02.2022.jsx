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

// Арзамас - 22 декабря 2021
export default function Announcement() {
  const titleContent =
    'Сердечно-сосудистый хирург в городе Саранск. Кардиохирургия';
  const descriptionContent =
    'Осмотр пациентов с заболеваниями сердца. Прием кардиохирурга, лечение по федеральной квоте и ОМС.';
  const linkToArticle =
    'https://heartteamspb.com/news/priem-v-gorode-saransk-10.02.2022';
  const dayOfVisit = '10';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Cаранск, ул. Васенко, д. 11';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Саранск';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const price = '1500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5mMD90D';
  const mapsGeometry = [54.195171, 45.169143];
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
              {dayOfVisit} {monthOfVisit} {yearOfVisit} – приглашаем на прием к&nbsp;сердечно-сосудистому
              хирургу в Медицинском Центре &#34;КИМ&#34;.
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  {dayOfVisit} {monthOfVisit} в&nbsp;МЦ «КИМ» будет производить
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
                    +7&nbsp;(999)&nbsp;238&#8209;01&#8209;36
                  </a><br />
                  тел. МЦ &#34;КИМ&#34;:{' '}
                  <a href='tel:+78342222700' className='article__link'>
                    +7&nbsp;(8342)&nbsp;222&#8209;700
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
