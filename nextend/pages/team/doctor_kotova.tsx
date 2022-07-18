import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/svg/doctor_woman.svg';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Kotova: NextPage = () => {
  const SEODetails = {
    title: 'Кардиолог Котова Анна Сергеевна',
    description:
      'Врач-кардиолог, специалист Центра кардиохирургии и интервенционной кардиологии Н.И.Пирогова.',
    pageLink: 'https://heartteamspb.com/team/doctor_kotova',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Котова Анна Сергеевна</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Котова Анна Сергеевна'
          />
          <div className='marked-container doctor__about'>
            <p>Кардиолог</p>
          </div>
          <Link
            href='/feedback/kotova'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Врачебная деятельность</h3>
          <p>
            С 2018 г. по настоящее время - Врач-кардиолог Центра кардиохирургии
            и&nbsp;интервенционной кардиологии.
          </p>
          <p>
            2013 — 2018 гг. — Врач-кардиолог, многопрофильная клиника
            &quot;Неомед&quot; (г.&nbsp;Красноярск).
          </p>
          <p>
            2010 — 2013 гг. — Врач-кардиолог кардиохирургического отделения №1
            ФГБУ&nbsp;Федеральный центр сердечно-сосудистой хирургии
            (г.&nbsp;Красноярск).
          </p>
          <p>
            2008 — 2010 гг. — Врач-кардиолог кардиохирургического отделения
            краеваой клинической больницы (г.&nbsp;Красноярск).
          </p>

          <h3>Образование</h3>
          <p>
            2006 — 2008 гг. — Клиническая ординатура по&nbsp;специальности
            &quot;кардиология&quot;. Красноярская государственная медицинская
            академия.
          </p>
          <p>
            2005 — 2006 гг. — Интернатура по&nbsp;специальности
            &quot;терапия&quot;. Красноярская государственная медицинская
            академия.
          </p>
          <p>
            1999 — 2005 гг. — Высшее профессиональное образование: Красноярская
            Государственная Медицинская Академия. Квалификация: врач.
            Специальность: лечебное дело.
          </p>

          <h3>Сертификат</h3>
          <p>Кардиология. Годен до 21.05.2025. Выдан: ФГБОУ ВО «СПб&nbsp;ГУ»</p>

          <h3>Членство</h3>
          <p>
            Общероссийская общественная организация &quot;Российское
            кардиологическое общество&quot;.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Kotova;
