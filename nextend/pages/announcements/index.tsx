import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import announcementsArr from '@/public/static/databases/announcements';
import { announcementType } from 'types/announcement';
import AnnouncementCard from '@/components/AnnouncementCard';

const Announcements = () => {
  let renderAnnouncements = (announcementsArr: announcementType[]) => {
    return announcementsArr.map(announcement => (
      <AnnouncementCard key={announcement.id} {...announcement} />
    ));
  };

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
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className='section'>
          <div className='container'>
            <h1 className='article__header'>Новости нашего центра</h1>
            <div className='grid'>{renderAnnouncements(announcementsArr)}</div>
          </div>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Announcements;
