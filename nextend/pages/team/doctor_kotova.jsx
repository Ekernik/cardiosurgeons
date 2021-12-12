import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/svg/doctor_woman.svg';
import Contacts from '../../components/Contacts';

export default function Kotova() {
  return (
    <>
      <Head>
        <title>Кардиолог Котова Анна Сергеевна</title>
        <meta
          name="description"
          content="Врач-кардиолог, специалист Центра кардиохирургии и интервенционной кардиологии Н.И.Пирогова."
        />
        <meta
          property="og:description"
          content="Врач-кардиолог, специалист Центра кардиохирургии и интервенционной кардиологии Н.И.Пирогова."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/svg/doctor_woman.jpg"
        />
        <meta property="og:title" content="Кардиолог Котова Анна Сергеевна" />
        <meta property="og:url" content="heartteamspb.com/team/doctor_kotova" />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Котова Анна Сергеевна</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Котова Анна Сергеевна"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">Кардиолог</p>
              </div>
              <Link
                href={{ pathname: '/feedback', query: { doctor: 'kotova' } }}
              >
                <a className="doctor__feedback">отзывы о враче</a>
              </Link>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  С 2018 г. по настоящее время - Врач-кардиолог Центра
                  кардиохирургии и&nbsp;интервенционной кардиологии.
                </p>
                <p className="article__p">
                  2013 — 2018 гг. — Врач-кардиолог, многопрофильная клиника
                  &quot;Неомед&quot; (г.&nbsp;Красноярск).
                </p>
                <p className="article__p">
                  2010 — 2013 гг. — Врач-кардиолог кардиохирургического
                  отделения №1 ФГБУ&nbsp;Федеральный центр сердечно-сосудистой
                  хирургии (г.&nbsp;Красноярск).
                </p>
                <p className="article__p">
                  2008 — 2010 гг. — Врач-кардиолог кардиохирургического
                  отделения краеваой клинической больницы (г.&nbsp;Красноярск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2006 — 2008 гг. — Клиническая ординатура по&nbsp;специальности
                  &quot;кардиология&quot;. Красноярская государственная
                  медицинская академия.
                </p>
                <p className="article__p">
                  2005 — 2006 гг. — Интернатура по&nbsp;специальности
                  &quot;терапия&quot;. Красноярская государственная медицинская
                  академия.
                </p>
                <p className="article__p">
                  1999 — 2005 гг. — Высшее профессиональное образование:
                  Красноярская Государственная Медицинская Академия.
                  Квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  Кардиология. Годен до 21.05.2025. Выдан: ФГБОУ ВО
                  «СПб&nbsp;ГУ»
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Членство</h3>
                <p className="article__p">
                  Общероссийская общественная организация &quot;Российское
                  кардиологическое общество&quot;.
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
