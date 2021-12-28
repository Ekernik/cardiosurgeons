import Head from 'next/head';
import Header from '../../components/Header/Header';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';
import REVIEWS from '../../public/static/databases/reviews';
import ReviewBox from '../../components/ReviewBox';
import style from '../../styles/feedback.module.scss';
import { doctors } from '../../public/static/databases/doctors';

export default function Feedback() {
  const doctorID = 1;
  const doctorObj = doctors[doctorID];

  const getReviews = (doctor) => {
    const reviews = [...REVIEWS].reverse();

    let filteredReviews = reviews.filter((review) =>
      review.doctors.includes(doctor.shortname)
    );
    return filteredReviews.map((review, i) => (
      <ReviewBox key={i + Date.now()} review={review} />
    ));
  };

  return (
    <>
      <Head>
        <title>Отзывы о {doctorObj.name_about_who}</title>
        <meta
          property='og:title'
          content={`Отзывы о ${doctorObj.name_about_who}`}
        />
        <meta
          name='description'
          content={`Отзывы наших пациентов о работе ${doctorObj.name_whos}.`}
        />
        <meta
          property='og:description'
          content={`Отзывы наших пациентов о работе ${doctorObj.name_whos}.`}
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://heartteamspb.com/static/images/bg-doctors.webp'
        />
        <meta
          property='og:url'
          content={`https://heartteamspb.com/feedback/${doctorObj.shortname}`}
        />
      </Head>
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <main className={`container ${style.container}`}>
          <h1 className={`article__header ${style.h1}`}>
            {`Отзывы о ${doctorObj.name_about_who}`}
          </h1>
          <section className={style.section}>{getReviews(doctorObj)}</section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
