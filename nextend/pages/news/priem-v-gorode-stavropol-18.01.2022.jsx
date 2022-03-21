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
import img_doctor from '../../public/static/images/doctors/doctor_Kappushev.webp';
import ButtonCTA from '../../components/ButtonCTA';

// Ставрополь - 18 января 2022
export default function Announcement() {
  return (
    <>
      <Head>
        <title>Сердечно-сосудистый хирург – прием в г. Ставрополе</title>
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург – прием в г. Ставрополе"
        />
        <meta
          name="description"
          content="Отбираем пациентов с заболеваниями органов сердечно-сосудистой системы для осмотра и дальнейшего лечения по ОМС и бесплатным квотам в Санкт-Петербурге."
        />
        <meta
          property="og:description"
          content="Отбираем пациентов с заболеваниями органов сердечно-сосудистой системы для осмотра и дальнейшего лечения по ОМС и бесплатным квотам в Санкт-Петербурге."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/bg-doctors.webp"
        />

        <meta
          property="og:url"
          content="https://heartteamspb.com/news/priem-v-gorode-stavropol-18-01-2022"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: '18 января', pretitle: 'город Ставрополь' }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">новость от 23 декабря 2021 года</h6>
            <h2 className="news__title">
              Приём пациентов с заболеваниями органов сердечно-сосудистой
              системы в&nbsp;городе Ставрополе
            </h2>
            <p className="article__p">
              Записывайтесь на прием и консультацию к&nbsp;опытному
              сердечно-сосудистому хирургу 1-й категории
              из&nbsp;Санкт-Петербурга –
              <Link href="/team/doctor_kappushev">
                <a className="article__link">Каппушеву Руслану Юсуфовичу</a>
              </Link>
              .
            </p>
            <p className="article__p">
              18 января 2022 – Ставропольский Краевой реабилитационный Центр.
            </p>
            <p className="article__p">
              Ждем на прием пациентов, у которых наблюдаются:
            </p>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <ul className="article__ul">
                  <li className="article__li">— Ишемическая болезнь сердца</li>
                  <li className="article__li">— Клапанные пороки сердца</li>
                  <li className="article__li">— Нарушения ритма сердца</li>
                  <li className="article__li">— Патология аорты</li>
                  <li className="article__li">
                    — Патология периферических сосудов
                  </li>
                </ul>
                <p className="article__p">
                  После получения консультации нашего специалиста Вы&nbsp;можете
                  быть направлены на&nbsp;
                  <strong>
                    бесплатное лечение в&nbsp;Санкт-Петербурге
                  </strong>{' '}
                  (по&nbsp;федеральной квоте или&nbsp;ОМС).
                </p>
                <p className="article__p">
                  С собой вам необходимо иметь ксерокопии документов:
                </p>
                <ul className="article__ul">
                  <li className="article__li">
                    — паспорт (1-я страница и&nbsp;прописка)
                  </li>
                  <li className="article__li">
                    — полис ОМС (с&nbsp;двух сторон)
                  </li>
                  <li className="article__li">— СНИЛС</li>
                </ul>
                <p className="article__p">А также медицинские документы:</p>
                <p className="article__p">
                  <b>
                    Обследования для кардиохирургических больных (ИБС, клапаны,
                    аорта):
                  </b>
                </p>
                <ul className="article__ul">
                  <li className="article__li">— ЭКГ (описание)</li>
                  <li className="article__li">— Эхокардиография</li>
                  <li className="article__li">
                    — Осмотр кардиолога (по&nbsp;возможности)
                  </li>
                  <li className="article__li">
                    —{' '}
                    <Link href="/diagnostics/coronarographia">
                      <a className="article__link">Коронарография</a>
                    </Link>{' '}
                    (по&nbsp;возможности)
                  </li>
                  <li className="article__li">
                    — При наличии сопутствующих заболеваний - консультации
                    врачей-специалистов (по&nbsp;возможности)
                  </li>
                </ul>
                <p className="article__p">
                  <b>
                    При сосудистой патологии, дополнительно
                    к&nbsp;вышесказанному:
                  </b>
                </p>
                <ul className="article__ul">
                  <li className="article__li">
                    — Дуплексное сканирование брахиоцефальных артерий, аорты,
                    артерий нижних конечностей.
                  </li>
                </ul>
                <p className="article__p">
                  <b>
                    При нарушении ритма сердца, дополнительно
                    к&nbsp;вышенаписанному:
                  </b>
                </p>
                <ul className="article__ul">
                  <li className="article__li">
                    — Суточный мониторинг ЭКГ по&nbsp;Холтеру.
                  </li>
                </ul>
              </div>
              <div className="news__help-flex">
                <p
                  className="article__p"
                  style={{ textAlign: 'center', flex: 'none' }}
                >
                  Прием ведет специалист Центра <br />
                  <Link href="/team/doctor_kappushev">
                    <a className="article__link">Каппушев Руслан Юсуфович</a>
                  </Link>
                </p>
                <DoctorCard
                  className="news__doctor-card"
                  imgSrc={img_doctor}
                  imgAlt={'Доктор Каппушев Руслан Юсуфович'}
                  title={'Каппушев Руслан Юсуфович'}
                  subtitle={[
                    'Сердечно-сосудистый хирург,',
                    'врач по рентгенэндоваскуляным диагностике и лечению',
                  ]}
                  link={'/team/doctor_kappushev'}
                  showMore={true}
                />
              </div>
            </div>
            <ButtonCTA
              styling="greetings__cta news__cta"
              text="Записаться на прием"
            />

            <hr />
            <div className="news__main-flex">
              <div className="news__help-flex">
                <p className="article__p">
                  Прием будет проводиться:{' '}
                  <strong>18&#160;января&#160;2022&#160;г.</strong>
                </p>
                <p className="article__p">
                  По адресу:{'  '}
                  <a
                    href="https://yandex.ru/maps/-/CCUymHc1cB"
                    target="_blank"
                    className="article__link"
                    rel="noreferrer noopenner"
                  >
                    г.&nbsp;Ставрополь, проспект Кулакова, д.&nbsp;12&nbsp;«B»
                  </a>
                </p>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [45.054181, 41.915957],
                      zoom: 15,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[45.054181, 41.915957]} />
                    <FullscreenControl />
                    <ZoomControl />
                  </Map>
                </YMaps>
                <p className="article__p">
                  тел. для записи:{' '}
                  <a href="tel:+79992380136" className="article__link">
                    +7&nbsp;(999)&nbsp;238&#8209;01&#8209;36
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
