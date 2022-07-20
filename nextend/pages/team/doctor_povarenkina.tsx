import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/images/doctors/doctor_Povarenkina.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Povarenkina: NextPage = () => {
  const SEODetails = {
    title: 'Кардиолог Поварёнкина Вера Валерьевна',
    description:
      'Направление деятельности: подготовка больных к эндоваскулярным вмешательствам, ведение пациентов после операций.',
    pageLink: 'https://heartteamspb.com/team/doctor_povarenkina',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Поварёнкина Вера Валерьевна</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Поварёнкина Вера Валерьевна'
          />
          <div className='marked-container doctor__about'>
            <p className='doctor__position'>Кардиолог</p>
          </div>
          <Link
            href='/feedback/povarenkina'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Направление деятельности</h3>
          <p>
            — Введение больных со сложными нарушениями ритма и проводимости до и
            после хирургического лечения (определение показаний к проведению
            радиочастотной абляции, имплантации электрокардиостимуляторов).
          </p>
          <p>
            — Подготовка больных к эндоваскулярным вмешательствам и операциям в
            условиях искусственного кровообращения; ведение пациентов до и после
            аортокоронарного шунтирования, протезирования механических и
            биологических клапанов, TAVI.
          </p>
          <p>
            — Введение больных после имплантации стент - графтов по поводу
            патологии аорты., ангиопластики и стентирования коронарных артерий,
            брахиоцефальных артерий, сосудов нижних конечностей,
            реваскуляризации миокарда.
          </p>
          <p>
            — Диагностика и лечение больных с острым коронарным синдромом
            (острый инфаркт миокарда и нестабильная стенокардия).
          </p>
          <p>— Ведение пациентов с патологией аорты и ее ветвей.</p>
          <p>
            — Ведение пациентов с заболеваниями эндокарда, миокарда и перикарда.
          </p>
          <p>
            — Коррекция нарушений липидного обмена и подбор антикоагулянтной
            терапии.
          </p>

          <h3>Врачебная деятельность</h3>
          <p>
            — С 2017 г. по настоящее время - Врач - кардиолог Центра
            кардиохирургии и интервенционной кардиологии.
          </p>

          <h3>Образование</h3>
          <p>
            2009 - 2011 гг. - Клиническая ординатура по специальности
            кардиология.
          </p>
          <p>
            2008-2009 гг. - Клиническая интернатура по терапии на кафедре ФПК и
            ППС.
          </p>
          <p>
            2002 - 2008 гг. - Высшее профессиональное образование: Северный
            Государственный Медицинский Университет. Квалификация:врач.
            Специальность: лечебное дело.
          </p>

          <h3>Повышение квалификации</h3>
          <p>
            — Прошла повышение квалификации по циклам «Вопросы клинической
            кардиологии и кардиохирургии: диагностика и показания к
            хирургическому лечению пороков, ИБС и нарушений ритма сердца», «
            Чреспищеводная и эндокардиальная электрокардиостимуляция, ведение
            больных с имплантированными устройствами.
          </p>

          <h3>Сертификат</h3>
          <p>— Кардиология. Годен до 04.06.2026. Выдан: ФГБОУ ВО «СПбГУ».</p>

          <h3>Членство</h3>
          <p>— Российское и Европейское Кардиологическое Общество</p>
          <p>
            — Всероссийское научное общество специалистов по клинической
            электрофизиологии.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Povarenkina;