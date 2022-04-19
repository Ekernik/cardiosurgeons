import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import img_doctor from '@/public/static/images/doctors/doctor_Stolyarov.webp';
import styles from '@/styles/article.module.scss';

const Stolyarov: NextPage = () => {
  const SEODetails = {
    title:
      'Заведующий отделением кардиохирургии с кабинетом РЭВДиЛ Столяров Максим Станиславович',
    description:
      'Сердечно-сосудистый хирург высшей категории, кандидат медицинских наук.',
    pageLink: 'https://heartteamspb.com/team/doctor_stolyarov',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <article className={`mt container ${styles.article} doctor__flex`}>
        <section className='doctor__card'>
          <h1>Столяров Максим Станиславович</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Столяров Максим Станиславович'
          />
          <div className='marked-container doctor__about'>
            <p>Заведующий отделением кардиохирургии с&nbsp;кабинетом РЭВДиЛ,</p>
            <p>
              сердечно-сосудистый хирург <br />
              высшей категории,
            </p>
            <p>кандидат медицинских наук</p>
          </div>
          <Link
            href='/feedback/stolyarov'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <iframe
            width='100%'
            height='470'
            src='https://www.youtube.com/embed/I9j36StFBcg'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />

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
            — С 2011 г. по настоящее время – Заведующий Центром кардиохирургии и
            интервенционной кардиологии.
          </p>
          <p>
            — 2011 - 2016 гг. - Заведующий отделением сердечно-сосудистой
            хирургии ФГБУ &quot;СПМЦ&quot; Минздрава России.
          </p>
          <p>
            — 2008-2011 гг. – Врач сердечно-сосудистый хирург
            кардиохирургического отделения ФГУ «Северо-Западный окружной
            медицинский центр» Минздравсоцразвития России (сейчас СПКК ФГБУ
            &quot;НМХЦ им. Н.И.Пирогова&quot; Минздравсоцразвития России).
          </p>
          <p>
            — 2006–2008 гг. - Научный сотрудник группы ангиохирургии лаборатории
            ишемической болезни сердца, ФГУ «Новосибирский
            Научно-Исследовательский Институт Патологии Кровообращения им.
            академика Е.Н.Мешалкина Федерального агентства по здравоохранению и
            социальному развитию».
          </p>
          <p>
            — 2001–2006 гг. - Сердечно-сосудистый хирург кардиохирургического
            отделения ишемической болезни сердца, ангиологии и трансплантологии,
            ФГУ «Новосибирский Научно-Исследовательский Институт Патологии
            Кровообращения им. академика Е.Н.Мешалкина Федерального агентства по
            здравоохранению и социальному развитию».
          </p>
          <p>
            — 2000-2001 гг. – Врач лаборант-исследователь лаборатории
            ишемической болезни сердца ФГУ «Научно-Исследовательский Институт
            Патологии Кровообращения им. академика Е.Н.Мешалкина».
          </p>

          <h3>Образование</h3>
          <p>
            — 2000-2002 гг. – Клиническая ординатура - ФГУ «Новосибирский НИИ
            патологии кровообращения им. академика Е.Н.Мешалкина Федерального
            агентства по здравоохранению и социальному развитию», по
            специальности «сердечно-сосудистая хирургия».
          </p>
          <p>— 2005 г. - Интернатура по специальности «Хирургия».</p>
          <p>
            — 1994-2000 гг. - Высшее профессиональное образование: Новосибирская
            государственная медицинская академия. Квалификация: врач.
            Специальность: лечебное дело.
          </p>

          <h3>Повышение квалификации</h3>
          <p>
            — 2020 г. - Повышение квалификации &quot;Актуальные вопросы
            сердечно-сосудистой хирургии&quot;.
          </p>
          <p>
            — 2010 г. – Специализация по специальности «Клиническая
            трансплантация почки», ФГУ «Научно-исследовательский институт
            трансплантации и искусственных органов».
          </p>
          <p>
            — 2010 г. - Специализация по специальности «Андрология»
            Санкт-Петербургская медицинская академия последипломного
            образования.
          </p>
          <p>
            — 2009 г. - Специализация по специальности «Рентгенология» Уральская
            медицинская академия последипломного образования.
          </p>
          <p>
            — 2009 г. - Специализация по специальности «Онкология» Санкт-
            Петербургская медицинская академия последипломного образования.
          </p>
          <p>
            2008 г. - Специализация по специальности «Ультразвуковая
            диагностика» Новосибирская государственная медицинская академия, г.
            Новосибирск.
          </p>

          <h3>Сертификат</h3>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 07.10.2025. Выдан: ФГБОУ ВО
            &quot;Северо-Западный государственный медицинский университет им.
            И.И.Мечникова&quot; МЗ РФ.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Stolyarov;
