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
import img_doctor from "../../public/static/images/doctors/doctor_Balahonov.jpg";
import ButtonCTA from "../../components/ButtonCTA";

// Ставрополь - 11 ноября 2021
export default function Announcement() {
  return (
    <>
      <Header />
      <Greetings
        header={{ title: "11 ноября", pretitle: "город Ставрополь" }}
        buttonText="Записаться на консультацию"
      />
      <section className="section__news-article">
        <div className="container container__news-article">
          <h6 className="news__date">новость от 6 октября 2021 года</h6>
          <h2 className="news__title">
            Приглашаем на приём пациентов с&nbsp;заболеваниями органов
            сердечно-сосудистой системы:
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
                Для отбора на дальнейшее оказание <strong>бесплатной</strong>{" "}
                высокотехнологичной медицинской помощи по&nbsp; федеральным
                квотам и&nbsp;ОМС в&nbsp;Санкт-Петербурге.
              </p>
              <p className="article__p">
                Приём будет проводить врач сердечно-сосудистый хирург Центра
                кардиохирургии КВМТ им.&nbsp;Н.И.Пирогова СПбГУ
                (г.&nbsp;Санкт-Петербург) кандидат медицинских наук Балахонов
                Василий Васильевич 11 ноября 2021&nbsp;г. в&nbsp;
                <strong>Ставропольском Краевом реабилитационном Центре</strong>.
              </p>
              <p className="article__p">
                При себе необходимо иметь следующие копии документов:
              </p>
              <ul className="news__list">
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
              <ul className="news__list">
                <li className="article__li">— ЭКГ (описание)</li>
                <li className="article__li">— Эхокардиография</li>
                <li className="article__li">
                  — Осмотр кардиолога (по&nbsp;возможности)
                </li>
                <li className="article__li">
                  — Коронарография (по&nbsp;возможности)
                </li>
                <li className="article__li">
                  — При наличии сопутствующих заболеваний - консультации
                  врачей-специалистов (по&nbsp;возможности)
                </li>
              </ul>
              <p className="article__p">
                <b>
                  При сосудистой патологии, дополнительно к&nbsp;вышесказанному:
                </b>
              </p>
              <ul className="news__list">
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
              <ul className="news__list">
                <li className="article__li">
                  — Суточный мониторинг ЭКГ по&nbsp;Холтеру.
                </li>
              </ul>
            </div>
            <div className="news__help-flex">
              <p className="news__p" style={{ textAlign: "center" }}>
                Прием ведет специалист Центра <br />
                <Link href="/team/doctor_balahonov">
                  <a className="article__link">Балахонов Василий Васильевич</a>
                </Link>
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
            <p className="article__p">
              Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
              выполняются бесплатно в&nbsp;рамках федеральных квот
              на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
              по&nbsp;ОМС.
            </p>
            <br />
            <p className="article__p">
              Для госпитализации в&nbsp;Клинику&nbsp;ВМТ им.&nbsp;Н.И.Пирогова
              форма 057-у не&nbsp;требуется.
            </p>
          </div>
          <p className="article__p">
            Приём <strong>бесплатный</strong>.
          </p>
          <ButtonCTA
            styling="greetings__cta news__cta"
            text="Записаться на прием"
          />

          <hr />
          <div className="news__main-flex">
            <div className="news__help-flex">
              <p className="article__p">
                Прием будет проводиться:{" "}
                <strong>11&#160;ноября&#160;2021&#160;г</strong>
              </p>
              <p className="article__p">
                По адресу:{"  "}
                <a
                  href="https://yandex.ru/maps/-/CCUmiVqMWD"
                  target="_blank"
                  className="article__link"
                  rel="noreferrer noopenner"
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
              <p className="article__p">
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
      <Contacts />
      <Footer />
    </>
  );
}
