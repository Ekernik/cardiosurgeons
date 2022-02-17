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
import first_img_doctor from '@/public/static/images/doctors/doctor_Sheremet.jpg';
import second_img_doctor from '@/public/static/images/doctors/doctor_Kim.jpg';

// Шахты - 25 февраля 2022 - 2 врача
export default function Announcement() {
  const dayOfVisit = '25';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Шахты, ул. Шишкина, д. 162';
  const dateOfNews = '17 февраля 2022';
  const city = 'город  Шахты';
  const firstDoctorFullName = 'Шеремет Антон Андреевич';
  const firstDoctorLink = '/team/doctor_sheremet';
  const firstDoctorTitles = ['врач сердечно-сосудистый хирург', 'аритмолог'];
  const secondDoctorFullName = 'Ким Глеб Ирламович';
  const secondDoctorLink = '/team/doctor_kim';
  const secondDoctorTitles = [
    'врач сердечно-сосудистый хирург',
    'кандидат медицинских наук',
  ];
  const price = 'бесплатно';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RGFx9B';
  const mapsGeometry = [47.725381, 40.225984];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Арзамас.',
    description:
      'Сердечно-сосудистый хирург из Петербурга. Прием пациентов и бесплатное лечение по федеральным квотам. ',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-shahti-25.02.2022',
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
              {dayOfVisit} {monthOfVisit} {yearOfVisit} – {city} – приглашаем
              пациентов на&nbsp;прием к&nbsp;специалистам из Санкт-Петербурга
            </h2>
            <div className='flex'>
              <div className='flex'>
                <div className='news__help-flex'>
                  <p
                    className='article__p'
                    style={{ textAlign: 'center', flex: 'none' }}
                  >
                    <Link href={firstDoctorLink}>
                      <a className='article__link'>{firstDoctorFullName}</a>
                    </Link>
                  </p>
                  <DoctorCard
                    className='news__doctor-card'
                    imgSrc={first_img_doctor}
                    imgAlt={`Доктор ${firstDoctorFullName}`}
                    title={firstDoctorFullName}
                    subtitle={firstDoctorTitles}
                    link={firstDoctorLink}
                    showMore={true}
                  />
                </div>
                <div className='news__help-flex'>
                  <p
                    className='article__p'
                    style={{ textAlign: 'center', flex: 'none' }}
                  >
                    <Link href={secondDoctorLink}>
                      <a className='article__link'>{secondDoctorFullName}</a>
                    </Link>
                  </p>
                  <DoctorCard
                    className='news__doctor-card'
                    imgSrc={second_img_doctor}
                    imgAlt={`Доктор ${secondDoctorFullName}`}
                    title={secondDoctorFullName}
                    subtitle={secondDoctorTitles}
                    link={secondDoctorLink}
                    showMore={true}
                  />
                </div>
              </div>
              <div>
                <p className='article__p'>
                  Администрация «Клиники высоких медицинских технологий им.
                  Н.И.Пирогова» в рамках регулярно осуществляемой реализации
                  Программы оказания высокотехнологичной медицинской помощи
                  (ВМП) жителям России организует бесплатную консультацию
                  пациентов специалистами нашего Центра с целью отбора на
                  бесплатное оперативное лечение в Санкт-Петербурге.
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
                  </a>{' '}
                  - Медицинский центр «Кардиоплюс»
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
                </p>
                <p className='article__p'>
                  тел. медицинского центра «Кардиоплюс»:{' '}
                  <a href='tel:+79604509437' className='article__link'>
                    +7&nbsp;(960)&nbsp;450&#8209;94&#8209;37
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
