import React from 'react';

import img_doctor from '../../assets/images/doctors/doctor_Asadullin.jpg';

import './index.scss';
import Contacts from '../../components/Contacts';

export default function Asadullin() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Асадуллин Ильшат Шамилевич</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Асадуллин Ильшат Шамилевич"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач сердечно-сосудистый хирург Центра кардиохирургии и
                интервенционной кардиологии
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Направление деятельности</h3>
              <p className="doctor__text">— сердечно-сосудистая патология.</p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                С 2020 г. по настоящее время – Врач сердечно-сосудистый хирург
                кардиохирургического отделения с кабинетом РЭВДиЛ.
              </p>
              <p className="doctor__text">
                2019 - 2020 гг. – Врач сердечно-сосудистый хирург,
                Республиканский кардиологический центр, Республика Башкортостан,
                город Уфа.
              </p>
              <p className="doctor__text">
                2017 – 2019 гг. - Врач-хирург Бердской центральной городской
                больницы, Новосибирская область, город Бердск.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                2017 – 2019 гг. – Ординатура по сердечно-сосудистой хирургии.
                НМИЦ им. академика Е.Н. Мешалкина, Новосибирская область, г.
                Новосибирск.
              </p>
              <p className="doctor__text">
                2016 -2017 гг. – Интернатура по хирургии. Башкирский
                государственный медицинский университет, кафедра «Факультетская
                хирургия с курсом колопроктологии», ГКБ № 21, Республика
                Башкортостан, г. Уфа.
              </p>
              <p className="doctor__text">
                2010 - 2016 гг. - Высшее профессиональное образование.
                Башкирский государственный медицинский университет, г. Уфа.
                Квалификация: врач. Специальность «Лечебное дело».
              </p>
              <p className="doctor__text">
                2007 - 2010 гг. - Башкирский экономико-юридический техникум,
                Специальность: право и организация социального обеспечения,
                Квалификация: юрист.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Сердечно-сосудистая хирургия. Годен до 15.07.2025. Выдан: ФГБУ
                НМИЦ им. академика Е. Н. Мешалкина.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
