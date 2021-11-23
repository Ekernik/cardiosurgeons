import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Kappushev.jpg';
import Contacts from '../../components/Contacts';

export default function Kappushev() {
  return (
    <>
      <Head>
        <title>Cердечно-сосудистый хирург Каппушев Руслан Юсуфович</title>
        <meta
          name="description"
          content="Сердечно-сосудистый хирург 1-ой квалификационной категории, врач по рентгенэндоваскуляным диагностике и лечению 1-ой квалификационной категории."
        />
        <meta
          property="og:description"
          content="Сердечно-сосудистый хирург 1-ой квалификационной категории, врач по рентгенэндоваскуляным диагностике и лечению 1-ой квалификационной категории."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/doctors/doctor_Kappushev.jpg"
        />
        <meta
          property="og:title"
          content="Cердечно-сосудистый хирург Каппушев Руслан Юсуфович"
        />
        <meta
          property="og:url"
          content="heartteamspb.com/team/doctor_kappushev"
        />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Каппушев Руслан Юсуфович</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Каппушев Руслан Юсуфович"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">
                  Сердечно-сосудистый хирург 1-ой квалификационной категории,
                </p>
                <p className="doctor__position">
                  врач по рентгенэндоваскуляным диагностике и лечению 1-ой
                  квалификационной категории
                </p>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  — С 2016 г. по настоящее время - Врач сердечно-сосудистый
                  хирург Центра кардиохирургии и интервенционной кардиологии.
                </p>
                <p className="article__p">
                  — 2015-2016 гг. - Сердечно-сосудистый хирург отделения
                  сосудистой хирургии ГБУЗ АО АМОКБ г. Астрахань.
                </p>
                <p className="article__p">
                  — 2015-2016 гг. - Преподаватель кафедры факультетской хирургии
                  ГБОУ ВПО Астраханский ГМУ Минздрава России.
                </p>
                <p className="article__p">
                  — 2015 - 2016 гг. - Врач ретгенхирург кабинета
                  рентгенхирургических методов диагностики и лечения ГБУЗ АО
                  АМОКБ г. Астрахань.
                </p>
                <p className="article__p">
                  — 2015 г. - Врач - рентгенхирург РГБ ЛПУ «Карачаево-Черкесское
                  РКБ» ОРХМДЛ г. Черкесск.
                </p>
                <p className="article__p">
                  — 2014 г. - Врач - хирург ФГБУЗ КБ 101 ФМБА Россий, г.
                  Лермонтов, Ставропольский край.
                </p>
                <p className="article__p">
                  — 2014 г. - Врач - хирург ГБУЗ ЦГБ№1. г. Кисловодск,
                  Ставропольский край.
                </p>
                <p className="article__p">
                  — 2011-2013 гг. - Врач - хирург отделения неотложной хирургии
                  МБУЗ ГКБ №34 г. Новосибирск.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2011-2013 гг. - Ординатура. ФГБУ «Новосибирский
                  научно-исследовательский институт патологии кровообращения им.
                  Е. Н .Мешалкина» Минздравсоцразвития России. Специальность
                  сердечно-сосудистая хирургия. г. Новосибирск,Россия.
                </p>
                <p className="article__p">
                  2013 г. - Новосибирский Государственный Медицинский
                  Университет. Специализация - &quot;рентегнэдоваскулярная
                  диагностика и лечение&quot; на базе ФГБУ «Новосибирский Научно
                  Исследовательский Институт Патологии Кровообращения им. Е. Н.
                  Мешалкина» Минздравсоцразвития России (г. Новосибирск,
                  Россия).
                </p>
                <p className="article__p">
                  2010-2011 гг. - Интернатура. Новосибирский Государственный
                  Медицинский Университет. Кафедра факультетской хирургии (г.
                  Новосибирск, Россия).
                </p>
                <p className="article__p">
                  2004-2010 гг. - Высшее профессиональное образование:
                  Новосибирский Государственный Медицинский Университет.
                  Факультет лечебное дело. Квалификация: врач. Специальность:
                  лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Рентгенэндоваскулярные диагностика и лечение. Годен до
                  02.06.2023. Выдан: ГБОУ ВПО СЗГМУ им. И. И. Мечникова.
                </p>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 03.10.2023. Выдан:
                  ГБОУ ВПО СЗГМУ им. И. И. Мечникова.
                </p>
                <p className="article__p">
                  — Хирургия. Годен до 28.11.2025. Выдан: ГБОУ ВПО СЗГМУ им. И.
                  И. Мечникова.
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
