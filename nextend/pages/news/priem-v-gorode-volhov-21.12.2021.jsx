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
import img_doctor from '../../public/static/images/doctors/doctor_starosockaya.webp';
import ButtonCTA from '../../components/ButtonCTA';

// Волхов - 21 декабря 2021
export default function Announcement() {
  return (
    <>
      <Head>
        <title>Прием кардиолога в городе Волхов</title>
        <meta property="og:title" content="Прием кардиолога в городе Волхов" />
        <meta
          name="description"
          content="Лечение болезней сердца по ОМС и федеральным квотам в г. Волхов"
        />
        <meta
          property="og:description"
          content="Лечение болезней сердца по ОМС и федеральным квотам в г. Волхов"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/bg-doctors.webp"
        />
        <meta
          property="og:url"
          content="https://heartteamspb.com/news/priem-v-gorode-volhov-21.12.2021"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: '21 декабря', pretitle: 'город Волхов' }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">Новость от 15 декабря 2021 года</h6>
            <h2 className="news__title">
              21 декабря 2021&nbsp;г. в&nbsp;городе Волхове ведет прием
              кардиолог, кандидат медицинских наук из&nbsp;Санкт-Петербурга
              Старосоцкая&nbsp;М.В.
            </h2>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <p className="article__p">
                  Отбор пациентов и&nbsp;дальнейшее направление на&nbsp;
                  <strong>бесплатное</strong> хирургическое лечение
                  в&nbsp;Петербурге будет проводиться в&nbsp;клинике
                  «ВолховМед».
                </p>
                <p className="article__p">
                  <strong>
                    Приглашаем пациентов со&nbsp;следующими заболеваниями
                    органов сердечно-сосудистой системы:
                  </strong>
                </p>
                <ul className="article__ul">
                  <li className="article__li">
                    — ИБС (ишемическая болезнь сердца)
                  </li>
                  <li className="article__li">— Нарушения ритма сердца</li>
                  <li className="article__li">— Патология аорты</li>
                  <li className="article__li">
                    — Патология периферических сосудов
                  </li>
                  <li className="article__li">— Клапанные пороки сердца</li>
                </ul>
                <p className="article__p">
                  Документы, необходимые для&nbsp;получения консультации
                  специалиста нашего Центра кардиохирургии
                  и&nbsp;интервенционной кардиологии Клиники высоких медицинских
                  технологий им.&nbsp;Н.И.Пирогова:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— полис ОМС</li>
                  <li className="article__li">— паспорт</li>
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
                  <Link href="/team/doctor_starosockaya">
                    <a className="article__link">
                      Старосоцкая Мария Владимировна
                    </a>
                  </Link>
                </p>
                <DoctorCard
                  className="news__doctor-card"
                  imgSrc={img_doctor}
                  imgAlt={'Доктор Старосоцкая Мария Владимировна'}
                  title={'Старосоцкая Мария Владимировна'}
                  subtitle={['Кардиолог,', 'кандидат медицинских наук']}
                  link={'/team/doctor_starosockaya'}
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
                    href="https://yandex.ru/maps/-/CCUyUOQT3B"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article__link"
                  >
                    г.&nbsp;Волхов, Кировский&nbsp;пр., д.&nbsp;37
                  </a>
                </p>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [59.906458, 32.350507],
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[59.906458, 32.350507]} />
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
