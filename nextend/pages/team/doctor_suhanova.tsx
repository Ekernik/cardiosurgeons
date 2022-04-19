import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import img_doctor from '@/public/static/images/doctors/doctor_Suhanova.webp';
import styles from '@/styles/article.module.scss';

const Suhanova: NextPage = () => {
  const SEODetails = {
    title: 'Кардиолог Суханова Ольга Викторовна',
    description:
      'Врач - кардиолог Центра кардиохирургии и интервенционной кардиологии.',
    pageLink: 'https://heartteamspb.com/team/doctor_suhanova',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <article className={`mt container ${styles.article} doctor__flex`}>
        <section className='doctor__card'>
          <h1>Суханова Ольга Викторовна</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Суханова Ольга Викторовна'
          />
          <div className='marked-container doctor__about'>
            <p>Кардиолог</p>
          </div>
          <Link
            href='/feedback/suhanova'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Врачебная деятельность</h3>
          <p>
            2016 г. по настоящее время — Врач - кардиолог Центра кардиохирургии
            и интервенционной кардиологии
          </p>
          <p>
            2015 г. - Врач-кардиолог кардиологического отделения ФГБУ ВЦЭРМ им.
            А.М. Никифорова МЧС России г. Санкт - Петербург.
          </p>
          <p>
            2013-2014 гг. - Врач-терапевт приемного отделения, врач-терапевт
            отделения торакальной хирургии СПб ГБУЗ «Городская Покровская
            больница», врач-терапевт МЦ «Покровский».
          </p>
          <p>
            2010-2013 гг. - СПб ГБУЗ «Городская Покровская больница», отделение
            реанимации и интенсивной терапии, отделение кардиологии,
            хирургическое отделение, медицинская сестра.
          </p>
          <p>
            2008-2009 гг. - ФГБУ &quot;ФМИЦ им. В. А. Алмазова&quot;, приемное
            отделение, младшая медицинская сестра.
          </p>

          <h3>Образование</h3>
          <p>
            2013-2015 гг. – Клиническая ординатура по специальности
            «Кардиология». Северно-Западный Государственный Медицинский
            Университет им. И. И. Мечникова (СЗГМУ им. И. И. Мечникова).
          </p>
          <p>
            2012-2013 гг. - Интернатура по специальности &quot;Терапия&quot;.
            Санкт-Петербургский государственный Педиатрический Медицинский
            университет (СПбГПМУ).
          </p>
          <p>
            2006-2012 гг.- Высшее профессиональное образование:
            Санкт-Петербургская Государственная Педиатрическая Медицинская
            Академия (СПбГПМА). Квалификация:врач. Специальность: лечебное дело.
          </p>

          <h3>Сертификат</h3>
          <p>
            — Кардиология. Годен до 31.10.2025. Выдан: Выдан: ФГБОУ ВО «СПб ГУ».
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Suhanova;
