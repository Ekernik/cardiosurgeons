import React from "react";

import img_doctor from "../../assets/images/doctors/doctor_Kamenskih.jpg";

import "./index.scss";
import Contacts from "../../components/Contacts";

export default function Kamenskih() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Каменских Максим Сергеевич</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Каменских Максим Сергеевич
"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач - кардиохирург Центра кардиохирургии и интервенционной
                кардиологии.
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Направление деятельности</h3>
              <p className="doctor__text">— сердечно-сосудистая хирургия</p>
              <p className="doctor__text">
                — хирургическое лечение и профилактика церебро-васкулярных
                болезней
              </p>
              <p className="doctor__text">
                — малоинвазивные и гибридные технологии в лечении заболеваний
                аорты и магистральных артерий
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                — С 2014 г. по настоящее время - Врач кардиохирург отделения
                кардиохирургии и интервенционной кардиологии.
              </p>
              <p className="doctor__text">
                — 2014-2014 гг. - Врач сердечно-сосудистый хирург Федерального
                центра сердечно-сосудистой хирургии г. Пермь.
              </p>
              <p className="doctor__text">
                — 2010-2013 гг. - Врач сердечно-сосудистый хирург Федерального
                центра сердечно-сосудистой хирургии г. Красноярск.
              </p>
              <p className="doctor__text">
                — 2008-2010 гг. - Врач сердечно-сосудистый хирург отделения
                кардиохирургии Красноярской Краевой клинической больницы № 1.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                — 2006-2008 гг. – Ординатура по сердечно-сосудистой хирургии.
                Кафедра факультетской хирургии Омской государственной
                медицинской академии на базе Омской областной клинической
                больницы.
              </p>
              <p className="doctor__text">
                — 2005-2006 гг. – Интернатура на кафедре хирургических болезней
                №2 Красноярской государственной медицинской академии на базе
                Краевой клинической больницы №1.
              </p>
              <p className="doctor__text">
                — 1999-2005 гг. - Высшее профессиональное образование:
                Красноярская государственная медицинская академия. Квалификация:
                врач. Специальность: лечебное дело.
              </p>
            </section>

            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Повышение квалификации</h3>
              <p className="doctor__text">
                — 2011-2012 гг. - Прохождение обучения в рамках образовательного
                курса повышения квалификации «Восходящие звезды» по теме
                «Актуальные вопросы сердечно-сосудистой хирургии» на базе ФГУ
                «Научно-Исследовательский Институт Патологии Кровообращения им.
                академика Е.Н.Мешалкина».
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Сердечно-сосудистая хирургия. Годен до 05.04.2023. Выдан: ГБОУ
                ВПО СЗГМУ им. И.И.Мечникова.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Участие в конференциях</h3>
              <p className="doctor__text">
                — 2013 г. - Участник и докладчик научного труда на 62 съезде
                Европейского сообщества сердечно-сосудистых и эндоваскулярных
                хирургов в Регенсбурге, Германия (The 62nd International
                Congress of the European Society for Cardiovascular and
                Endovascular Surgery in Regensburg, April 11-13, 2013).
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
