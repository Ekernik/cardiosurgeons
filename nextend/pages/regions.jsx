import Head from 'next/head';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard/NewsCard';
import newsArr from '../public/static/databases/news';
import styles from '../styles/regions.module.scss';

export default function OurTeam() {
  let renderNews = (news) => {
    return news.map((news) => (
      <NewsCard
        key={news.id}
        id={news.id}
        subtitle={news.pretitle}
        title={news.title}
        date={news.date}
        link={`/news/${news.link}`}
        hot={news.hot}
        regionsPage={true}
      />
    ));
  };
  return (
    <>
      <Head>
        <title>Прием кардиохирургов и кардиологов в городах РФ</title>
        <meta
          property="og:title"
          content="Прием кардиохирургов и кардиологов в городах РФ"
        />
        <meta
          name="description"
          content="Запишитесь на прием в своем городе к кардиологам и кардиохирургам из Санкт-Петербурга."
        />
        <meta
          property="og:description"
          content="Запишитесь на прием в своем городе к кардиологам и кардиохирургам из Санкт-Петербурга."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta property="og:url" content="https://heartteamspb.com/regions" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className="section">
          <div className="container">
            <h1 className="article__header">
              Прием кардиохирургов и&nbsp;кардиологов в&nbsp;городах&nbsp;РФ
            </h1>
            <div className={styles.news_container}>{renderNews(newsArr)}</div>
          </div>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
