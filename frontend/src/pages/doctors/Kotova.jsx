import React from "react";

import img_doctor from "../../assets/svg/doctor_woman.svg";

import "./index.scss";
import Contacts from "../../components/Contacts";

export default function Kotova() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Котова Анна Сергеевна</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Котова Анна Сергеевна"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач-кардиолог Центра кардиохирургии и&nbsp;интервенционной
                кардиологии
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                С 2018 г. по настоящее время - Врач-кардиолог Центра
                кардиохирургии и&nbsp;интервенционной кардиологии.
              </p>
              <p className="doctor__text">
                2013 — 2018 гг. — Врач-кардиолог, многопрофильная клиника
                "Неомед" (г.&nbsp;Красноярск).
              </p>
              <p className="doctor__text">
                2010 — 2013 гг. — Врач-кардиолог кардиохирургического отделения
                №1 ФГБУ&nbsp;Федеральный центр сердечно-сосудистой хирургии
                (г.&nbsp;Красноярск).
              </p>
              <p className="doctor__text">
                2008 — 2010 гг. — Врач-кардиолог кардиохирургического отделения
                краеваой клинической больницы (г.&nbsp;Красноярск).
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                2006 — 2008 гг. — Клиническая ординатура по&nbsp;специальности
                "кардиология". Красноярская государственная медицинская
                академия.
              </p>
              <p className="doctor__text">
                2005 — 2006 гг. — Интернатура по&nbsp;специальности "терапия".
                Красноярская государственная медицинская академия.
              </p>
              <p className="doctor__text">
                1999 — 2005 гг. — Высшее профессиональное образование:
                Красноярская Государственная Медицинская Академия. Квалификация:
                врач. Специальность: лечебное дело.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                Кардиология. Годен до 21.05.2025. Выдан: ФГБОУ ВО «СПб&nbsp;ГУ»
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Членство</h3>
              <p className="doctor__text">
                Общероссийская общественная организация "Российское
                кардиологическое общество".
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
