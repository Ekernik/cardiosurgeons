import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import DoctorCard from "../../organisms/DoctorCard/DoctorCard";
import doctor_balahonov from "../images/doctors/doctor_Balahonov.jpg";
import ButtonCTA from "../../atoms/ButtonCTA";

import "./index.scss";

export default function NewsArticle(props) {
  return (
    <section className="section__news-article">
      <div className="container container__news-article">
        <h6 className="news__date">новость от {props.date}</h6>
        <h2 className="news__title">
          Приглашаем на приём пациентов с заболеваниями органов
          сердечно-сосудистой системы для отбора на дальнейшее оказание
          бесплатной высокотехнологичной медицинской помощи по федеральным
          квотам и ОМС в Санкт-Петербурге:
        </h2>
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
            Обследования для кардиохирургических больных (ИБС, клапаны, аорта):
          </strong>
        </p>
        <ul className="news__list">
          <li className="news__list-item">— ЭКГ (описание)</li>
          <li className="news__list-item">— Эхокардиография</li>
          <li className="news__list-item">
            — Осмотр кардиолога (по возможности)
          </li>
          <li className="news__list-item">— Коронарография (по возможности)</li>
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
            — Дуплексное сканирование брахиоцефальных артерий, аорты, артерий
            нижних конечностей.
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
          Стоимость приёма <strong>1500 рублей</strong>.
        </p>
        <div className="marked-container">
          <p className="news__p">
            Для госпитализации в Клинику ВМТ им. Н.И.Пирогова форма 057-у не
            требуется.
          </p>
        </div>
        <hr />
        <div className="news__main-flex">
          <div className="news__help-flex">
            <p className="news__p">
              Прием будет проводиться:{" "}
              <strong>15&#160;октября&#160;2021&#160;г</strong>
            </p>
            <p className="news__p">
              По адресу:{" "}
              <a
                href="https://yandex.ru/maps/-/CCUqq6GSwA"
                target="_blank"
                rel="noreferrer"
              >
                г. Нижний Новгород, ул. Краснодонцев, д. 19, к. 1, Клиника
                "Александрия"
              </a>
            </p>
            <YMaps query={{ lang: "ru_RU" }}>
              <Map
                width={"100%"}
                height={"30vh"}
                defaultState={{
                  center: [56.255322, 43.852258],
                  zoom: 15,
                  behaviors: ["default", "scrollZoom"],
                  controls: [],
                }}
              >
                <Placemark defaultGeometry={[56.255322, 43.852258]} />
                <FullscreenControl />
                <ZoomControl />
              </Map>
            </YMaps>
            <p className="news__p">
              тел. для записи: <a href="tel:+79992380136">8 (999) 238-01-36</a>
            </p>
            <ButtonCTA
              styling="greetings__cta news__cta"
              text="Записаться на конусльтацию"
            />
          </div>
          <div className="news__help-flex">
            <p className="news__p">
              Принимает врач – сердечно-сосудистый хирург Центра кардиохирургии
              и интервенционной кардиологии{" "}
              <a href="/team/doctor_balahonov" target="_blank">
                Балахонов Василий Васильевич
              </a>
            </p>
            <DoctorCard
              className="news__doctor-card"
              imgSrc={doctor_balahonov}
              imgAlt={"Доктор Балахонов Василий Васильевич"}
              title={"Балахонов Василий Васильевич"}
              subtitle={"сердечно-сосудистый хирург"}
              link={"/team/doctor_balahonov"}
              showMore={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
