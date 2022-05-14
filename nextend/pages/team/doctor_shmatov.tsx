import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/images/doctors/doctor_Shmatov.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Shmatov: NextPage = () => {
  const SEODetails = {
    title:
      'Руководитель Центра кардиохирургии и интервенционной кардиологии Шматов Дмитрий Викторович',
    description:
      'Профессор кафедры госпитальной хирургии СПбГУ, сердечно-сосудистый хирург, доктор медицинских наук. Более 2000 операций кардиохирургических операций.',
    pageLink: 'https://heartteamspb.com/team/doctor_shmatov',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1 className='article__header'>Шматов Дмитрий Викторович</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Шматов Дмитрий Викторович'
          />
          <div className='marked-container doctor__about'>
            <p>Заместитель директора по медицинской части (кардиохирургия),</p>
            <p>
              руководитель Центра кардиохирургии и&nbsp;интервенционной
              кардиологии,
            </p>
            <p>профессор кафедры госпитальной хирургии&nbsp;СПбГУ,</p>
            <p>сердечно-сосудистый хирург,</p>
            <p>доктор медицинских наук</p>
          </div>
          <Link
            href='/feedback/shmatov'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <iframe
            width='100%'
            height='470px'
            src='https://www.youtube.com/embed/iQdefk-KsrM'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />

          <h3>Врачебная деятельность</h3>
          <p>
            — 2014 г. по настоящее время - Заместитель директора
            по&nbsp;медицинской части (кардиохирургия).
          </p>
          <p>
            — 2013 – 2014 гг. - Заведующий кардиохирургическим отделением
            №&nbsp;2 СЗГМУ им.И.И.Мечникова Минздрава России.
          </p>
          <p>
            — 2010 – 2013 гг. - Заведующий кардиохирургическим отделением
            №&nbsp;3,Федеральный центр сердечно-сосудистой хирургии
            (г.&nbsp;Красноярск).
          </p>
          <p>
            — 2005 – 2006 гг. - Работал в качестве приглашенного
            хирурга-эксперта и&nbsp;научного сотрудника в&nbsp;Tianjin Tianhe
            Hospital (Китай). Цель рабочей командировки: организация работы
            и&nbsp;открытие сердечно-сосудистого центра.
          </p>
          <p>
            — 2003 – 2010 гг. - Врач-сердечно-сосудистый хирург, Отделение
            приобретенных пороков сердца, ФГБУ Новосибирский
            научно-исследовательский институт патологии кровообращения
            им.&nbsp;академика Е.Н.Мешалкина (г.&nbsp;Новосибирск).
          </p>

          <h3>Образование</h3>
          <p>
            — 2001 – 2003 гг. - Клиническая ординатура по&nbsp;специальности
            «сердечно-сосудистая хирургия», ФГБУ Новосибирский
            научно-исследовательский институт патологии кровообращения
            им.&nbsp;академика Е.Н.Мешалкина (г.&nbsp;Новосибирск).
          </p>
          <p>
            — 1995 – 2001 гг. - Высшее профессиональное образование:
            Новосибирская государственная медицинская академия. квалификация:
            врач. Специальность: лечебное дело.
          </p>

          <h3>Повышение квалификации</h3>
          <h4>2012 г.</h4>
          <p>
            — Department of Cardiovascular Surgery, Lenox Hill Hospital, New
            York, USA;
          </p>
          <p>
            — Department of Heart Surgery, University Hospital, Innsbruck,
            Austria;
          </p>
          <p>
            — 2011-Доктор медицинских наук, тема диссертации: «Хирургия
            клапанных пороков сердца с систолической дисфункцией левого
            желудочка», ФГБУ Новосибирский научно-исследовательский институт
            патологии кровообращения им. академика Е.Н. Мешалкина (г.
            Новосибирск).
          </p>
          <h4>2011 г.</h4>
          <p>
            — Salzburg Cleveland Seminar in Cardiothoracic Surgery (The Open
            Medical Institute of The American Austrian Foundation) – Победитель;
          </p>
          <p>
            — Department of Cardiac Surgery, Sheba Medical Center, Tel Aviv,
            Israel;
          </p>
          <p>— Faculty Hospital, Hradec Kralove, Czech Republic;</p>
          <p>
            — Department of Cardiovascular Surgery, Hospital Clinic, University
            of Barcelona, Barcelona, Spain.
          </p>
          <h4>2010 г.</h4>
          <p>— Leipzig Heart Centre, Leipzig, Germany.</p>
          <p>
            — 2004-Кандидат медицинских наук, тема диссертации: «Хирургическая
            коррекция митральных пороков сердца с использованием
            диэпроксиобработанных биопротезов», ФГБУ Новосибирский
            научно-исследовательский институт патологии кровообращения им.
            академика Е.Н. Мешалкина (г. Новосибирск).
          </p>

          <h3>Сертификат</h3>
          <p>
            — Организация здравоохранения и общественное здоровья. Информация
            обновляется.
          </p>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 07.10.2025. Выдан: СЗГМУ
            им.&nbsp;И.И.Мечникова.
          </p>

          <h3>Достижения</h3>
          <p>
            — Самостоятельно выполнил более 2000 операций кардиохирургических
            операций.
          </p>
          <p>
            — Опубликована 161 печатная работа, из них 46 – в зарубежной печати.
          </p>
          <p>
            — Результаты исследований были неоднократно доложены на
            отечественных, европейских, азиатских и мировых научных форумах
            разных уровней.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Shmatov;
