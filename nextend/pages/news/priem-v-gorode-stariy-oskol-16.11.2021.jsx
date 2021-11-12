import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Greetings from "../../components/Greetings";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import DoctorCard from "../../components/DoctorCard";
import img_doctor from "../../public/static/images/doctors/doctor_Sorokin.jpg";
import ButtonCTA from "../../components/ButtonCTA";

// Старый Оскол - 16 ноября 2021
export default function Announcement() {
  return (
    <>
      <Head>
        <title>Прием в Старом Осколе</title>
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <Greetings
          header={{ title: "16 ноября", pretitle: "город Старый Оскол" }}
          buttonText="Записаться на консультацию"
        />
        <section className="section__news-article">
          <div className="container container__news-article">
            <h6 className="news__date">Новость от 21 октября 2021 года</h6>
            <h2 className="news__title">
              16 ноября 2021 г. в&nbsp;МДЦ «Медтест» проводится отбор
              на&nbsp;бесплатное <strong>хирургическое лечение</strong>{" "}
              в&nbsp;Санкт-Петербурге пациентов с&nbsp;заболеваниями:
            </h2>
            <div className="flex">
              <div style={{ flex: 1 }}>
                <ul className="article__ul">
                  <li className="article__li">— ИБС</li>
                  <li className="article__li">— Аневризма аорты</li>
                  <li className="article__li">
                    — Окклюзии и&nbsp;стенозы магистральных артерий
                  </li>
                  <li className="article__li">— Иная артериальная патология</li>
                </ul>
                <p className="article__p">
                  На прием пациенты должны взять с собой:
                </p>
                <ul className="article__ul">
                  <li className="article__li">— паспорт</li>
                  <li className="article__li">— полис ОМС</li>
                  <li className="article__li">— СНИЛС</li>
                  <li className="article__li">
                    — имеющиеся медицинские документы.
                  </li>
                </ul>
                <p className="article__p">
                  Стоимость приёма <strong>2000 рублей</strong>.
                </p>
                <ButtonCTA
                  styling="greetings__cta news__cta"
                  text="Записаться на прием"
                />
                <div className="marked-container">
                  <p className="article__p">
                    Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
                    выполняются бесплатно в&nbsp;рамках федеральных квот
                    на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
                    по&nbsp;ОМС.
                  </p>
                </div>
              </div>
              <div className="news__help-flex">
                <p className="news__p" style={{ textAlign: "center" }}>
                  принимает специалист Центра <br />
                  <Link href="/team/doctor_sorokin">
                    <a className="article__link">
                      Сорокин Андрей Александрович
                    </a>
                  </Link>
                </p>
                <DoctorCard
                  className="news__doctor-card"
                  imgSrc={img_doctor}
                  imgAlt={"Доктор Сорокин Андрей Александрович"}
                  title={"Сорокин Андрей Александрович"}
                  subtitle={[
                    "Cердечно-сосудистый хирург,",
                    "интервенционный радиолог",
                  ]}
                  link={"/team/doctor_sorokin"}
                  showMore={true}
                />
              </div>
            </div>
            <hr />
            <div className="news__main-flex">
              <div className="news__help-flex">
                <p className="article__p">
                  Прием будет проводиться:{" "}
                  <strong>16&#160;ноября&#160;2021&#160;г</strong>
                </p>
                <p className="article__p">
                  По адресу:{" "}
                  <a
                    href="https://yandex.ru/maps/-/CCUmI8TC~D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    г.&nbsp;Старый Оскол, микрорайон Макаренко, д.&nbsp;4В
                  </a>
                </p>
                <YMaps query={{ lang: "ru_RU" }}>
                  <Map
                    width={"100%"}
                    height={"30vh"}
                    defaultState={{
                      center: [51.318761, 37.887184],
                      zoom: 15,
                      behaviors: ["default", "scrollZoom"],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[51.318761, 37.887184]} />
                    <FullscreenControl />
                    <ZoomControl />
                  </Map>
                </YMaps>
                <p className="article__p">
                  тел. для записи:{" "}
                  <a href="tel:+79992380136">
                    8&nbsp;(999)&nbsp;238&#8209;01&#8209;36
                  </a>
                  <br />
                  тел. МДЦ «Медтест»:{" "}
                  <a href="tel:+74725452503">
                    +7&nbsp;(4725)&nbsp;45&#8209;25&#8209;03
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
