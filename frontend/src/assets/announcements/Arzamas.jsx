import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import DoctorCard from "../../organisms/DoctorCard/DoctorCard";
import img_doctor1 from "../images/doctors/doctor_Balahonov.jpg";
import img_doctor2 from "../images/doctors/doctor_Zubarev.jpg";
import ButtonCTA from "../../atoms/ButtonCTA";

import "./index.scss";

// Арзамас - 16 октября 2021
const Announcement = (props) => {
  return (
    <section className="section__news-article">
      <div className="container container__news-article">
        <h6 className="news__date">{props.date}</h6>
        <h2 className="news__title">
          16 октября 2021 г. в&nbsp;Медицинском Центре «Лор +» проводится приём
          пациентов с заболеваниями органов сердечно-сосудистой системы для
          отбора на дальнейшее оказание бесплатной высокотехнологичной
          медицинской помощи по федеральным квотам и ОМС в Санкт-Петербурге
        </h2>
        <div className="flex">
          <div style={{ flex: 1 }}>
            <p className="news__p">
              При себе необходимо иметь ксерокопии следующих документов:
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — Паспорт (1-я страница и страница с регистрацией)
              </li>
              <li className="news__list-item">— Полис ОМС (с двух сторон)</li>
              <li className="news__list-item">— СНИЛС</li>
            </ul>
            <p className="news__p">А также, медицинские документы:</p>
            <p className="news__p">
              <strong>
                Обследования для кардиохирургических больных (ИБС, клапаны,
                аорта):
              </strong>
            </p>
            <ul className="news__list">
              <li className="news__list-item">— ЭКГ (описание)</li>
              <li className="news__list-item">— Эхокардиография</li>
              <li className="news__list-item">
                — Осмотр кардиолога (по возможности)
              </li>
              <li className="news__list-item">
                — Коронарография (по возможности)
              </li>
              <li className="news__list-item">
                — При наличии сопутствующих заболеваний - консультации
                врачей-специалистов (по возможности)
              </li>
            </ul>
            <p className="news__p">
              <strong>
                При сосудистой патологии, дополнительно к вышесказанному:
              </strong>
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — Дуплексное сканирование брахиоцефальных артерий, аорты,
                артерий нижних конечностей.
              </li>
            </ul>
            <p className="news__p">
              <strong>
                При нарушении ритма сердца, дополнительно к вышенаписанному:
              </strong>
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — Суточный мониторинг ЭКГ по Холтеру.
              </li>
            </ul>
            <p className="news__p">
              Стоимость приёма <strong>2000 рублей</strong>.
            </p>
            <ButtonCTA
              styling="greetings__cta news__cta"
              text="Записаться на прием"
            />
          </div>
          <div className="news__help-flex">
            <p className="news__p">
              Прием ведут специалисты Центра кардиохирургии
              и&nbsp;интервенционной кардиологии:{" "}
              <a href="/team/doctor_balahonov" target="_blank">
                Балахонов&nbsp;Василий&nbsp;Васильевич
              </a>
              <br />— врач сердечно-сосудистый хирург и <br />
              <a href="/team/doctor_zubarev" target="_blank">
                Зубарев&nbsp;Евгений&nbsp;Игоревич
              </a>
              <br />— врач сердечно-сосудистый хирург, аритмолог
            </p>
            <div style={{ display: "flex" }}>
              <DoctorCard
                className="news__doctor-card"
                imgSrc={img_doctor1}
                imgAlt={"Доктор Балахонов Василий Васильевич"}
                title={"Балахонов Василий Васильевич"}
                subtitle={"врач cердечно-сосудистый хирург, к.м.н."}
                link={"/team/doctor_balahonov"}
                showMore={true}
              />
              <DoctorCard
                className="news__doctor-card"
                imgSrc={img_doctor2}
                imgAlt={"Доктор Зубарев Евгений Игоревич"}
                title={"Зубарев Евгений Игоревич"}
                subtitle={"врач cердечно-сосудистый хирург, аритмолог"}
                link={"/team/doctor_zubarev"}
                showMore={true}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="news__main-flex">
          <div className="news__help-flex">
            <p className="news__p">
              Прием будет проводиться:{" "}
              <strong>16&#160;октября&#160;2021&#160;г</strong>
            </p>
            <p className="news__p">
              По адресу:{" "}
              <a
                href="https://yandex.ru/maps/-/CCUqq6DZCA"
                target="_blank"
                rel="noreferrer"
              >
                г.&nbsp;Арзамас, ул.&nbsp;Матросова, д.&nbsp;13,
                Медицинский&nbsp;Центр&nbsp;«Лор&nbsp;+»
              </a>
            </p>
            <YMaps query={{ lang: "ru_RU" }}>
              <Map
                width={"100%"}
                height={"30vh"}
                defaultState={{
                  center: [55.401693, 43.843023],
                  zoom: 15,
                  behaviors: ["default", "scrollZoom"],
                  controls: [],
                }}
              >
                <Placemark defaultGeometry={[55.401693, 43.843023]} />
                <FullscreenControl />
                <ZoomControl />
              </Map>
            </YMaps>
            <p className="news__p">
              тел. для записи:{" "}
              <a href="tel:+79992380136">
                +7&nbsp;(999)&nbsp;238&#8209;01&#8209;36
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Announcement;