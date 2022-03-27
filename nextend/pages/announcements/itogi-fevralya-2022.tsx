import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { NextPage } from 'next';

const Announcement: NextPage = () => {
  const SEODetails = {
    title:
      'Итоги лечения пациентов из регионов в клинике кардиохирургии: февраль 2022.',
    description:
      'В феврале в нашей больнице кардиохирургии было прооперировано более 150 человек. Записывайтесь на прием и вы!',
    pageLink: 'https://heartteamspb.com/announcements/itogi-fevralya-2022',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <section className='container mt'>
          <h1 className='article__header'>
            Февраль: итоги лечения пациентов из регионов в нашей клинике
          </h1>
          <p className='article__p'>
            <strong>
              В феврале 2022 года в стационаре Центра кардиохирургии проходили
              лечение пациенты из различных уголков РФ:
            </strong>
          </p>
          <p className='article__p'>
            Жители Санкт-Петербурга и области: 28 человек
          </p>
          <p className='article__p'>Вологодской области — 38 человек</p>
          <p className='article__p'>Новгородской области — 18 человек</p>
          <p className='article__p'>Смоленской области — 9 человек</p>
          <p className='article__p'>Брянской области — 8 человек</p>
          <p className='article__p'>Псковской области — 7 человек</p>
          <p className='article__p'>
            Из Нижнего Новгорода, Ставропольского края и Орловской области —
            приехало по 5 человек от каждого региона, из Костромской, Тамбовской
            и Мурманской областей — приехало по 3 пациента.
          </p>
          <p className='article__p'>
            А также на базе Центра кардиохирургии проходили лечение единичные
            пациенты из Белгородской, Владимирской, Курской, Саратовской,
            Удмуртской областей; Забайкальского и Хабаровского краёв,
            Карачаево-Черкесской республики, Карелии, Северной Осетии и
            Ханты-Мансийского автономного округа.
          </p>
          <p className='article__p'>
            Мы рады помочь жителям Санкт-Петербурга и других регионов РФ с
            болезнями сердца и сердечно-сосудистой системы. Звоните,
            записывайтесь на прием – и получайте{' '}
            <Link
              href='/besplatnoe-lechenie-po-kvotam'
              text='бесплатное лечение по квотам'
            />{' '}
            и ОМС.
          </p>
          <p className='article__p'>
            Всем пациентам, проходившим лечение в нашем Центре, мы желаем
            скорейшего выздоровления и хорошей дороги домой!
          </p>
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Announcement;
