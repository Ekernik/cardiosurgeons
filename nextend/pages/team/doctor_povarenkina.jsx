import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img_doctor from "../../public/static/images/doctors/doctor_Povarenkina.jpg";
import Contacts from "../../components/Contacts";

export default function Povarenkina() {
  return (
    <>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Поварёнкина Вера Валерьевна</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Поварёнкина Вера Валерьевна"
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
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">
                  — Введение больных со сложными нарушениями ритма и
                  проводимости до и после хирургического лечения (определение
                  показаний к проведению радиочастотной абляции, имплантации
                  электрокардиостимуляторов).
                </p>
                <p className="article__p">
                  — Подготовка больных к эндоваскулярным вмешательствам и
                  операциям в условиях искусственного кровообращения; ведение
                  пациентов до и после аортокоронарного шунтирования,
                  протезирования механических и биологических клапанов, TAVI.
                </p>
                <p className="article__p">
                  — Введение больных после имплантации стент - графтов по поводу
                  патологии аорты., ангиопластики и стентирования коронарных
                  артерий, брахиоцефальных артерий, сосудов нижних конечностей,
                  реваскуляризации миокарда.
                </p>
                <p className="article__p">
                  — Диагностика и лечение больных с острым коронарным синдромом
                  (острый инфаркт миокарда и нестабильная стенокардия).
                </p>
                <p className="article__p">
                  — Ведение пациентов с патологией аорты и ее ветвей.
                </p>
                <p className="article__p">
                  — Ведение пациентов с заболеваниями эндокарда, миокарда и
                  перикарда.
                </p>
                <p className="article__p">
                  — Коррекция нарушений липидного обмена и подбор
                  антикоагулянтной терапии.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  — С 2017 г. по настоящее время - Врач - кардиолог Центра
                  кардиохирургии и интервенционной кардиологии.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2009 - 2011 гг. - Клиническая ординатура по специальности
                  кардиология.
                </p>
                <p className="article__p">
                  2008-2009 гг. - Клиническая интернатура по терапии на кафедре
                  ФПК и ППС.
                </p>
                <p className="article__p">
                  2002 - 2008 гг. - Высшее профессиональное образование:
                  Северный Государственный Медицинский Университет.
                  Квалификация:врач. Специальность: лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — Прошла повышение квалификации по циклам «Вопросы клинической
                  кардиологии и кардиохирургии: диагностика и показания к
                  хирургическому лечению пороков, ИБС и нарушений ритма сердца»,
                  « Чреспищеводная и эндокардиальная электрокардиостимуляция,
                  ведение больных с имплантированными устройствами.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Кардиология. Годен до 04.06.2026. Выдан: ФГБОУ ВО «СПбГУ».
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Членство</h3>
                <p className="article__p">
                  — Российское и Европейское Кардиологическое Общество
                </p>
                <p className="article__p">
                  — Всероссийское научное общество специалистов по клинической
                  электрофизиологии.
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
