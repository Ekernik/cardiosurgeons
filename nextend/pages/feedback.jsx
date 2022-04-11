import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import REVIEWS from '@/public/static/databases/reviews';
import VIDEO_REVIEWS from '@/public/static/databases/videoReviews';
import TextCard from '@/components/FeedbackCard/TextCard';
import VideoCard from '@/components/FeedbackCard/VideoCard';
import style from '@/styles/feedback.module.scss';
import Tab from '@/components/Tab';
import { useState } from 'react';

const FeedbackPage = () => {
  const [selected, setSelected] = useState('text');
  const getReviews = () =>
    [...REVIEWS]
      .reverse()
      .map((review, i) => <TextCard key={i + Date.now()} review={review} />);

  const getVideos = () =>
    [...VIDEO_REVIEWS]
      .reverse()
      .map((review, i) => <VideoCard key={i + Date.now()} review={review} />);

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
