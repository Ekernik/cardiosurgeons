import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img_doctor from "../../public/static/images/doctors/doctor_Stolyarov.jpg";
import Contacts from "../../components/Contacts";

export default function Stolyarov() {
  return (
    <>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Столяров Максим Станиславович</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Столяров Максим Станиславович"
              />
              <div className="marked-container doctor__about">
                <h2 className="doctor__position">
                  Заведующий отделением кардиохирургии с кабинетом РЭВДиЛ, врач
                  сердечно-сосудистый хирург высшей категории,
                  <br /> кандидат медицинских наук.
                </h2>
              </div>
            </div>
            <div className="doctor__info">
              <iframe
                width="100%"
                height="470"
                src="https://www.youtube.com/embed/I9j36StFBcg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">— сердечно-сосудистая хирургия</p>
                <p className="article__p">
                  — хирургическое лечение и профилактика церебро-васкулярных
                  болезней
                </p>
                <p className="article__p">
                  — малоинвазивные и гибридные технологии в лечении заболеваний
                  аорты и магистральных артерий
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  — С 2011 г. по настоящее время – Заведующий Центром
                  кардиохирургии и интервенционной кардиологии.
                </p>
                <p className="article__p">
                  — 2011 - 2016 гг. - Заведующий отделением сердечно-сосудистой
                  хирургии ФГБУ &quot;СПМЦ&quot; Минздрава России.
                </p>
                <p className="article__p">
                  — 2008-2011 гг. – Врач сердечно-сосудистый хирург
                  кардиохирургического отделения ФГУ «Северо-Западный окружной
                  медицинский центр» Минздравсоцразвития России (сейчас СПКК
                  ФГБУ &quot;НМХЦ им. Н.И.Пирогова&quot; Минздравсоцразвития
                  России).
                </p>
                <p className="article__p">
                  — 2006–2008 гг. - Научный сотрудник группы ангиохирургии
                  лаборатории ишемической болезни сердца, ФГУ «Новосибирский
                  Научно-Исследовательский Институт Патологии Кровообращения им.
                  академика Е.Н.Мешалкина Федерального агентства по
                  здравоохранению и социальному развитию».
                </p>
                <p className="article__p">
                  — 2001–2006 гг. - Сердечно-сосудистый хирург
                  кардиохирургического отделения ишемической болезни сердца,
                  ангиологии и трансплантологии, ФГУ «Новосибирский
                  Научно-Исследовательский Институт Патологии Кровообращения им.
                  академика Е.Н.Мешалкина Федерального агентства по
                  здравоохранению и социальному развитию».
                </p>
                <p className="article__p">
                  — 2000-2001 гг. – Врач лаборант-исследователь лаборатории
                  ишемической болезни сердца ФГУ «Научно-Исследовательский
                  Институт Патологии Кровообращения им. академика
                  Е.Н.Мешалкина».
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  — 2000-2002 гг. – Клиническая ординатура - ФГУ «Новосибирский
                  НИИ патологии кровообращения им. академика Е.Н.Мешалкина
                  Федерального агентства по здравоохранению и социальному
                  развитию», по специальности «сердечно-сосудистая хирургия».
                </p>
                <p className="article__p">
                  — 2005 г. - Интернатура по специальности «Хирургия».
                </p>
                <p className="article__p">
                  — 1994-2000 гг. - Высшее профессиональное образование:
                  Новосибирская государственная медицинская академия.
                  Квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — 2020 г. - Повышение квалификации &quot;Актуальные вопросы
                  сердечно-сосудистой хирургии&quot;.
                </p>
                <p className="article__p">
                  — 2010 г. – Специализация по специальности «Клиническая
                  трансплантация почки», ФГУ «Научно-исследовательский институт
                  трансплантации и искусственных органов».
                </p>
                <p className="article__p">
                  — 2010 г. - Специализация по специальности «Андрология»
                  Санкт-Петербургская медицинская академия последипломного
                  образования.
                </p>
                <p className="article__p">
                  — 2009 г. - Специализация по специальности «Рентгенология»
                  Уральская медицинская академия последипломного образования.
                </p>
                <p className="article__p">
                  — 2009 г. - Специализация по специальности «Онкология» Санкт-
                  Петербургская медицинская академия последипломного
                  образования.
                </p>
                <p className="article__p">
                  2008 г. - Специализация по специальности «Ультразвуковая
                  диагностика» Новосибирская государственная медицинская
                  академия, г. Новосибирск.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 07.10.2025. Выдан:
                  ФГБОУ ВО &quot;Северо-Западный государственный медицинский
                  университет им. И.И.Мечникова&quot; МЗ РФ.
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
