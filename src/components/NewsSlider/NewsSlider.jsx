import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./index.scss";

import NewsCard from "../../organisms/NewsCard/NewsCard";
import newsArr from "../../assets/databases/news";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function NewsSlider() {
  let renderNews = (news) =>
    news.map((news) => (
      <SwiperSlide key={news.id}>
        <NewsCard
          id={news.id}
          pretitle={news.pretitle}
          title={news.title}
          date={news.date}
          link={`/news/${news.id}`}
        />
      </SwiperSlide>
    ));

  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const slidesPerDevice = {
    phone: 1,
    tablet: 2,
    laptop: 3,
    pc: 4,
  };

  let getDevice = () => {
    if (width < 767) {
      return "phone";
    } else if (width <= 991) {
      return "tablet";
    } else if (width <= 1399) {
      return "laptop";
    } else return "pc";
  };
  let amountOfSlides = () => {
    return slidesPerDevice[getDevice()];
  };

  return (
    <div className="news-section">
      <div className="container">
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

export default NewsSlider;
