import Head from 'next/head';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import REVIEWS from '../public/static/databases/reviews';
import ReviewBox from '../components/ReviewBox';
import style from '../styles/feedback.module.scss';
import { useEffect, useState } from 'react';

export default function Feedback() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(window?.location?.search?.slice(8));
  }, []);

  const getReviews = (search) => {
    const reviews = [...REVIEWS].reverse();
    if (search === '') {
      return reviews.map((review, i) => (
        <ReviewBox key={i + Date.now()} review={review} />
      ));
    } else {
      let filteredReviews = reviews.filter((review) =>
        review.doctors.includes(search),
      );
      return filteredReviews.map((review, i) => (
        <ReviewBox key={i + Date.now()} review={review} />
      ));
    }
  };

  return (
    <>
      <Head>
        <title>Отзывы о Центре кардиохирургии и кардиологии</title>
        <meta
          property="og:title"
          content="Отзывы о Центре кардиохирургии и кардиологии"
        />
        <meta
          name="description"
          content="Отзывы наших пациентов о работе специалистов: врачей, мед. персонала. Отзывы о лечении в нашей клинике кардиохирургии и кардиологии."
        />
        <meta
          property="og:description"
          content="Отзывы наших пациентов о работе специалистов: врачей, мед. персонала. Отзывы о лечении в нашей клинике кардиохирургии и кардиологии."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta property="og:url" content="https://heartteamspb.com/feedback" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>
            Отзывы о нашем Центре
          </h1>
          <section className={style.section}>{getReviews(search)}</section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
