import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Shmatov.jpg';
import Contacts from '../../components/Contacts';

export default function Shmatov() {
  return (
    <>
      <Head>
        <title>
          Руководитель Центра кардиохирургии и интервенционной кардиологии
          Шматов Дмитрий Викторович
        </title>
        <meta
          name="description"
          content="Профессор кафедры госпитальной хирургии СПбГУ, сердечно-сосудистый хирург, доктор медицинских наук. Более 2000 операций кардиохирургических операций."
        />
        <meta
          property="og:description"
          content="Профессор кафедры госпитальной хирургии СПбГУ, сердечно-сосудистый хирург, доктор медицинских наук. Более 2000 операций кардиохирургических операций."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/doctors/doctor_Shmatov.jpg"
        />
        <meta
          property="og:title"
          content="Руководитель Центра кардиохирургии и интервенционной кардиологии Шматов Дмитрий Викторович"
        />
        <meta
          property="og:url"
          content="heartteamspb.com/team/doctor_shmatov"
        />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Шматов Дмитрий Викторович</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Шматов Дмитрий Викторович"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">
                  Заместитель директора по медицинской части (кардиохирургия),
                </p>
                <p className="doctor__position">
                  руководитель Центра кардиохирургии и&nbsp;интервенционной
                  кардиологии,
                </p>
                <p className="doctor__position">
                  профессор кафедры госпитальной хирургии&nbsp;СПбГУ,
                </p>
                <p className="doctor__position">сердечно-сосудистый хирург,</p>
                <p className="doctor__position">доктор медицинских наук</p>
              </div>
              <Link
                href={{ pathname: '/feedback', query: { doctor: 'shmatov' } }}
              >
                <a className="doctor__feedback">отзывы о враче</a>
              </Link>
            </div>
            <div className="doctor__info">
              <iframe
                width="100%"
                height="470px"
                src="https://www.youtube.com/embed/iQdefk-KsrM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  — 2014 г. по настоящее время - Заместитель директора
                  по&nbsp;медицинской части (кардиохирургия).
                </p>
                <p className="article__p">
                  — 2013 – 2014 гг. - Заведующий кардиохирургическим отделением
                  №&nbsp;2 СЗГМУ им.И.И.Мечникова Минздрава России.
                </p>
                <p className="article__p">
                  — 2010 – 2013 гг. - Заведующий кардиохирургическим отделением
                  №&nbsp;3,Федеральный центр сердечно-сосудистой хирургии
                  (г.&nbsp;Красноярск).
                </p>
                <p className="article__p">
                  — 2005 – 2006 гг. - Работал в качестве приглашенного
                  хирурга-эксперта и&nbsp;научного сотрудника в&nbsp;Tianjin
                  Tianhe Hospital (Китай). Цель рабочей командировки:
                  организация работы и&nbsp;открытие сердечно-сосудистого
                  центра.
                </p>
                <p className="article__p">
                  — 2003 – 2010 гг. - Врач-сердечно-сосудистый хирург, Отделение
                  приобретенных пороков сердца, ФГБУ Новосибирский
                  научно-исследовательский институт патологии кровообращения
                  им.&nbsp;академика Е.Н.Мешалкина (г.&nbsp;Новосибирск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  — 2001 – 2003 гг. - Клиническая ординатура
                  по&nbsp;специальности «сердечно-сосудистая хирургия», ФГБУ
                  Новосибирский научно-исследовательский институт патологии
                  кровообращения им.&nbsp;академика Е.Н.Мешалкина
                  (г.&nbsp;Новосибирск).
                </p>
                <p className="article__p">
                  — 1995 – 2001 гг. - Высшее профессиональное образование:
                  Новосибирская государственная медицинская академия.
                  квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>

              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <h5 className="doctor__subsection">2012 г. - Специализация:</h5>
                <p className="article__p">
                  — Department of Cardiovascular Surgery, Lenox Hill Hospital,
                  New York, USA;
                </p>
                <p className="article__p">
                  — Department of Heart Surgery, University Hospital, Innsbruck,
                  Austria;
                </p>
                <p className="article__p">
                  — 2011-Доктор медицинских наук, тема диссертации: «Хирургия
                  клапанных пороков сердца с систолической дисфункцией левого
                  желудочка», ФГБУ Новосибирский научно-исследовательский
                  институт патологии кровообращения им. академика Е.Н. Мешалкина
                  (г. Новосибирск).
                </p>
                <h5 className="doctor__subsection">2011 г. - Специализация:</h5>
                <p className="article__p">
                  — Salzburg Cleveland Seminar in Cardiothoracic Surgery (The
                  Open Medical Institute of The American Austrian Foundation) –
                  Победитель;
                </p>
                <p className="article__p">
                  — Department of Cardiac Surgery, Sheba Medical Center, Tel
                  Aviv, Israel;
                </p>
                <p className="article__p">
                  — Faculty Hospital, Hradec Kralove, Czech Republic;
                </p>
                <p className="article__p">
                  — Department of Cardiovascular Surgery, Hospital Clinic,
                  University of Barcelona, Barcelona, Spain.
                </p>
                <h5 className="doctor__subsection">2010 г. - Специализация:</h5>
                <p className="article__p">
                  — Leipzig Heart Centre, Leipzig, Germany.
                </p>
                <p className="article__p">
                  — 2004-Кандидат медицинских наук, тема диссертации:
                  «Хирургическая коррекция митральных пороков сердца с
                  использованием диэпроксиобработанных биопротезов», ФГБУ
                  Новосибирский научно-исследовательский институт патологии
                  кровообращения им. академика Е.Н. Мешалкина (г. Новосибирск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Организация здравоохранения и общественное здоровья.
                  Информация обновляется.
                </p>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до 07.10.2025. Выдан:
                  СЗГМУ им.&nbsp;И.И.Мечникова.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Достижения</h3>
                <p className="article__p">
                  — Самостоятельно выполнил более 2000 операций
                  кардиохирургических операций.
                </p>
                <p className="article__p">
                  — Опубликована 161 печатная работа, из них 46 – в зарубежной
                  печати.
                </p>
                <p className="article__p">
                  — Результаты исследований были неоднократно доложены на
                  отечественных, европейских, азиатских и мировых научных
                  форумах разных уровней.
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
