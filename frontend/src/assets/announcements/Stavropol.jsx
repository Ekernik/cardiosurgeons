import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import DoctorCard from "../../organisms/DoctorCard/DoctorCard";
import img_doctor from "../images/doctors/doctor_Balahonov.jpg";
import ButtonCTA from "../../atoms/ButtonCTA";

import "./index.scss";

// Ставрополь - 11 ноября 2021
const Announcement = (props) => {
  return (
    <section className="section__news-article">
      <div className="container container__news-article">
        <h6 className="news__date">новость от {props.date}</h6>
        <h2 className="news__title">
          Приглашаем на приём пациентов с&nbsp;заболеваниями органов
          сердечно-сосудистой системы:
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
              Для отбора на дальнейшее оказание <strong>бесплатной</strong>{" "}
              высокотехнологичной медицинской помощи по&nbsp; федеральным квотам
              и&nbsp;ОМС в&nbsp;Санкт-Петербурге.
            </p>
            <p className="news__p">
              Приём будет проводить врач сердечно-сосудистый хирург Центра
              кардиохирургии КВМТ им.&nbsp;Н.И.Пирогова СПбГУ
              (г.&nbsp;Санкт-Петербург) кандидат медицинских наук Балахонов
              Василий Васильевич 11 ноября 2021&nbsp;г. в&nbsp;
              <strong>Ставропольском Краевом реабилитационном Центре</strong>.
            </p>
            <p className="news__p">
              При себе необходимо иметь следующие копии документов:
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — паспорт (1-я страница и&nbsp;прописка)
              </li>
              <li className="news__list-item">
                — полис ОМС (с&nbsp;двух сторон)
              </li>
              <li className="news__list-item">— СНИЛС</li>
            </ul>
            <p className="news__p">А также медицинские документы:</p>
            <p className="news__p">
              <b>
                Обследования для кардиохирургических больных (ИБС, клапаны,
                аорта):
              </b>
            </p>
            <ul className="news__list">
              <li className="news__list-item">— ЭКГ (описание)</li>
              <li className="news__list-item">— Эхокардиография</li>
              <li className="news__list-item">
                — Осмотр кардиолога (по&nbsp;возможности)
              </li>
              <li className="news__list-item">
                — Коронарография (по&nbsp;возможности)
              </li>
              <li className="news__list-item">
                — При наличии сопутствующих заболеваний - консультации
                врачей-специалистов (по&nbsp;возможности)
              </li>
            </ul>
            <p className="news__p">
              <b>
                При сосудистой патологии, дополнительно к&nbsp;вышесказанному:
              </b>
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — Дуплексное сканирование брахиоцефальных артерий, аорты,
                артерий нижних конечностей.
              </li>
            </ul>
            <p className="news__p">
              <b>
                При нарушении ритма сердца, дополнительно
                к&nbsp;вышенаписанному:
              </b>
            </p>
            <ul className="news__list">
              <li className="news__list-item">
                — Суточный мониторинг ЭКГ по&nbsp;Холтеру.
              </li>
            </ul>
          </div>
          <div className="news__help-flex">
            <p className="news__p" style={{ textAlign: "center" }}>
              Прием ведет специалист Центра <br />
              <a href="/team/doctor_balahonov" target="_blank">
                Балахонов Василий Васильевич
              </a>
            </p>
            <DoctorCard
              className="news__doctor-card"
              imgSrc={img_doctor}
              imgAlt={"Доктор Балахонов Василий Васильевич"}
              title={"Балахонов Василий Васильевич"}
              subtitle={"Сердечно-сосудистый хирург, к.м.н."}
              link={"/team/doctor_balahonov"}
              showMore={true}
            />
          </div>
        </div>

        <div className="marked-container">
          <p className="news__p">
            Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова выполняются
            бесплатно в&nbsp;рамках федеральных квот на&nbsp;высокотехнологичную
            медицинскую помощь, а&nbsp;также по&nbsp;ОМС.
          </p>
          <br />
          <p className="news__p">
            Для госпитализации в&nbsp;Клинику&nbsp;ВМТ им.&nbsp;Н.И.Пирогова
            форма 057-у не&nbsp;требуется.
          </p>
        </div>
        <p className="news__p">
          Приём <strong>бесплатный</strong>.
        </p>
        <ButtonCTA
          styling="greetings__cta news__cta"
          text="Записаться на прием"
        />

        <hr />
        <div className="news__main-flex">
          <div className="news__help-flex">
            <p className="news__p">
              Прием будет проводиться:{" "}
              <strong>11&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p className="news__p">
              По адресу:{" "}
              <a
                href="https://yandex.ru/maps/-/CCUmiVqMWD"
                target="_blank"
                rel="noreferrer"
              >
                г.&nbsp;Ставрополь, ул.&nbsp;Спартака, д.&nbsp;2 (вход
                со&nbsp;стороны ул.&nbsp;Голенева)
              </a>
            </p>
            <YMaps query={{ lang: "ru_RU" }}>
              <Map
                width={"100%"}
                height={"30vh"}
                defaultState={{
                  center: [45.04419, 41.985747],
                  zoom: 15,
                  behaviors: ["default", "scrollZoom"],
                  controls: [],
                }}
              >
                <Placemark defaultGeometry={[45.04419, 41.985747]} />
                <FullscreenControl />
                <ZoomControl />
              </Map>
            </YMaps>
            <p className="news__p">
              тел. для записи:{" "}
              <a href="tel:+79992380136">
                +7 &nbsp;(999)&nbsp;238&#8209;01&#8209;36
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