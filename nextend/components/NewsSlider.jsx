import newsArr from '@/public/static/databases/news';
import NewsCard from '@/components/NewsCard';
import styles from '@/styles/newsSlider.module.scss';

const NewsSlider = () => {
  const renderNews = news => {
    const arr = [news[0], news[1], news[2]];
    return arr.map(news => (
      <NewsCard
        key={news.id}
        subtitle={news.pretitle}
        title={news.title}
        link={`/news/${news.link}`}
      />
    ));
  };

  return (
    <section className='container'>
      <h2>Прием специалистов Центра в&nbsp;городах РФ</h2>
      <div className={styles.newslider__container}>{renderNews(newsArr)}</div>
    </section>
  );
};

export default NewsSlider;
