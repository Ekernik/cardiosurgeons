import Head from 'next/head';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer/Footer';
import REVIEWS from '../public/static/databases/reviews';
import ReviewBox from '../components/ReviewBox';
import style from '../styles/feedback.module.scss';

export default function Feedback() {
  return (
    <>
      <Head>
        <title>Отзывы о клинике.</title>
        <meta property="og:title" content="Отзывы о клинике." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta property="og:url" content="https://heartteamspb.com/feedback" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>Отзывы о нашем Центре</h1>
          <section className={style.section}>
            {REVIEWS.map((review, i) => (
              <ReviewBox key={i + Date.now()} review={review} />
            ))}
          </section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
