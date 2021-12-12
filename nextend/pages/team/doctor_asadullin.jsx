import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Asadullin.jpg';
import Contacts from '../../components/Contacts';

export default function Asadullin() {
  return (
    <>
      <Head>
        <title>Сердечно-сосудистый хирург Асадуллин Ильшат Шамилевич</title>
        <meta
          name="description"
          content="Направление деятельности: сердечно-сосудистая патология."
        />
        <meta
          property="og:description"
          content="Направление деятельности: сердечно-сосудистая патология."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/doctors/doctor_Asadullin.jpg"
        />
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург Асадуллин Ильшат Шамилевич"
        />
        <meta
          property="og:url"
          content="heartteamspb.com/team/doctor_asadullin"
        />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Асадуллин Ильшат Шамилевич</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Асадуллин Ильшат Шамилевич"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">Сердечно-сосудистый хирург</p>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">— сердечно-сосудистая патология.</p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  С 2020 г. по настоящее время – Врач сердечно-сосудистый хирург
                  кардиохирургического отделения с кабинетом РЭВДиЛ.
                </p>
                <p className="article__p">
                  2019 - 2020 гг. – Врач сердечно-сосудистый хирург,
                  Республиканский кардиологический центр, Республика
                  Башкортостан, город Уфа.
                </p>
                <p className="article__p">
                  2017 – 2019 гг. - Врач-хирург Бердской центральной городской
                  больницы, Новосибирская область, город Бердск.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2017 – 2019 гг. – Ординатура по сердечно-сосудистой хирургии.
                  НМИЦ им. академика Е.Н. Мешалкина, Новосибирская область, г.
                  Новосибирск.
                </p>
                <p className="article__p">
                  2016 -2017 гг. – Интернатура по хирургии. Башкирский
                  государственный медицинский университет, кафедра
                  «Факультетская хирургия с курсом колопроктологии», ГКБ № 21,
                  Республика Башкортостан, г. Уфа.
                </p>
                <p className="article__p">
                  2010 - 2016 гг. - Высшее профессиональное образование.
                  Башкирский государственный медицинский университет, г. Уфа.
                  Квалификация: врач. Специальность «Лечебное дело».
                </p>
                <p className="article__p">
                  2007 - 2010 гг. - Башкирский экономико-юридический техникум,
                  Специальность: право и организация социального обеспечения,
                  Квалификация: юрист.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 15.07.2025. Выдан:
                  ФГБУ НМИЦ им. академика Е. Н. Мешалкина.
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
