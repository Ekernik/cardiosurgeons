import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import announcementsArr from '@/public/static/databases/announcements';
import { announcementType } from 'types/announcement';
import AnnouncementCard from '@/components/AnnouncementCard';
import { NextPage } from 'next';

const Announcements: NextPage = () => {
  const renderAnnouncements = (announcementsArr: announcementType[]) =>
    announcementsArr.map(announcement => (
      <AnnouncementCard key={announcement.id} {...announcement} />
    ));

  const SEODetails = {
    title: 'Новости центра кардиохирургии и интервенционной кардиологии',
    description:
      'Читайте свежие новости центра кардиохирургии и интервенционной кардиологии',
    pageLink: 'https://heartteamspb.com/announcements',
    type: 'article',
  };
  
  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='container mt'>
        <h1>Новости нашего центра</h1>
        <div className='grid'>{renderAnnouncements(announcementsArr)}</div>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcements;
