import React, { Suspense } from "react";
import news from "../../assets/databases/news";
import "./index.scss";

import Header from "../../components/Header";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Greetings from "../../components/Greetings";

const newsLink = window.location.href
  .toString()
  .split(window.location.host)[1]
  .slice(6);

const NewsArticle = React.lazy(async () => {
  let newsId = news.filter((story) => story.link === newsLink)[0].id;
  return import(`../../assets/news/${newsId}`)
    .then()
    .catch(() => {
      return import("../../assets/news/articleNotFound");
    });
});

let News = () => {
  function getRightNews() {
    let rightNews = news.filter((story) => story.link === newsLink)[0];
    return rightNews
      ? rightNews
      : {
          title: "Ой, что-то пошло не так",
          subheader: "Мы не нашли такую статью",
          settings: { noButton: true },
        };
  }

  const newsObj = getRightNews();

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
