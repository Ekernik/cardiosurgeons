import Head from 'next/head';
import Header from '../../components/Header/Header';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';

export default function Structure() {
  return (
    <>
      <Head>
        <title>Отделение кардиохирургии</title>
        <meta property='og:title' content='Отделение кардиохирургии' />
        <meta
          name='description'
          content='Отделение кардиохирургии Центра кардиологии и кардиохирургии. Комфортное лечение для пациентов.'
        />
        <meta
          property='og:description'
          content='Отделение кардиохирургии Центра кардиологии и кардиохирургии. Комфортное лечение для пациентов.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='./image.webp' />
        <meta
          property='og:url'
          content='https://heartteamspb.com/structure/cardiosurgery'
        />
      </Head>
      <div className='App'>
        <div id='curtain'></div>
        <main>
          <Header />
          <section className='container section__about-us'>
            <h1 className='article__header'>Отделение кардиохирургии</h1>
            <div className='marked-container'>
              <p className='article__p'>Раздел в разработке</p>
            </div>
          </section>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}
