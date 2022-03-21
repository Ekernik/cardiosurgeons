import Header from '@/components/Header/Header';
import SEO from '@/components/SEO';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { NextPage } from 'next';

const Structure: NextPage = () => {
  const SEODetails = {
    title: 'Отделение кардиохирургии',
    description:
      'Отделение кардиохирургии Центра кардиологии и кардиохирургии. Комфортное лечение для пациентов.',
    pageLink: 'https://heartteamspb.com/structure/cardiosurgery',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className='container section__about-us'>
          <h1 className='article__header'>Отделение кардиохирургии</h1>
          <div className='marked-container'>
            <p className='article__p'>Раздел в разработке</p>
          </div>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Structure;
