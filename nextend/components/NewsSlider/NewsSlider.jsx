// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import styles from './index.module.scss';

import NewsCard from '../NewsCard/NewsCard';
import newsArr from '../../public/static/databases/news';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function NewsSlider() {
  let renderNews = (news) => {
    let a = [...news].reverse();
    return a.map((news) => (
      <SwiperSlide key={news.id}>
        <NewsCard
          id={news.id}
          subtitle={news.pretitle}
          title={news.title}
          date={news.date}
          link={`/news/${news.link}`}
          hot={news.hot}
        />
      </SwiperSlide>
    ));
  };

  // #TODO
  // let width =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;

  const slidesPerDevice = {
    phone: 1,
    tablet: 2 || newsArr.length,
    laptop: 3 || newsArr.length,
    pc: 3 || newsArr.length,
  };

  let getDevice = () => {
    // #TODO
    // if (width < 767) {
    //   return 'phone';
    // } else if (width <= 991) {
    //   return 'tablet';
    // } else if (width <= 1399) {
    //   return 'laptop';
    // } else return 'pc';
    return 3;
  };
  let amountOfSlides = () => {
    return slidesPerDevice[getDevice()];
  };

  return (
    <div className="news-section">
      <div className="container">
        <h2 className="section__header">
          Прием специалистов Центра в городах РФ
        </h2>

        <Swiper
          slidesPerView={amountOfSlides()}
          spaceBetween={20}
          slidesPerGroup={amountOfSlides()}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {renderNews(newsArr)}
        </Swiper>
      </div>
    </div>
  );
}
