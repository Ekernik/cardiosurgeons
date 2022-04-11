import { NextPage } from 'next';
import { useState } from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Tab from '@/components/Tab';
import style from './styles.module.scss';
import { getReviews, getVideos } from '@/helpers/reviews_helper';

const FeedbackPage: NextPage = () => {
  const [selected, setSelected] = useState('text');

  const SEODetails = {
    title: 'Отзывы о Центре кардиохирургии и кардиологии.',
    description:
      'Отзывы наших пациентов о работе специалистов: врачей, мед. персонала. Отзывы о лечении в нашей клинике кардиохирургии и кардиологии.',
    pageLink: 'https://heartteamspb.com/feedback',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>
            Отзывы о нашем Центре
          </h1>
          <Tab selected={selected} setSelected={setSelected} />
          {selected === 'text' ? (
            <section className={style.section}>{getReviews()}</section>
          ) : (
            <section className={style.section__video}>{getVideos()}</section>
          )}
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default FeedbackPage;
