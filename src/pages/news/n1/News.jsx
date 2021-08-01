import React, { Suspense } from "react";
import news from "../../../assets/databases/news";
import "./index.scss";

import Header from "../../../components/Header";
import Contacts from "../../../components/Contacts";
import Footer from "../../../components/Footer";
import Greetings from "../../../components/Greetings";

const newsID = window.location.href
  .toString()
  .split(window.location.host)[1]
  .slice(6);
  
const NewsArticle = React.lazy(() => import(`../../../assets/news/${newsID}`));

function News() {
  function getRightNews() {
    return news.filter((story) => story.id === newsID)[0];
  }

  const newsObj = getRightNews();

  return (
    <main className="page__news">
      <Header />
      <Greetings header={newsObj.title} settings={newsObj.settings} />
      <Suspense fallback={<div>Loading...</div>}>
        <NewsArticle date={newsObj.date} />
      </Suspense>
      <Contacts />
      <Footer />
    </main>
  );
}

export default News;
