import Header from '@/components/Header';
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
      <Header />
      <main className='container mt'>
        <article>
          <h1>Отделение кардиохирургии</h1>
          <div className='marked-container'>
            <p>Раздел в разработке</p>
          </div>
        </article>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default Structure;
