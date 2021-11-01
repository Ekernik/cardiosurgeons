import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img_doctor from "../../public/static/images/doctors/doctor_Sorokin.jpg";
import Contacts from "../../components/Contacts";

export default function Sorokin() {
  return (
    <>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Сорокин Андрей Александрович</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Сорокин Андрей Александрович"
              />
              <div className="marked-container doctor__about">
                <h2 className="doctor__position">
                  Врач сердечно-сосудистый хирург, интервенционный радиолог
                  Центра кардиохирургии и&nbsp; интервенционной кардиологии
                </h2>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">
                  — Заболевания ветвей дуги аорты (артерии шеи, подключичные,
                  артерии верхних конечностей).
                </p>

                <p className="article__p">
                  — Заболевания брюшного отдела аорты и&nbsp;ее&nbsp;ветвей
                  (аневризмы и&nbsp;стенозы аорты, брыжеечных, почечных
                  и&nbsp;др.&nbsp;артерий).
                </p>
                <p className="article__p">
                  — Заболевания подвздошных артерий и&nbsp;артерий нижних
                  конечностей (стенозы, аневризмы).
                </p>
                <p className="article__p">
                  — Ишемическая болезнь сердца (эндоваскулярная диагностика
                  и&nbsp;лечение).
                </p>
                <p className="article__p">
                  — Сосудистый доступ для гемодиализа (диализные фистулы
                  и&nbsp;протезы).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  С 2012 г. по настоящее время — Сердечно-сосудистый хирург
                  кардиохирургического отделения с кабинетом РЭВДиЛ.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2010 — 2012 гг. — Ординатура по сердечно-сосудистой хирургии.
                  Северо-Западный государственный медицинский университет
                  им.&nbsp;Н.И.Мечникова.
                </p>
                <p className="article__p">
                  2008 — 2010 гг. — Ординатура по хирургии. Санкт-петербургская
                  медицинская академия последипломного образования, кафедра
                  хирургии им.&nbsp;Н.Д.Монастырского.
                </p>
                <p className="article__p">
                  2002 — 2008 гг. — Высшее профессиональное образование: Омская
                  государственная медицинская академия. Квалификация: врач.
                  Специальность: лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — 2018 г. — Цикл повышения квалификации по дополнительной
                  профессиональной программе “Рентгенэндоваскулярные методы
                  лечения заболеваний артерий нижних конечностей”.
                </p>
                <p className="article__p">
                  — 2014 г. - Цикл повышения квалификации по специальности
                  “Рентгенэндоваскулярная диагностика и&nbsp;лечение”.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Рентгенэндваскулярные диагностика и&nbsp;лечение. Годен до
                  19.10.2024. Выдан: ГБОУ&nbsp;ВПО&nbsp;СЗГМУ
                  им.&nbsp;И.И.Мечникова.
                </p>
                <p className="article__p">
                  — Хирургия. Годен до 29.09.2023. Выдан:
                  ГБОУ&nbsp;ВПО&nbsp;СЗГМУ им.&nbsp;И.И.Мечникова.
                </p>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 06.04.2022. Выдан:
                  ГБОУ&nbsp;ВПО&nbsp;СЗГМУ им.&nbsp;И.И.Мечникова.
                </p>
              </section>
            </div>
          </div>
        </section>
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
