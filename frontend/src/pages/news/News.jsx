import React, { Suspense } from "react";
import news from "../../assets/databases/news";
import "./index.scss";

import Header from "../../components/Header";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Greetings from "../../components/Greetings";

let News = (props) => {
  const NewsArticle = React.lazy(async () => {
    return import(`../../assets/news/${props.newsId}`)
      .then()
      .catch(() => {
        return import("../../assets/news/articleNotFound");
      });
  });

  const newsObj = news.filter((news) => news.id === props.newsId)[0];

  return (
    <main className="page__news">
      <Header />
      <Greetings
        header={newsObj.title}
        subheader={newsObj.subheader}
        buttonText={newsObj.buttonText}
        settings={newsObj.settings}
      />
      <Suspense fallback={<div>Загружаем новость...</div>}>
        <NewsArticle id={newsObj.id} date={newsObj.date} />
      </Suspense>
      <Contacts />
      <Footer />
    </main>
  );
};

export default News;
