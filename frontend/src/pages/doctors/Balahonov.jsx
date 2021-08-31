import React from "react";

import img_doctor from "../../assets/images/doctors/doctor_Balahonov.jpg";

import "./index.scss";
import Contacts from "../../components/Contacts";

export default function Balahonov() {
  return (
    <main className="page__doctor">
      <section className="section__doctor container">
        <div className="doctor__flex">
          <div className="doctor__card">
            <h1 className="doctor__name">Балахонов Василий Васильевич</h1>
            <img
              className="doctor__image"
              src={img_doctor}
              alt="Доктор Балахонов Василий Васильевич"
            />
            <div className="marked-container doctor__about">
              <h2 className="doctor__position">
                Врач сердечно-сосудистый хирург высшей категории Центра
                кардиохирургии и&nbsp;интервенционной кардиологии,
                <br /> кандидат медицинских наук.
              </h2>
            </div>
          </div>
          <div className="doctor__info">
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Направление деятельности</h3>
              <p className="doctor__text">
                — Владеет техникой протезирования клапанов сердца (механическими
                и&nbsp;биологическими протезами), клапансохраняющих операций,
                радиочастотной аблации и&nbsp;криоаблации предсердий при
                мерцательной аритмии (Left side Maze&#65279;/&nbsp;Full Maze).
              </p>

              <p className="doctor__text">
                — В поле профессиональных интересов находятся реконструктивная
                хирургия клапанов сердца, осложненные варианты ишемической
                болезни сердца, хирургия фибрилляции предсердий, симультантные
                операции онкологических больных в&nbsp;сочетании
                с&nbsp;ишемической болезнью сердца
                и&#65279;/&#65279;или&nbsp;клапанной патологией сердца,
                каротидная эндартерэктомия, а&nbsp;также гибридные операции.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Врачебная деятельность</h3>
              <p className="doctor__text">
                2015&nbsp;г. по&nbsp;настоящее время - Врач сердечно-сосудистый
                хирург кардиохирургического отделения
                с&nbsp;кабинетом&nbsp;РЭВДиЛ.
              </p>
              <p className="doctor__text">
                2006 - 2010&nbsp;гг. - Врач-сердечно-сосудистый хирург,
                Кардиохирургическое отделение, отделение сосудистой хирургии,
                КГБУ&nbsp;Краевая клиническая больница&nbsp;№1
                (г.&nbsp;Красноярск).
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Образование</h3>
              <p className="doctor__text">
                2004 - 2006&nbsp;гг. - Клиническая ординатура
                по&nbsp;специальности «Общая хирургия» ГОУ&nbsp;ВПО Красноярская
                Государственная Медицинская академия.
              </p>
              <p className="doctor__text">
                1998 - 2004&nbsp;гг. - Высшее профессиональное образование:
                ГОУ&nbsp;ВПО Красноярская Государственная Медицинская академия.
                Квалификация: врач. Специальность: лечебное дело.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Повышение квалификации</h3>
              <p className="doctor__text">
                — 2014&nbsp;г. - Первичная специализация по&nbsp;специальности
                «Функциональная диагностика» ИПО&nbsp;ГБОУ&nbsp;ВПО Красноярская
                Государственная Медицинская академия
                им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого Минздрава России.
              </p>
              <p className="doctor__text">
                — 2009&nbsp;г. - Специализация: хирургия грудной аорты
                и&nbsp;её&nbsp;ветвей ИПО&nbsp;ГОУ&nbsp;ВПО Красноярский
                Государственный Медицинский университет
                им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого.
              </p>
              <p className="doctor__text">
                — 2008&nbsp;г. - Профессиональная переподготовка
                по&nbsp;специальности «сердечно-сосудистая хирургия»
                ИПО&nbsp;ГОУ&nbsp;ВПО Красноярская Государственная Медицинская
                академия им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого Росздрава.
              </p>
              <p className="doctor__text">
                — 2007&nbsp;г. - Кандидат медицинских наук.
              </p>
              <p className="doctor__text">
                — 2007&nbsp;г. - Специализация: хирургия ишемической болезни
                сердца; хирургия приобретенных пороков сердца. ФГБУ
                Новосибирский научно-исследовательский институт патологии
                кровообращения им.&nbsp;академика Е.Н.Мешалкина
                (г.&nbsp;Новосибирск).
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Сертификат</h3>
              <p className="doctor__text">
                — Сердечно-сосудистая хирургия. Годен до&nbsp;05.04.2023. Выдан:
                ГБОУ&nbsp; ВПО&nbsp;СЗГМУ им.&nbsp;И.И.Мечникова.
              </p>
              <p className="doctor__text">
                — Ультразвуковая диагностика. Годен до&nbsp;30.01.2024.
                «АНО&nbsp;ВО «Европейский Университет» Бизнес треугольник».
              </p>
              <p className="doctor__text">
                — Функциональная диагностика. Годен до&nbsp;22.05.2024. Выдан:
                ФГБОУ&nbsp;ВО «СПб&nbsp;ГУ».
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Достижения</h3>
              <p className="doctor__text">
                — Опубликовано 36 печатных работ, из&nbsp;них
                26&nbsp;–&nbsp;в&nbsp;зарубежной печати.
              </p>
              <p className="doctor__text">
                — Результаты исследований были неоднократно доложены
                на&nbsp;отечественных, европейских, азиатских, скандинавских
                и&nbsp;мировых научных форумах разных уровней.
              </p>
            </section>
            <section className="doctor__theme-section">
              <h3 className="doctor__theme">Участие в конференциях</h3>
              <p className="doctor__text">
                — 2013&nbsp;г. -21-st&nbsp;Annual meeting of&nbsp;the&nbsp;Asian
                Society for Cardiovascular and Thoracic Surgery. Выступление
                с&nbsp;докладами: «Сравнительный анализ результатов
                радиочастотной аблации и&nbsp;криоаблации у&nbsp;больных
                с&nbsp;мерцательной аритмией»; «Непосредственные
                и&nbsp;отдаленные результаты хирургического лечения фибрилляции
                предсердий у&nbsp;больных с&nbsp;митральным пороком сердца».
              </p>
              <p className="doctor__text">
                — 2012&nbsp;г. - 4-th joint Scandinavian conference
                in&nbsp;Cardiothoracic Surgery (Scandinavian Association
                of&nbsp;Thoracic Surgery). Выступление с&nbsp;докладом:
                «Непосредственные результаты хирургического лечения фибрилляции
                предсердий у&nbsp;больных с&nbsp;митральным пороком сердца».
              </p>
              <p className="doctor__text">
                — 2011&nbsp;г. - 60-th International congress
                of&nbsp;the&nbsp;European Society for&nbsp;Cardiovascular
                and&nbsp;Endovascular Surgery. Выступление с&nbsp;докладами:
                «12&nbsp;летний опыт имплантации биологических митральных
                протезов Кемкор»; «Повторные оперативные вмешательства
                при&nbsp;клапанной патологии сердца». Москва, Россия.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
