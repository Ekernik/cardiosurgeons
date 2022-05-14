import { NextPage } from 'next';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { doctors } from '@/public/static/databases/doctors';
import { getReviews } from '@/helpers/reviews_helper';
import style from './styles.module.scss';

const DoctorFeedback: NextPage = () => {
  const doctorObj = doctors.filter(doc => doc.shortname === 'asadullin')[0];

  const SEODetails = {
    title: `Отзывы об ${doctorObj.name_about_who}`,
    description: `Отзывы наших пациентов о работе ${doctorObj.name_whos}.`,
    pageLink: 'https://heartteamspb.com/feedback/asadullin',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='container mt'>
        <h1>{SEODetails.title}</h1>
        <section className={style.section}>{getReviews(doctorObj)}</section>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default DoctorFeedback;
