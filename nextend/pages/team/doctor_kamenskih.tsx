import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/images/doctors/doctor_Kamenskih.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Kamenskih: NextPage = () => {
  const SEODetails = {
    title: 'Кардиохирург Каменских Максим Сергеевич',
    description:
      'Специальности: сердечно-сосудистая хирургия, лечение заболеваний аорты и магистральных артерий, хирургическое лечение и профилактика церебро-васкулярных болезней.',
    pageLink: 'https://heartteamspb.com/team/doctor_kamenskih',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Каменских Максим Сергеевич</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Каменских Максим Сергеевич.'
          />
          <div className='marked-container doctor__about'>
            <p className='doctor__position'>Кардиохирург</p>
          </div>
          <Link
            href='/feedback/kamenskih'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <div className='doctor__info'>
          <h3>Направление деятельности</h3>
          <p>— сердечно-сосудистая хирургия</p>
          <p>
            — хирургическое лечение и профилактика церебро-васкулярных болезней
          </p>
          <p>
            — малоинвазивные и гибридные технологии в лечении заболеваний аорты
            и магистральных артерий
          </p>
          <h3>Врачебная деятельность</h3>
          <p>
            — С 2014 г. по настоящее время - Врач кардиохирург отделения
            кардиохирургии и интервенционной кардиологии.
          </p>
          <p>
            — 2014-2014 гг. - Врач сердечно-сосудистый хирург Федерального
            центра сердечно-сосудистой хирургии г. Пермь.
          </p>
          <p>
            — 2010-2013 гг. - Врач сердечно-сосудистый хирург Федерального
            центра сердечно-сосудистой хирургии г. Красноярск.
          </p>
          <p>
            — 2008-2010 гг. - Врач сердечно-сосудистый хирург отделения
            кардиохирургии Красноярской Краевой клинической больницы № 1.
          </p>
          <h3>Образование</h3>
          <p>
            — 2006-2008 гг. – Ординатура по сердечно-сосудистой хирургии.
            Кафедра факультетской хирургии Омской государственной медицинской
            академии на базе Омской областной клинической больницы.
          </p>
          <p>
            — 2005-2006 гг. – Интернатура на кафедре хирургических болезней №2
            Красноярской государственной медицинской академии на базе Краевой
            клинической больницы №1.
          </p>
          <p>
            — 1999-2005 гг. - Высшее профессиональное образование: Красноярская
            государственная медицинская академия. Квалификация: врач.
            Специальность: лечебное дело.
          </p>

          <h3>Повышение квалификации</h3>
          <p>
            — 2011-2012 гг. - Прохождение обучения в рамках образовательного
            курса повышения квалификации «Восходящие звезды» по теме «Актуальные
            вопросы сердечно-сосудистой хирургии» на базе ФГУ
            «Научно-Исследовательский Институт Патологии Кровообращения им.
            академика Е.Н.Мешалкина».
          </p>
          <h3>Сертификат</h3>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 05.04.2023. Выдан: ГБОУ ВПО
            СЗГМУ им. И.И.Мечникова.
          </p>
          <h3>Участие в конференциях</h3>
          <p>
            — 2013 г. - Участник и докладчик научного труда на 62 съезде
            Европейского сообщества сердечно-сосудистых и эндоваскулярных
            хирургов в Регенсбурге, Германия (The 62nd International Congress of
            the European Society for Cardiovascular and Endovascular Surgery in
            Regensburg, April 11-13, 2013).
          </p>
        </div>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Kamenskih;
