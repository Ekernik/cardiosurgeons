import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Pyagai.webp';
import Contacts from '../../components/Contacts';

export default function Pyagai() {
  return (
    <>
      <Head>
        <title>Сердечно-сосудистый хирург Пягай Виктор Александрович</title>
        <meta
          name="description"
          content="Врач сердечно-сосудистый хирург. Специалист Центра кардиохирургии и интервенционной кардиологии клиники ВМТ им. Н.И. Пирогова СПБГУ."
        />
        <meta
          property="og:description"
          content="Врач сердечно-сосудистый хирург. Специалист Центра кардиохирургии и интервенционной кардиологии клиники ВМТ им. Н.И. Пирогова СПБГУ."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/doctors/doctor_Pyagai.webp"
        />
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург Пягай Виктор Александрович"
        />
        <meta property="og:url" content="heartteamspb.com/team/doctor_pyagai" />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Пягай Виктор Александрович</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Пягай Виктор Александрович"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">Сердечно-сосудистый хирург</p>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  — 2021 г. по настоящее время - Врач сердечно-сосудистый хирург
                  кардиохирургического отделения с кабинетом РЭВДиЛ.
                </p>
                <p className="article__p">
                  — 2016 – 2021 гг. - ФГБУ «НМИЦ им. В. А. Алмазова» Минздрава
                  России, г. Санкт-Петербург. Отделение сердечно-сосудистой
                  хирургии №1, врач сердечно-сосудистый хирург.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  — 2013-2015 гг. - Клиническая ординатура по
                  сердечно-сосудистой хирургии. Федеральное государственное
                  бюджетное образовательное учреждение высшего образования
                  «Первый Санкт-Петербургский государственный медицинский
                  университет имени академика И.П. Павлова» Министерства
                  здравоохранения Российской Федерации», г. Санкт-Петербург.
                  Кафедра хирургии факультетской с курсами лапароскопической и
                  сердечно-сосудистой хирургии с клиникой.
                </p>
                <p className="article__p">
                  — 2012-2013 гг. – Интернатура по хирургии. Федеральное
                  государственное бюджетное образовательное учреждение высшего
                  образования «Первый Санкт-Петербургский государственный
                  медицинский университет имени академика И.П. Павлова»
                  Министерства здравоохранения Российской Федерации», г.
                  Санкт-Петербург.
                </p>
                <p className="article__p">
                  — 2006-2012 гг. - Высшее профессиональное образование.
                  Федеральное государственное бюджетное образовательное
                  учреждение высшего образования «Первый Санкт-Петербургский
                  государственный медицинский университет имени академика И.П.
                  Павлова» Министерства здравоохранения Российской Федерации»,
                  г. Санкт-Петербург. Квалификация: врач. Специальность
                  «Лечебное дело».
                </p>
              </section>

              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — 2020 г. - ФГБУ «НМИЦ им. В. А. Алмазова» Минздрава России,
                  г. Санкт-Петербург. Дополнительная профессиональная программа
                  &quot;Избранные вопросы сердечно-сосудистой хирургии&quot;.
                </p>
                <p className="article__p">
                  — 2015 г. - ФГБОУ ВО «ПСПбГМУ имени академика И. П. Павлова»
                  Министерства здравоохранения Российской Федерации. Курс общего
                  усовершенствования &quot;Кардиохирургия&quot;, кафедра
                  хирургии факультетской с курсом лапароскопической хирургии и
                  сердечно-сосудистой хирургии с клиникой.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 04.10.2025. Выдан:
                  ФГБУ «НМИЦ им. В. А. Алмазова» Министерства здравоохранения
                  Российской Федерации.
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
