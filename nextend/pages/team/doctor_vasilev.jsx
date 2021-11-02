import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img_doctor from "../../public/static/images/doctors/doctor_Vasilev.jpg";
import Contacts from "../../components/Contacts";

export default function Vasilev() {
  return (
    <>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Васильев Алексей Сергеевич</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Васильев Алексей Сергеевич"
              />
              <div className="marked-container doctor__about">
                <h2 className="doctor__position">
                  Сердечно-сосудистый хирург, специалист по
                  рентгенэндоваскулярным диагностике и лечению Центра
                  кардиохирургии и интервенционной кардиологии
                </h2>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">
                  — традиционные, гибридные и рентгенэндоваскулярные методы
                  лечения патологии брахиоцефальных артерий, артерий сердца,
                  артерий нижних конечностей.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  С 2013 г. по настоящее время - Сердечно-сосудистый хирург,
                  специалист по рентгенэндоваскулярным диагностике и лечению
                  Центра кардиохирургии и интервенционной кардиологии.
                </p>
                <p className="article__p">
                  2012 - 2013 гг. – Сердечно-сосудистый хирург отделения
                  сердечно-сосудистой хирургии Санкт-Петербургского клинического
                  комплекса ФГБУ «Национальный медико-хирургический центр им. Н.
                  И. Пирогова» Минздрава России.
                </p>
                <p className="article__p">
                  2007-2009 гг. – Начальник медицинской службы корабля 1 ранга
                  (Северный Флот).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2010-2012 гг. – Ординатура по специальности
                  сердечно-сосудистая хирургия. ФГБУ «Федеральный центр сердца,
                  крови и эндокринологии им. В. А. Алмазова» Минздравсоцразвития
                  России.
                </p>
                <p className="article__p">
                  2009-2010 г. – Ординатура по специальности хирургия. ГОУ ДПО
                  &quot;Санкт-Петербургская медицинская академия последипломного
                  образования&quot; Минздравсоцразвития России.
                </p>
                <p className="article__p">
                  2006–2007 г. – Интернатура по специальности хирургия.
                  Военно-медицинская академия им. С. М. Кирова.
                </p>
                <p className="article__p">
                  2000–2006 г. – Высшее профессиональное образование:
                  Военно-медицинская академия им. С. М. Кирова (г.
                  Санкт-Петербург). Квалификация: врач. Специальность: лечебное
                  дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — 2013 г. - Профессиональная переподготовка (ГБОУ ВПО
                  &quot;Новосибирский государственный медицинский
                  университет&quot; Минздрава России на базе ФГБУ
                  &quot;Новосибирский научно-исследовательский институт
                  патологии кровообращения им. Е. Н. Мешалкина&quot; Минздрава
                  России) по специальности &quot;Рентгенэндоваскулярные
                  диагностика и лечение&quot; (г. Новосибирск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Рентгенэндваскулярные диагностика и лечение. Годен до
                  20.10.2023. Выдан: ГБОУ ВПО СЗГМУ им. И. И. Мечникова.
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
