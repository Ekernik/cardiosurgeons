import { NextPage } from 'next';
import AnnouncementCard from '@/components/AnnouncementCard';
import announcementsArr from '@/public/static/databases/announcements';
import { announcementType } from 'types/announcement';
import ArticleLayout from 'layouts/ArticleLayout';

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
    <ArticleLayout details={SEODetails}>
      <main className='container mt'>
        <h1>Новости нашего центра</h1>
        <div className='grid'>{renderAnnouncements(announcementsArr)}</div>
      </main>
    </ArticleLayout>
  );
};

export default Announcements;
