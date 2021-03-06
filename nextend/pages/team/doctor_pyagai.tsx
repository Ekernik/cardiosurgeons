import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/images/doctors/doctor_Pyagai.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Pyagai: NextPage = () => {
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург Пягай Виктор Александрович',
    description:
      'Врач сердечно-сосудистый хирург. Специалист Центра кардиохирургии и интервенционной кардиологии клиники ВМТ им. Н.И. Пирогова СПБГУ.',
    pageLink: 'https://heartteamspb.com/team/doctor_pyagai',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Пягай Виктор Александрович</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Пягай Виктор Александрович'
          />
          <div className='marked-container doctor__about'>
            <p>Сердечно-сосудистый хирург</p>
          </div>
          <Link
            href='/feedback/pyagai'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Врачебная деятельность</h3>
          <p>
            — 2021 г. по настоящее время - Врач сердечно-сосудистый хирург
            кардиохирургического отделения с кабинетом РЭВДиЛ.
          </p>
          <p>
            — 2016 – 2021 гг. - ФГБУ «НМИЦ им. В. А. Алмазова» Минздрава России,
            г. Санкт-Петербург. Отделение сердечно-сосудистой хирургии №1, врач
            сердечно-сосудистый хирург.
          </p>

          <h3>Образование</h3>
          <p>
            — 2013-2015 гг. - Клиническая ординатура по сердечно-сосудистой
            хирургии. Федеральное государственное бюджетное образовательное
            учреждение высшего образования «Первый Санкт-Петербургский
            государственный медицинский университет имени академика И.П.
            Павлова» Министерства здравоохранения Российской Федерации», г.
            Санкт-Петербург. Кафедра хирургии факультетской с курсами
            лапароскопической и сердечно-сосудистой хирургии с клиникой.
          </p>
          <p>
            — 2012-2013 гг. – Интернатура по хирургии. Федеральное
            государственное бюджетное образовательное учреждение высшего
            образования «Первый Санкт-Петербургский государственный медицинский
            университет имени академика И.П. Павлова» Министерства
            здравоохранения Российской Федерации», г. Санкт-Петербург.
          </p>
          <p>
            — 2006-2012 гг. - Высшее профессиональное образование. Федеральное
            государственное бюджетное образовательное учреждение высшего
            образования «Первый Санкт-Петербургский государственный медицинский
            университет имени академика И.П. Павлова» Министерства
            здравоохранения Российской Федерации», г. Санкт-Петербург.
            Квалификация: врач. Специальность «Лечебное дело».
          </p>

          <h3>Повышение квалификации</h3>
          <p>
            — 2020 г. - ФГБУ «НМИЦ им. В. А. Алмазова» Минздрава России, г.
            Санкт-Петербург. Дополнительная профессиональная программа
            &quot;Избранные вопросы сердечно-сосудистой хирургии&quot;.
          </p>
          <p>
            — 2015 г. - ФГБОУ ВО «ПСПбГМУ имени академика И. П. Павлова»
            Министерства здравоохранения Российской Федерации. Курс общего
            усовершенствования &quot;Кардиохирургия&quot;, кафедра хирургии
            факультетской с курсом лапароскопической хирургии и
            сердечно-сосудистой хирургии с клиникой.
          </p>

          <h3>Сертификат</h3>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 04.10.2025. Выдан: ФГБУ
            «НМИЦ им. В. А. Алмазова» Министерства здравоохранения Российской
            Федерации.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Pyagai;
