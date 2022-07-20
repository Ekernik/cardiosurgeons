import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import img_doctor from '@/public/static/images/doctors/doctor_Vasilev.webp';

const Vasilev: NextPage = () => {
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург Васильев Алексей Сергеевич',
    description: 'Специалист по рентгенэндоваскулярным диагностике и лечению.',
    pageLink: 'https://heartteamspb.com/team/doctor_vasilev',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Васильев Алексей Сергеевич</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Васильев Алексей Сергеевич'
          />
          <div className='marked-container doctor__about'>
            <p>Сердечно-сосудистый хирург,</p>
            <p>специалист по рентгенэндоваскулярным диагностике и лечению</p>
          </div>
          <Link
            href='/feedback/vasilev'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <div className='doctor__info'>
          <h3>Направление деятельности</h3>
          <p>
            — традиционные, гибридные и рентгенэндоваскулярные методы лечения
            патологии брахиоцефальных артерий, артерий сердца, артерий нижних
            конечностей.
          </p>

          <h3>Врачебная деятельность</h3>
          <p>
            С 2013 г. по настоящее время - Сердечно-сосудистый хирург,
            специалист по рентгенэндоваскулярным диагностике и лечению Центра
            кардиохирургии и интервенционной кардиологии.
          </p>
          <p>
            2012 - 2013 гг. – Сердечно-сосудистый хирург отделения
            сердечно-сосудистой хирургии Санкт-Петербургского клинического
            комплекса ФГБУ «Национальный медико-хирургический центр им. Н. И.
            Пирогова» Минздрава России.
          </p>
          <p>
            2007-2009 гг. – Начальник медицинской службы корабля 1 ранга
            (Северный Флот).
          </p>

          <h3>Образование</h3>
          <p>
            2010-2012 гг. – Ординатура по специальности сердечно-сосудистая
            хирургия. ФГБУ «Федеральный центр сердца, крови и эндокринологии им.
            В. А. Алмазова» Минздравсоцразвития России.
          </p>
          <p>
            2009-2010 г. – Ординатура по специальности хирургия. ГОУ ДПО
            &quot;Санкт-Петербургская медицинская академия последипломного
            образования&quot; Минздравсоцразвития России.
          </p>
          <p>
            2006–2007 г. – Интернатура по специальности хирургия.
            Военно-медицинская академия им. С. М. Кирова.
          </p>
          <p>
            2000–2006 г. – Высшее профессиональное образование:
            Военно-медицинская академия им. С. М. Кирова (г. Санкт-Петербург).
            Квалификация: врач. Специальность: лечебное дело.
          </p>

          <h3>Повышение квалификации</h3>
          <p>
            — 2013 г. - Профессиональная переподготовка (ГБОУ ВПО
            &quot;Новосибирский государственный медицинский университет&quot;
            Минздрава России на базе ФГБУ &quot;Новосибирский
            научно-исследовательский институт патологии кровообращения им. Е. Н.
            Мешалкина&quot; Минздрава России) по специальности
            &quot;Рентгенэндоваскулярные диагностика и лечение&quot; (г.
            Новосибирск).
          </p>

          <h3>Сертификат</h3>
          <p>
            — Рентгенэндваскулярные диагностика и лечение. Годен до 20.10.2023.
            Выдан: ГБОУ ВПО СЗГМУ им. И. И. Мечникова.
          </p>
        </div>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Vasilev;