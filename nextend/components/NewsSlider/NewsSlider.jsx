import styles from './index.module.scss';
import NewsCard from '../NewsCard';
import newsArr from '@/public/static/databases/news';

export default function NewsSlider() {
  let renderNews = (news) => {
    let arr = [news[0], news[1], news[2]];
    return arr.map((news) => (
      <NewsCard
        key={news.id}
        subtitle={news.pretitle}
        title={news.title}
        link={`/news/${news.link}`}
      />
    ));
  };

  return (
    <div className="news-section">
      <div className="container">
        <h2 className="article__header">
          Прием специалистов Центра в городах РФ
        </h2>
        <div className={styles.newslider__container}>{renderNews(newsArr)}</div>
      </div>
    </div>
  );
}
