import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/public/static/images/doctors/doctor_Sheremet.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Sheremet: NextPage = () => {
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург Шеремет Антон Андреевич',
    description:
      'Аритмолог. Интервенционное лечение нарушений ритма сердца и проводимости.',
    pageLink: 'https://heartteamspb.com/team/doctor_sheremet',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <article className='mt container doctor__flex'>
        <section className='doctor__card'>
          <h1>Шеремет Антон Андреевич</h1>
          <Image
            className='doctor__image'
            src={img_doctor}
            alt='Доктор Шеремет Антон Андреевич'
          />
          <div className='marked-container doctor__about'>
            <p>Сердечно-сосудистый хирург,</p>
            <p>аритмолог</p>
          </div>
          <Link
            href='/feedback/sheremet'
            text='отзывы о враче'
            classes='doctor__feedback'
          />
        </section>
        <section className='doctor__info'>
          <h3>Направление деятельности</h3>
          <p>
            — Интервенционное лечение нарушений ритма сердца и проводимости:{' '}
            Катетерная аблация и электрофизиологические исследования в том числе
            в условиях 3D навигационного картирования, при нарушениях ритма
            сердца: синдром WPW, предсердная тахикардия, ПРАВУТ,
            пароксизмальная/персистирующая фибрилляция предсердий,трепетание
            предсердий,желудочковые аритмии (желудочковая экстрасистолия,
            желудочковая тахикардия).
          </p>

          <p>
            — Имплантация и программирование (Medtronic, St.Jude Medical, Boston
            Scientific) электрокардиостимуляторов.
          </p>

          <h3>Врачебная деятельность</h3>
          <p>
            С 2019 г. по настоящее время - Врач сердечно-сосудистый хирург,
            аритмолог Центра кардиохирургии и интервенционной кардиологии.
          </p>

          <h3>Образование</h3>
          <p>
            2016-2018 гг. - Ординатура по сердечно-сосудистой хирургии.
            Северо-Западный государственный медицинский университет им. И.И.
            Мечникова.
          </p>
          <p>
            2010-2016 гг. - Высшее профессиональное образование: Северо-Западный
            государственный медицинский университет им. И.И. Мечникова.
            Квалификация: врач. Специальность: лечебное дело.
          </p>

          <h3>Сертификат</h3>
          <p>
            — Сердечно-сосудистая хирургия. Годен до 15.08.2023. Выдан: ГБОУ ВПО
            СЗГМУ им. И. И. Мечникова.
          </p>

          <h3>Участие в конференциях</h3>
          <p>
            — 2017, 2018 гг. - «VI Санкт-Петербургская школа аритмологов» СЗФМ
            им. В. А. Алмазова.
          </p>
          <p>— 2017 г. - «Криоклуб «Medtronic» Городская больница №26.</p>
          <p>
            — 2018 г. - «CARDIOSTIM 2018» Международный конгресс аритмологов.
            Участник, оргкомитет. ParkInn «Прибалтийская».
          </p>
          <p>
            — 2017-2018 гг. - Обучающие курсы EHRA in Russia для
            электрофизиологов.
          </p>
          <p>
            — 2019 г. - “Johnson&amp;Johnson INSTITUTE”. Образовательный курс по
            использованию Сarto3 (v6) для картирования аритмий.
          </p>
        </section>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Sheremet;
