import Link from "next/link";
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
import doctor from "../../public/static/images/doctors/doctor_Pyagai.jpg";
import ButtonCTA from "../../components/ButtonCTA";

// Владимир - 09 ноября 2021
export default function Announcement() {
  return (
    <>
      <Header />
      <Greetings
        header={{ title: "9 ноября", pretitle: "город Владимир" }}
        buttonText="Записаться на консультацию"
      />
      <section className="section__news-article">
        <div className="container container__news-article">
          <h6 className="news__date">новость от 06 октября 2021 года</h6>
          <h2 className="news__title">
            Приглашаем пациентов с заболеваниями органов сердечно-сосудистой
            системы:
          </h2>
          <div className="flex">
            <div style={{ flex: 1 }}>
              <ul className="article__ul">
                <li className="article__li">— Ишемическая болезнь сердца</li>
                <li className="article__li">— Клапанные пороки сердца</li>
                <li className="article__li">— Патология аорты</li>
                <li className="article__li">
                  — Патология периферических сосудов
                </li>
                <li className="article__li">— Нарушения ритма сердца</li>
              </ul>
              <p className="article__p">
                На консультацию специалиста Центра кардиохирургии и
                интервенционной кардиологии Клиники высоких медицинских
                технологий им. Н.И. Пирогова Санкт-Петербургского
                государственного Университета для отбора на дальнейшее оказание{" "}
                <strong>бесплатной</strong> оперативной помощи в г.
                Санкт-Петербург.
              </p>
              <p className="article__p">
                На консультацию пациенты должны взять с собой:
              </p>
              <ul className="article__ul">
                <li className="article__li">— паспорт</li>
                <li className="article__li">— полис ОМС</li>
                <li className="article__li">— СНИЛС</li>
                <li className="article__li">
                  — имеющиеся медицинские документы.
                </li>
              </ul>
              <p className="article__p">Стоимость приёма 1500 рублей.</p>
              <ButtonCTA
                styling="greetings__cta news__cta"
                text="Записаться на конусльтацию"
              />
              <div className="marked-container">
                <p className="article__p">
                  Большинство операций в Клинике ВМТ им. Н.И. Пирогова
                  выполняются бесплатно в рамках федеральных квот на
                  высокотехнологичную медицинскую помощь, а также по ОМС.
                </p>
              </div>
            </div>
            <div className="news__help-flex">
              <p className="news__p" style={{ textAlign: "center" }}>
                Прием ведет специалист Центра <br />
                <Link href="/team/doctor_pyagai">
                  <a className="article__link">Пягай Виктор Александрович</a>
                </Link>
              </p>
              <DoctorCard
                className="news__doctor-card"
                imgSrc={doctor}
                imgAlt={"Доктор Пягай Виктор Александрович"}
                title={"Пягай Виктор Александрович"}
                subtitle={"Врач сердечно-сосудистый хирург"}
                link={"/team/doctor_pyagai"}
                showMore={true}
              />
            </div>
          </div>

          <hr />
          <div className="news__main-flex">
            <div className="news__help-flex">
              <p className="article__p">
                Консультация будет проводиться:{" "}
                <strong>9&#160;ноября&#160;2021&#160;г</strong>
              </p>
              <p className="article__p">
                По адресу:{" "}
                <a
                  href="https://yandex.ru/mApS/-/CCUiuPuYWA"
                  target="_blank"
                  className="article__link"
                  rel="noreferrer noopenner"
                >
                  г. Владимир, ул. Добросельская, д. 36-б, Медицинский центр
                  "Палитра"
                </a>
              </p>
              <YMaps query={{ lang: "ru_RU" }}>
                <Map
                  width={"100%"}
                  height={"30vh"}
                  defaultState={{
                    center: [56.160802, 40.475113],
                    zoom: 15,
                    behaviors: ["default", "scrollZoom"],
                    controls: [],
                  }}
                >
                  <Placemark defaultGeometry={[56.160802, 40.475113]} />
                  <FullscreenControl />
                  <ZoomControl />
                </Map>
              </YMaps>
              <p className="article__p">
                тел. для записи:{" "}
                <a href="tel:+79992380136">+7 (999) 238-01-36</a>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Contacts />
      <Footer />
    </>
  );
}
