import React, { Suspense } from "react";
import news from "../../../assets/databases/news";
import "./index.scss";

import Header from "../../../components/Header";
import Contacts from "../../../components/Contacts";
import Footer from "../../../components/Footer";
import Greetings from "../../../components/Greetings";

const newsID = window.location.href.slice(27);
const NewsArticle = React.lazy(() => import(`../../../assets/news/${newsID}`));

function News(props) {
  function getRightNews() {
    let url = window.location.href;
    let newsId = url.slice(27);

    return news.filter((story) => story.id === newsId)[0];
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
