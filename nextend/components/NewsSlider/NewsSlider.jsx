import styles from "./index.module.scss";
import NewsCard from "../NewsCard/NewsCard";
import newsArr from "../../public/static/databases/news";

export default function NewsSlider() {
  let renderNews = (news) => {
    let a = [...news].reverse();
    return a.map((news) => (
      <NewsCard
        key={news.id}
        id={news.id}
        subtitle={news.pretitle}
        title={news.title}
        date={news.date}
        link={`/news/${news.link}`}
        hot={news.hot}
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
