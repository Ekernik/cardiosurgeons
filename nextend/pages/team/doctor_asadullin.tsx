import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/images/doctors/doctor_Asadullin.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Asadullin: NextPage = () => {
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург Асадуллин Ильшат Шамилевич',
    description: 'Направление деятельности: сердечно-сосудистая патология.',
    pageLink: 'https://heartteamspb.com/team/doctor_asadullin',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Асадуллин Ильшат Шамилевич</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Асадуллин Ильшат Шамилевич'
          />
          <div className='marked-container doctor__about'>
            <p className='doctor__position'>Сердечно-сосудистый хирург</p>
          </div>
          <Link
            href='/feedback/asadullin'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Направление деятельности</h3>
          <p>— сердечно-сосудистая патология.</p>
          <h3>Врачебная деятельность</h3>
          <p>
            С 2020 г. по настоящее время – Врач сердечно-сосудистый хирург
            кардиохирургического отделения с кабинетом РЭВДиЛ.
          </p>
          <p>
            2019 - 2020 гг. – Врач сердечно-сосудистый хирург, Республиканский
            кардиологический центр, Республика Башкортостан, город Уфа.
          </p>
          <p>
            2017 – 2019 гг. - Врач-хирург Бердской центральной городской
            больницы, Новосибирская область, город Бердск.
          </p>
          <h3>Образование</h3>
          <p>
            2017 – 2019 гг. – Ординатура по сердечно-сосудистой хирургии. НМИЦ
            им. академика Е.Н. Мешалкина, Новосибирская область, г. Новосибирск.
          </p>
          <p>
            2016 -2017 гг. – Интернатура по хирургии. Башкирский государственный
            медицинский университет, кафедра «Факультетская хирургия с курсом
            колопроктологии», ГКБ № 21, Республика Башкортостан, г. Уфа.
          </p>
          <p>
            2010 - 2016 гг. - Высшее профессиональное образование. Башкирский
            государственный медицинский университет, г. Уфа. Квалификация: врач.
            Специальность «Лечебное дело».
          </p>
          <p>
            2007 - 2010 гг. - Башкирский экономико-юридический техникум,
            Специальность: право и организация социального обеспечения,
            Квалификация: юрист.
          </p>
          <h3>Сертификат</h3>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 15.07.2025. Выдан: ФГБУ
            НМИЦ им. академика Е. Н. Мешалкина.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Asadullin;
