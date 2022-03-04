import Header from '@/components/Header/Header';
import SEO from '@/components/SEO';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import REVIEWS from '@/public/static/databases/reviews';
import ReviewBox from '@/components/ReviewBox';
import style from '@/styles/feedback.module.scss';
import { doctors } from '@/public/static/databases/doctors';

export default function Feedback() {
  const doctorID = 11;
  const doctorObj = doctors[doctorID];

  const getReviews = doctor => {
    const reviews = [...REVIEWS].reverse();

    let filteredReviews = reviews.filter(review =>
      review.doctors.includes(doctor.shortname),
    );
    return filteredReviews.map((review, i) => (
      <ReviewBox key={i + Date.now()} review={review} />
    ));
  };
  const SEODetails = {
    title: `Отзывы об ${doctorObj.name_about_who}`,
    description: `Отзывы наших пациентов о работе ${doctorObj.name_whos}.`,
    pageLink: 'https://heartteamspb.com/feedback/asadullin',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>{SEODetails.title}</h1>
          <section className={style.section}>{getReviews(doctorObj)}</section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
