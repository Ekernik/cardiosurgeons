import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Starosockaya.jpg';
import Contacts from '../../components/Contacts';

export default function Starosockaya() {
  return (
    <>
      <Head>
        <title>Кардиолог Старосоцкая Мария Владимировна</title>
        <meta
          name='description'
          content='Старший кардиолог кардиохирургического отделения с кабинетом РЭВДиЛ. Автор 25 печатных работ.'
        />
        <meta
          property='og:description'
          content='Старший кардиолог кардиохирургического отделения с кабинетом РЭВДиЛ. Автор 25 печатных работ.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://heartteamspb.com/static/images/doctors/doctor_Starosockaya.jpg'
        />
        <meta
          property='og:title'
          content='Кардиолог Старосоцкая Мария Владимировна'
        />
        <meta
          property='og:url'
          content='heartteamspb.com/team/doctor_starosockaya'
        />
      </Head>
      <Header />
      <main className='page__doctor'>
        <section className='section__doctor container'>
          <div className='doctor__flex'>
            <div className='doctor__card'>
              <h1 className='article__header'>
                Старосоцкая Мария Владимировна
              </h1>
              <Image
                className='doctor__image'
                src={img_doctor}
                alt='Доктор Старосоцкая Мария Владимировна'
              />
              <div className='marked-container doctor__about'>
                <p className='doctor__position'>Кардиолог</p>
                <p className='doctor__position'>кандидат медицинских наук</p>
              </div>
              <Link href='/feedback/starosockaya'>
                <a className='doctor__feedback'>отзывы о враче</a>
              </Link>
            </div>
            <div className='doctor__info'>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Врачебная деятельность</h3>
                <p className='article__p'>
                  — С 2014 г. по настоящее время - Старший кардиолог
                  кардиохирургического отделения с кабинетом РЭВДиЛ.
                </p>
                <p className='article__p'>
                  — 2010 — 2014 гг. — Врач-кардиолог, кардиохирургическое
                  отделение №1 ФГБУ Федеральный центр сердечно-сосудистой
                  хирургии г. Красноярск.
                </p>
                <p className='article__p'>
                  — 2008 — 2010 гг. - Младший научный сотрудник по специальности
                  «Кардиология», ФГБУ Новосибирский Научно-исследовательский
                  институт патологии кровообращения им. академика Е. Н.
                  Мешалкина лаборатории ишемической болезни сердца Центра.
                  хирургии аорты, коронарных и периферических артерий.
                </p>
                <p className='article__p'>
                  — Опубликованы 25 печатных работ, из них 23 по теме
                  диссертации, из них 4 статьи в журналах, включенных ВАК в
                  «Перечень ведущих рецензируемых научных журналов и изданий».
                  Разработала и внедрила с соавторами в клиническую практику
                  медицинскую технологию «Тромболитическая терапия тромбоэмболии
                  легочных артерий рекомбинантным активатором плазминогена
                  урокиназного типа пуролазой».
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Членство</h3>
                <p className='article__p'>
                  — Общероссийская общественная организация «Российское
                  кардиологическое общество».
                </p>
                <p className='article__p'>
                  — Европейское общество кардиологов (ESC).
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Образование</h3>
                <p className='article__p'>
                  2009-2012 гг. - Аспирантура по специальности «Кардиология»,
                  ФГБУ Новосибирский Научно-исследовательский институт патологии
                  кровообращения им.академика Е. Н. Мешалкина.
                </p>
                <p className='article__p'>
                  2006-2008 гг. - Ординатура по специальности «Кардиология»,
                  ФГБУ Новосибирский Научно-исследовательский институт патологии
                  кровообращения им.академика Е. Н. Мешалкина.
                </p>
                <p className='article__p'>
                  2005-2006 гг. - Интернатура по специальности «Терапия с
                  основами МСЭ». Санкт-Петербургский институт усовершенствования
                  врачей-экспертов.
                </p>
                <p className='article__p'>
                  1999 - 2005 гг. - Высшее профессиональное образование:
                  Красноярская Государственная Медицинская Академия.
                  Квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Повышение квалификации</h3>
                <p className='article__p'>
                  — 2018 г. - Кардиология. Федеральное государственное бюджетное
                  образовательное учреждение высшего образования
                  «Северо-Западный государственный медицинский университет имени
                  И. И. Мечникова» Министерства здравоохранения Российской
                  Федерации.
                </p>
                <p className='article__p'>
                  — 2016 г. - Функциональная диагностика с углубленным изучением
                  эхокардиографии. Федеральное государственное бюджетное
                  образовательное учреждение высшего образования
                  «Северо-Западный государственный медицинский университет имени
                  И.И. Мечникова» Министерства здравоохранения Российской
                  Федерации.
                </p>
                <p className='article__p'>
                  — 2015 г. - Функциональная диагностика. Профессиональная
                  переподготовка. Федеральное государственное бюджетное
                  образовательное учреждение высшего образования
                  «Северо-Западный государственный медицинский университет имени
                  И. И. Мечникова» Министерства здравоохранения Российской
                  Федерации.
                </p>
                <p className='article__p'>
                  — 2013 г. - Кардиология. ИПО ГБОУ ВПО «Красноярский
                  Государственный Университет им.проф. В. Ф. Войно-Ясенецкого».
                </p>
                <p className='article__p'>
                  — 2012 г.- Защита кандидатской диссертации по теме
                  «Клинико-инструментальная оценка хирургического лечения острой
                  массивной ТЭЛА», ФГБУ Новосибирский Научно-исследовательский
                  институт патологии кровообращения им.академика Е. Н.
                  Мешалкина.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Сертификат</h3>
                <p className='article__p'>
                  — Кардиология. Годен до 22.12.2023. Выдан: ГБОУ ВПО СЗГМУ им.
                  И. И. Мечникова.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Участие в конференциях</h3>
                <p className='article__p'>
                  — 2018 г. - Конгресс Европейского общества кардиологии 2018
                  (ESC Congress 2018), г. Мюнхен.
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
