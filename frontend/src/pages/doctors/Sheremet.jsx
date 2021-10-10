import React from 'react';

import img_doctor from '../../assets/images/doctors/doctor_Sheremet.jpg';

import './index.scss';
import Contacts from '../../components/Contacts';

export default function Sheremet() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Шеремет Антон Андреевич</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Шеремет Антон Андреевич
"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач сердечно-сосудистый хирург, аритмолог Центра кардиохирургии
                и интервенционной кардиологии
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Направление деятельности</h3>
              <p className="doctor__text">
                —{' '}
                <strong>
                  Интервенционное лечение нарушений ритма сердца и проводимости:
                </strong>{' '}
                Катетерная аблация и электрофизиологические исследования в том
                числе в условиях 3D навигационного картирования, при нарушениях
                ритма сердца: синдром WPW, предсердная тахикардия, ПРАВУТ,
                пароксизмальная/персистирующая фибрилляция предсердий,трепетание
                предсердий,желудочковые аритмии (желудочковая экстрасистолия,
                желудочковая тахикардия).
              </p>

              <p className="doctor__text">
                — <strong>Имплантация и программирование</strong> (Medtronic,
                St.Jude Medical, Boston Scientific) электрокардиостимуляторов.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                С 2019 г. по настоящее время - Врач сердечно-сосудистый хирург,
                аритмолог Центра кардиохирургии и интервенционной кардиологии.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                2016-2018 гг. - Ординатура по сердечно-сосудистой хирургии.
                Северо-Западный государственный медицинский университет им. И.И.
                Мечникова.
              </p>
              <p className="doctor__text">
                2010-2016 гг. - Высшее профессиональное образование:
                Северо-Западный государственный медицинский университет им. И.И.
                Мечникова. Квалификация: врач. Специальность: лечебное дело.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Сердечно-сосудистая хирургия. Годен до 15.08.2023. Выдан: ГБОУ
                ВПО СЗГМУ им. И. И. Мечникова.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Участие в конференциях</h3>
              <p className="doctor__text">
                — 2017, 2018 гг. - «VI Санкт-Петербургская школа аритмологов»
                СЗФМ им. В. А. Алмазова.
              </p>
              <p className="doctor__text">
                — 2017 г. - «Криоклуб «Medtronic» Городская больница №26.
              </p>
              <p className="doctor__text">
                — 2018 г. - «CARDIOSTIM 2018» Международный конгресс
                аритмологов. Участник, оргкомитет. ParkInn «Прибалтийская».
              </p>
              <p className="doctor__text">
                — 2017-2018 гг. - Обучающие курсы EHRA in Russia для
                электрофизиологов.
              </p>
              <p className="doctor__text">
                — 2019 г. - “Johnson&amp;Johnson INSTITUTE”. Образовательный
                курс по использованию Сarto3 (v6) для картирования аритмий.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
