import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import REVIEWS from '@/public/static/databases/reviews';
import ReviewBox from '@/components/ReviewBox';
import style from '@/styles/feedback.module.scss';

const FeedbackPage = () => {
  const getReviews = () =>
    [...REVIEWS]
      .reverse()
      .map((review, i) => <ReviewBox key={i + Date.now()} review={review} />);

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
        <div id='curtain'></div>
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>
            Отзывы о нашем Центре
          </h1>
          <section className={style.section}>{getReviews()}</section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default FeedbackPage;
