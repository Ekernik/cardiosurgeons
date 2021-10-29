import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import DoctorCard from "../../organisms/DoctorCard/DoctorCard";
import doctor from "../images/doctors/doctor_Pyagai.jpg";
import ButtonCTA from "../../atoms/ButtonCTA";

import "./index.scss";

// Владимир - 09 ноября 2021
const Announcement = (props) => {
  return (
    <section className="section__news-article">
      <div className="container container__news-article">
        <h6 className="news__date">новость от {props.date}</h6>
        <h2 className="news__title">
          Приглашаем пациентов с заболеваниями органов сердечно-сосудистой
          системы:
        </h2>
        <div className="flex">
          <div style={{ flex: 1 }}>
            <ul className="news__list">
              <li className="news__list-item">— Ишемическая болезнь сердца</li>
              <li className="news__list-item">— Клапанные пороки сердца</li>
              <li className="news__list-item">— Патология аорты</li>
              <li className="news__list-item">
                — Патология периферических сосудов
              </li>
              <li className="news__list-item">— Нарушения ритма сердца</li>
            </ul>
            <p className="news__p">
              На консультацию специалиста Центра кардиохирургии и
              интервенционной кардиологии Клиники высоких медицинских технологий
              им. Н.И. Пирогова Санкт-Петербургского государственного
              Университета для отбора на дальнейшее оказание{" "}
              <strong>бесплатной</strong> оперативной помощи в г.
              Санкт-Петербург.
            </p>
            <p className="news__p">
              На консультацию пациенты должны взять с собой:
            </p>
            <ul className="news__list">
              <li className="news__list-item">— паспорт</li>
              <li className="news__list-item">— полис ОМС</li>
              <li className="news__list-item">— СНИЛС</li>
              <li className="news__list-item">
                — имеющиеся медицинские документы.
              </li>
            </ul>
            <p className="news__p">Стоимость приёма 1500 рублей.</p>
            <ButtonCTA
              styling="greetings__cta news__cta"
              text="Записаться на конусльтацию"
            />
            <div className="marked-container">
              <p className="news__p">
                Большинство операций в Клинике ВМТ им. Н.И. Пирогова выполняются
                бесплатно в рамках федеральных квот на высокотехнологичную
                медицинскую помощь, а также по ОМС.
              </p>
            </div>
          </div>
          <div className="news__help-flex">
            <p className="news__p" style={{ textAlign: "center" }}>
              Прием ведет специалист Центра <br />
              <a href="/team/doctor_pyagai" target="_blank">
                Пягай Виктор Александрович
              </a>
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
            <p className="news__p">
              Консультация будет проводиться:{" "}
              <strong>9&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p className="news__p">
              По адресу:{" "}
              <a
                href="https://yandex.ru/mApS/-/CCUiuPuYWA"
                target="_blank"
                rel="noreferrer"
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
            <p className="news__p">
              тел. для записи: <a href="tel:+79992380136">+7 (999) 238-01-36</a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Announcement;