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
import img_doctor from '../../public/static/images/doctors/doctor_Balahonov.webp';
import ButtonCTA from '../../components/ButtonCTA';

// Арзамас - 22 декабря 2021
export default function Announcement() {
  return (
    <>
      <Head>
        <title>
          Сердечно-сосудистый хирург в городе Арзамас. Кардиохирургия
        </title>
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург в городе Арзамас. Кардиохирургия"
        />
        <meta
          name="description"
          content="Осмотр пациентов с заболеваниями сердца. Прием кардиохирурга, лечение по федеральной квоте и ОМС."
        />
        <meta
          property="og:description"
          content="Осмотр пациентов с заболеваниями сердца. Прием кардиохирурга, лечение по федеральной квоте и ОМС."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/bg-doctors.webp"
        />
        <meta property="og:url" content="https://heartteamspb.com/news/priem-v-gorode-arzamas-22.12.2021" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: '22 декабря', pretitle: 'город Арзамас' }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">Новость от 15 декабря 2021 года</h6>
            <h2 className="news__title">
              22 декабря 2021 – г. Арзамас – приглашаем пациентов на&nbsp;прием
              к&nbsp;сердечно-сосудистому хирургу
            </h2>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <p className="article__p">
                  22 декабря в&nbsp;МЦ «ЛОР+» будет производить прием
                  и&nbsp;консультацию специалист Центра кардиохирургии
                  и&nbsp;кардиологии ВМТ им.&nbsp;Н.И.Пирогова,
                  сердечно-сосудистый хирург, кандидат медицинских наук
                  Балахонов Василий Васильевич.
                </p>
                <p className="article__p">
                  Для отбора на&nbsp;дальнейшее оказание бесплатной
                  высокотехнологичной медицинской помощи по&nbsp;федеральным
                  квотам и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются
                  пациенты со&nbsp;следующими заболеваниями органов
                  сердечно-сосудистой системы:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— Клапанные пороки сердца</li>
                  <li className="article__li">— Ишемическая болезнь сердца</li>
                  <li className="article__li">
                    — Патология периферических сосудов
                  </li>
                  <li className="article__li">— Патология аорты</li>
                </ul>
                <p className="article__p">
                  При себе пациенту необходимо иметь:
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
                  <strong>22&#160;декабря&#160;2021&#160;г</strong>
                </p>
                <p className="article__p">
                  По адресу:{' '}
                  <a
                    href="https://yandex.ru/maps/-/CCUyUOSs0B"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article__link"
                  >
                    г.&nbsp;Арзамас, ул.&nbsp;Матросова, д.&nbsp;13
                  </a>
                </p>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [55.401693, 43.843023],
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[55.401693, 43.843023]} />
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
