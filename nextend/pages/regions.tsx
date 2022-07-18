import { NextPage } from 'next';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { renderRegionsNews } from '@/helpers/news_helper';
import styles from '@/styles/regions.module.scss';

const Regions: NextPage = () => {
  const SEODetails = {
    title: 'Прием кардиохирургов и кардиологов в городах РФ',
    description:
      'Запишитесь на прием в своем городе к кардиологам и кардиохирургам из Санкт-Петербурга.',
    pageLink: 'https://heartteamspb.com/regions',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='mt container'>
        <h1>Прием кардиохирургов и&nbsp;кардиологов в&nbsp;городах&nbsp;РФ</h1>
        <div className={styles.news_container}>{renderRegionsNews()}</div>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default Regions;
