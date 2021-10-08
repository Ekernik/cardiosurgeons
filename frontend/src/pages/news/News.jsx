import React, { Suspense } from "react";
import news from "../../assets/databases/news";
import "./index.scss";

import Contacts from "../../components/Contacts";
import Greetings from "../../components/Greetings";

let News = (props) => {
  const NewsArticle = React.lazy(async () =>
    import(`../../assets/news/${props.newsId}`)
      .then()
      .catch(() => import("../../assets/news/articleNotFound"))
  );

  const newsObj = news.filter((news) => news.id === props.newsId)[0];

  return (
    <main className="page__news">
      <Greetings
        header={newsObj.header || newsObj}
        subheader={newsObj.subheader}
        buttonText={newsObj.buttonText}
        settings={newsObj.settings}
      />
      <Suspense fallback={<div>Загружаем новость...</div>}>
        <NewsArticle id={newsObj.id} date={newsObj.date} />
      </Suspense>
      <Contacts />
    </main>
  );
};

export default News;
