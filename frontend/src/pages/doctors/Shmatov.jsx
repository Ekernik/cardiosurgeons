import React from "react";

import img_doctor from "../../assets/images/doctors/doctor_Shmatov.jpg";

import "./index.scss";
import Contacts from "../../components/Contacts";

export default function Shmatov() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Шматов Дмитрий Викторович</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Шматов Дмитрий Викторович"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Заместитель директора по медицинской части (кардиохирургия),
                руководитель Центра кардиохирургии и&nbsp;интервенционной
                кардиологии, профессор кафедры госпитальной хирургии&nbsp;СПбГУ,
                врач сердечно-сосудистый хирург, доктор медицинских наук.
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <iframe
              width="100%"
              height="470px"
              src="https://www.youtube.com/embed/iQdefk-KsrM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                — 2014 г. по настоящее время - Заместитель директора
                по&nbsp;медицинской части (кардиохирургия).
              </p>
              <p className="doctor__text">
                — 2013 – 2014 гг. - Заведующий кардиохирургическим отделением
                №&nbsp;2 СЗГМУ им.И.И.Мечникова Минздрава России.
              </p>
              <p className="doctor__text">
                — 2010 – 2013 гг. - Заведующий кардиохирургическим отделением
                №&nbsp;3,Федеральный центр сердечно-сосудистой хирургии
                (г.&nbsp;Красноярск).
              </p>
              <p className="doctor__text">
                — 2005 – 2006 гг. - Работал в качестве приглашенного
                хирурга-эксперта и&nbsp;научного сотрудника в&nbsp;Tianjin
                Tianhe Hospital (Китай). Цель рабочей командировки: организация
                работы и&nbsp;открытие сердечно-сосудистого центра.
              </p>
              <p className="doctor__text">
                — 2003 – 2010 гг. - Врач-сердечно-сосудистый хирург, Отделение
                приобретенных пороков сердца, ФГБУ Новосибирский
                научно-исследовательский институт патологии кровообращения
                им.&nbsp;академика Е.Н.Мешалкина (г.&nbsp;Новосибирск).
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                — 2001 – 2003 гг. - Клиническая ординатура по&nbsp;специальности
                «сердечно-сосудистая хирургия», ФГБУ Новосибирский
                научно-исследовательский институт патологии кровообращения
                им.&nbsp;академика Е.Н.Мешалкина (г.&nbsp;Новосибирск).
              </p>
              <p className="doctor__text">
                — 1995 – 2001 гг. - Высшее профессиональное образование:
                Новосибирская государственная медицинская академия.
                квалификация: врач. Специальность: лечебное дело.
              </p>
            </section>

            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Повышение квалификации</h3>
              <h5 className="doctor__subsection">2012 г. - Специализация:</h5>
              <p className="doctor__text">
                — Department of Cardiovascular Surgery, Lenox Hill Hospital, New
                York, USA;
              </p>
              <p className="doctor__text">
                — Department of Heart Surgery, University Hospital, Innsbruck,
                Austria;
              </p>
              <p className="doctor__text">
                — 2011-Доктор медицинских наук, тема диссертации: «Хирургия
                клапанных пороков сердца с систолической дисфункцией левого
                желудочка», ФГБУ Новосибирский научно-исследовательский институт
                патологии кровообращения им. академика Е.Н. Мешалкина (г.
                Новосибирск).
              </p>
              <h5 className="doctor__subsection">2011 г. - Специализация:</h5>
              <p className="doctor__text">
                — Salzburg Cleveland Seminar in Cardiothoracic Surgery (The Open
                Medical Institute of The American Austrian Foundation) –
                Победитель;
              </p>
              <p className="doctor__text">
                — Department of Cardiac Surgery, Sheba Medical Center, Tel Aviv,
                Israel;
              </p>
              <p className="doctor__text">
                — Faculty Hospital, Hradec Kralove, Czech Republic;
              </p>
              <p className="doctor__text">
                — Department of Cardiovascular Surgery, Hospital Clinic,
                University of Barcelona, Barcelona, Spain.
              </p>
              <h5 className="doctor__subsection">2010 г. - Специализация:</h5>
              <p className="doctor__text">
                — Leipzig Heart Centre, Leipzig, Germany.
              </p>
              <p className="doctor__text">
                — 2004-Кандидат медицинских наук, тема диссертации:
                «Хирургическая коррекция митральных пороков сердца с
                использованием диэпроксиобработанных биопротезов», ФГБУ
                Новосибирский научно-исследовательский институт патологии
                кровообращения им. академика Е.Н. Мешалкина (г. Новосибирск).
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Организация здравоохранения и общественное здоровья.
                Информация обновляется.
              </p>
              <p className="doctor__text">
                — Сердечно-сосудистая хирургия. Годен до 07.10.2025. Выдан:
                СЗГМУ им.&nbsp;И.И.Мечникова.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Достижения</h3>
              <p className="doctor__text">
                — Самостоятельно выполнил более 2000 операций
                кардиохирургических операций.
              </p>
              <p className="doctor__text">
                — Опубликована 161 печатная работа, из них 46 – в зарубежной
                печати.
              </p>
              <p className="doctor__text">
                — Результаты исследований были неоднократно доложены на
                отечественных, европейских, азиатских и мировых научных форумах
                разных уровней.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
