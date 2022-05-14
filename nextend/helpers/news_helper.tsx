import NewsCard from '@/components/NewsCard';
import newsArr from '@/public/static/databases/news';
import React from 'react';

export const renderRegionsNews: () => JSX.Element[] = () => {
  return newsArr.map(news => (
    <NewsCard
      key={news.id}
      subtitle={news.pretitle}
      title={news.title}
      link={`/news/${news.link}`}
      isRegions={true}
    />
  ));
};
