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

// Нижний Новгород - 21 декабря 2021
export default function Announcement() {
  return (
    <>
      <Head>
        <title>
          Кардиохирург в Нижнем Новгороде. Сердечно-сосудистая хирургия
        </title>
        <meta
          property="og:title"
          content="Кардиохирург в Нижнем Новгороде. Сердечно-сосудистая хирургия"
        />
        <meta
          name="description"
          content="Прием специалистов клиники кардиохирургии и кардиологии ВМТ им. Н.И. Пирогова"
        />
        <meta
          property="og:description"
          content="Прием специалистов клиники кардиохирургии и кардиологии ВМТ им. Н.И. Пирогова"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/bg-doctors.webp"
        />
        <meta
          property="og:url"
          content="https://heartteamspb.com/news/priem-v-gorode-nizhniy-novgorod-21.12.2021"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: '21 декабря', pretitle: 'город Нижний Новгород' }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">Новость от 15 декабря 2021 года</h6>
            <h2 className="news__title">
              Проводим отбор пациентов на&nbsp;бесплатное хирургическое лечение
              в&nbsp;Санкт-Петербурге. Прием состоится 21 декабря 2021&nbsp;г.
              в&nbsp;клинике «Александрия» (г.&nbsp;Нижний Новгород).
            </h2>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <p className="article__p">На прием приглашаются пациенты с:</p>
                <ul className="article__ul">
                  <li className="article__li">— Ишемической болезнью сердца</li>
                  <li className="article__li">— Патологией аорты</li>
                  <li className="article__li">— Клапанными пороками сердца</li>
                  <li className="article__li">
                    — Патологией периферических сосудов
                  </li>
                  <li className="article__li">— Другими патологиями</li>
                </ul>
                <p className="article__p">
                  Чтобы попасть на прием к&nbsp;специалисту нашего Центра вам
                  необходимо иметь с&nbsp;собой:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— паспорт</li>
                  <li className="article__li">— полис ОМС</li>
                  <li className="article__li">— СНИЛС</li>
                  <li className="article__li">
                    — имеющиеся медицинские документы.
                  </li>
                </ul>
                <ButtonCTA
                  styling="greetings__cta news__cta"
                  text="Записаться на прием"
                />
              </div>
              <div className="news__help-flex">
                <p
                  className="article__p"
                  style={{ textAlign: 'center', flex: 'none' }}
                >
                  прием ведет: <br />
                  <Link href="/team/doctor_balahonov">
                    <a className="article__link">
                      Балахонов Василий Васильевич
                    </a>
                  </Link>
                </p>
                <DoctorCard
                  className="news__doctor-card"
                  imgSrc={img_doctor}
                  imgAlt={'Доктор Балахонов Василий Васильевич'}
                  title={'Балахонов Василий Васильевич'}
                  subtitle={[
                    'Cердечно-сосудистый хирург высшей категории,',
                    'кандидат медицинских наук',
                  ]}
                  link={'/team/doctor_balahonov'}
                  showMore={true}
                />
              </div>
            </div>
            <hr />
            <div className="news__main-flex">
              <div className="news__help-flex">
                <p className="article__p">
                  Прием будет проводиться:{' '}
                  <strong>21&#160;декабря&#160;2021&#160;г</strong>
                </p>
                <p className="article__p">
                  По адресу:{' '}
                  <a
                    href="https://yandex.ru/maps/-/CCUyUOv7WD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article__link"
                  >
                    г.&nbsp;Нижний Новгород, ул.&nbsp;Краснодонцев д.&nbsp;19,
                    к.&nbsp;1
                  </a>
                </p>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [56.255322, 43.852258],
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[56.255322, 43.852258]} />
                    <FullscreenControl />
                    <ZoomControl />
                  </Map>
                </YMaps>
                <p className="article__p">
                  тел. для записи:{' '}
                  <a href="tel:+79992380136" className="article__link">
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
