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
import img_doctor from '../../public/static/images/doctors/doctor_Kim.jpg';
import ButtonCTA from '../../components/ButtonCTA';

// Великие Луки - 20 декабря 2021
export default function Announcement() {
  return (
    <>
      <Head>
        <title>Сердечно-сосудистый хирург в городе Великие Луки</title>
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург в городе Великие Луки"
        />
        <meta
          name="description"
          content="Записывайтесь на прием к специалисту из Санкт-Петербурга - кардиохирургу, кандидату медицинских наук."
        />
        <meta
          property="og:description"
          content="Записывайтесь на прием к специалисту из Санкт-Петербурга - кардиохирургу, кандидату медицинских наук."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/bg-doctors.webp"
        />
        <meta
          property="og:url"
          content="https://heartteamspb.com/news/priem-v-gorode-velikie-luki-20.12.2021"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: '20 декабря', pretitle: 'город Великие Луки' }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">Новость от 15 декабря 2021 года</h6>
            <h2 className="news__title">
              20 декабря 2021&nbsp;г. в&nbsp;МЦ «Медтайм» (г.&nbsp;Великие Луки)
              состоится прием и&nbsp;отбор пациентов на&nbsp;бесплатное
              хирургическое лечение в&nbsp;Санкт-Петербурге.
            </h2>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <p className="article__p">
                  Приглашаем на прием пациентов со следующими заболеваниями:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— Ишемическая болезнь сердца</li>
                  <li className="article__li">— Клапанные пороки сердца</li>
                  <li className="article__li">— Патология аорты</li>
                  <li className="article__li">
                    — Патология периферических сосудов
                  </li>
                </ul>
                <p className="article__p">
                  Для того, чтобы попасть на прием в&nbsp;МЦ&nbsp;«Медтайм» вам
                  необходимы следующие документы:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— паспорт</li>
                  <li className="article__li">— СНИЛС</li>
                  <li className="article__li">— полис ОМС</li>
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
                  <Link href="/team/doctor_kim">
                    <a className="article__link">Ким Глеб Ирламович</a>
                  </Link>
                </p>
                <DoctorCard
                  className="news__doctor-card"
                  imgSrc={img_doctor}
                  imgAlt={'Доктор Ким Глеб Ирламович'}
                  title={'Ким Глеб Ирламович'}
                  subtitle={[
                    'Cердечно-сосудистый хирург,',
                    'кандидат медицинских наук',
                  ]}
                  link={'/team/doctor_kim'}
                  showMore={true}
                />
              </div>
            </div>
            <hr />
            <div className="news__main-flex">
              <div className="news__help-flex">
                <p className="article__p">
                  Прием будет проводиться:{' '}
                  <strong>20&#160;декабря&#160;2021&#160;г</strong>
                </p>
                <p className="article__p">
                  По адресу:{' '}
                  <a
                    href="https://yandex.ru/maps/-/CCUyUKAL-D"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article__link"
                  >
                    г.&nbsp;Великие Луки, ул.&nbsp;Лизы Чайкиной, д.&nbsp;23
                  </a>
                </p>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [56.349495, 30.511027],
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[56.349495, 30.511027]} />
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
