import React from 'react';

import img_doctor from '../../assets/images/doctors/doctor_Suhanova.jpg';

import './index.scss';
import Contacts from '../../components/Contacts';

export default function Suhanova() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Суханова Ольга Викторовна</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Суханова Ольга Викторовна"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач-кардиолог Центра кардиохирургии и интервенционной
                кардиологии
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                2016 г. по настоящее время — Врач - кардиолог Центра
                кардиохирургии и интервенционной кардиологии
              </p>
              <p className="doctor__text">
                2015 г. - Врач-кардиолог кардиологического отделения ФГБУ ВЦЭРМ
                им. А.М. Никифорова МЧС России г. Санкт - Петербург.
              </p>
              <p className="doctor__text">
                2013-2014 гг. - Врач-терапевт приемного отделения, врач-терапевт
                отделения торакальной хирургии СПб ГБУЗ «Городская Покровская
                больница», врач-терапевт МЦ «Покровский».
              </p>
              <p className="doctor__text">
                2010-2013 гг. - СПб ГБУЗ «Городская Покровская больница»,
                отделение реанимации и интенсивной терапии, отделение
                кардиологии, хирургическое отделение, медицинская сестра.
              </p>
              <p className="doctor__text">
                2008-2009 гг. - ФГБУ "ФМИЦ им. В. А. Алмазова", приемное
                отделение, младшая медицинская сестра.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                2013-2015 гг. – Клиническая ординатура по специальности
                «Кардиология». Северно-Западный Государственный Медицинский
                Университет им. И. И. Мечникова (СЗГМУ им. И. И. Мечникова).
              </p>
              <p className="doctor__text">
                2012-2013 гг. - Интернатура по специальности "Терапия".
                Санкт-Петербургский государственный Педиатрический Медицинский
                университет (СПбГПМУ).
              </p>
              <p className="doctor__text">
                2006-2012 гг.- Высшее профессиональное образование:
                Санкт-Петербургская Государственная Педиатрическая Медицинская
                Академия (СПбГПМА). Квалификация:врач. Специальность: лечебное
                дело.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Кардиология. Годен до 31.10.2025. Выдан: Выдан: ФГБОУ ВО «СПб
                ГУ».
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
