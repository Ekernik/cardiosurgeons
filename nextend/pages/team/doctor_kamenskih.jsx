import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Kamenskih.jpg';
import Contacts from '../../components/Contacts';

export default function Kamenskih() {
  return (
    <>
      <Head>
        <title>Кардиохирург Каменских Максим Сергеевич</title>
        <meta
          name='description'
          content='Специальности: сердечно-сосудистая хирургия, лечение заболеваний аорты и магистральных артерий, хирургическое лечение и профилактика церебро-васкулярных болезней.'
        />
        <meta
          property='og:description'
          content='Специальности: сердечно-сосудистая хирургия, лечение заболеваний аорты и магистральных артерий, хирургическое лечение и профилактика церебро-васкулярных болезней.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://heartteamspb.com/static/images/doctors/doctor_Kamenskih.jpg'
        />
        <meta
          property='og:title'
          content='Кардиохирург Каменских Максим Сергеевич'
        />
        <meta
          property='og:url'
          content='heartteamspb.com/team/doctor_kamenskih'
        />
      </Head>
      <Header />
      <main className='page__doctor'>
        <section className='section__doctor container'>
          <div className='doctor__flex'>
            <div className='doctor__card'>
              <h1 className='article__header'>Каменских Максим Сергеевич</h1>
              <Image
                className='doctor__image'
                src={img_doctor}
                alt='Доктор Каменских Максим Сергеевич
'
              />
              <div className='marked-container doctor__about'>
                <h2 className='doctor__position'>Кардиохирург</h2>
              </div>
              <Link href='/feedback/kamenskih'>
                <a className='doctor__feedback'>отзывы о враче</a>
              </Link>
            </div>
            <div className='doctor__info'>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Направление деятельности</h3>
                <p className='article__p'>— сердечно-сосудистая хирургия</p>
                <p className='article__p'>
                  — хирургическое лечение и профилактика церебро-васкулярных
                  болезней
                </p>
                <p className='article__p'>
                  — малоинвазивные и гибридные технологии в лечении заболеваний
                  аорты и магистральных артерий
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Врачебная деятельность</h3>
                <p className='article__p'>
                  — С 2014 г. по настоящее время - Врач кардиохирург отделения
                  кардиохирургии и интервенционной кардиологии.
                </p>
                <p className='article__p'>
                  — 2014-2014 гг. - Врач сердечно-сосудистый хирург Федерального
                  центра сердечно-сосудистой хирургии г. Пермь.
                </p>
                <p className='article__p'>
                  — 2010-2013 гг. - Врач сердечно-сосудистый хирург Федерального
                  центра сердечно-сосудистой хирургии г. Красноярск.
                </p>
                <p className='article__p'>
                  — 2008-2010 гг. - Врач сердечно-сосудистый хирург отделения
                  кардиохирургии Красноярской Краевой клинической больницы № 1.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Образование</h3>
                <p className='article__p'>
                  — 2006-2008 гг. – Ординатура по сердечно-сосудистой хирургии.
                  Кафедра факультетской хирургии Омской государственной
                  медицинской академии на базе Омской областной клинической
                  больницы.
                </p>
                <p className='article__p'>
                  — 2005-2006 гг. – Интернатура на кафедре хирургических
                  болезней №2 Красноярской государственной медицинской академии
                  на базе Краевой клинической больницы №1.
                </p>
                <p className='article__p'>
                  — 1999-2005 гг. - Высшее профессиональное образование:
                  Красноярская государственная медицинская академия.
                  Квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>

              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Повышение квалификации</h3>
                <p className='article__p'>
                  — 2011-2012 гг. - Прохождение обучения в рамках
                  образовательного курса повышения квалификации «Восходящие
                  звезды» по теме «Актуальные вопросы сердечно-сосудистой
                  хирургии» на базе ФГУ «Научно-Исследовательский Институт
                  Патологии Кровообращения им. академика Е.Н.Мешалкина».
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Сертификат</h3>
                <p className='article__p'>
                  — Сердечно-сосудистая хирургия. Годен до 05.04.2023. Выдан:
                  ГБОУ ВПО СЗГМУ им. И.И.Мечникова.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Участие в конференциях</h3>
                <p className='article__p'>
                  — 2013 г. - Участник и докладчик научного труда на 62 съезде
                  Европейского сообщества сердечно-сосудистых и эндоваскулярных
                  хирургов в Регенсбурге, Германия (The 62nd International
                  Congress of the European Society for Cardiovascular and
                  Endovascular Surgery in Regensburg, April 11-13, 2013).
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
