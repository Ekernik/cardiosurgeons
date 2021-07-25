import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './index.scss';

import NewsCard from '../../organisms/NewsCard/NewsCard';
let newsArr = [
  {
    id: 'n1',
    title: 'Новости',
    date: '21 Июля 2021',
    p:
      'Работа Клиники высоких медицинских технологий им. Н. И. Пирогова СПбГУ в период пандемии COVID-19',
    link: '#TODOlink1',
  },
  {
    id: 'n2',
    title: 'Новости',
    date: '20 Июля 2021',
    p:
      'Уважаемые посетители Клиники! В период с 21 июля по 3 августа 2021 г. водительская и оружейная комиссии находится в коллективном отпуске. В период с 2 августа по 29 августа 2021 г. комиссия плавсостава работать не будет',
    link: '#TODOlink2',
  },
  {
    id: 'n3',
    title: 'Новости',
    date: '16 Июля 2021',
    p:
      'Врач - травматолог Клиники высоких медицинских технологий СПбГУ – Турбин Кирилл Олегович проведёт бесплатные консультации для жителей Великого Новгорода с заболеваниями опорно-двигательного аппарата',
    link: '#TODOlink3',
  },
  {
    id: 'n4',
    title: 'Card title',
    date: '14 октября 2020',
    p:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum velit, beatae nemo porro ad at vitae doloremque nobis impedit.',
    link: '#TODOlink',
  },
  {
    id: 'n5',
    title: 'Card title',
    date: '14 октября 2020',
    p:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum velit, beatae nemo porro ad at vitae doloremque nobis impedit.',
    link: '#TODOlink',
  },
  {
    id: 'n6',
    title: 'Card title',
    date: '14 октября 2020',
    p:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum velit, beatae nemo porro ad at vitae doloremque nobis impedit.',
    link: '#TODOlink',
  },
  {
    id: 'n7',
    title: 'Card title',
    date: '14 октября 2020',
    p:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum velit, beatae nemo porro ad at vitae doloremque nobis impedit.',
    link: '#TODOlink',
  },
  {
    id: 'n8',
    title: 'Card title',
    date: '14 октября 2020',
    p:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum velit, beatae nemo porro ad at vitae doloremque nobis impedit.',
    link: '#TODOlink',
  },
];

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function News() {
  let renderNews = (news) =>
    news.map((news) => (
      <SwiperSlide>
        <NewsCard
          id={news.id}
          title={news.title}
          date={news.date}
          p={news.p}
          link={news.link}
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
      return 'phone';
    } else if (width <= 991) {
      return 'tablet';
    } else if (width <= 1399) {
      return 'laptop';
    } else return 'pc';
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

export default News;

//   let width =
//
//   let offset = { phone: 74, tablet: 82.2, laptop: 500, pc: 304 };
//   let cardPerUnit = { phone: 1, tablet: 2, laptop: 3, pc: 3 };
//   let tracker = 0;
//   let slider = document.getElementsByClassName('news-section__slider');

//   function getDevice() {
//     if (width <= 767) {
//       return 'phone';
//     } else if (width <= 991) {
//       return 'tablet';
//     } else if (width <= 1399) {
//       return 'laptop';
//     } else return 'pc';
//   }

//   let handleClick = (e) => {
//     console.log(offset[0]);
//     if (e.target.classList[0] === 'skip-left' && tracker < 0) {
//       tracker += offset[getDevice()];
//       checkForEnd(width * offset[getDevice]);
//       slider[0].style.transform = `translateX(${tracker}vw)`;
//     } else if (e.target.classList[0] === 'skip-right') {
//       tracker -= offset[getDevice()];
//       checkForEnd(width * offset[getDevice]);
//       slider[0].style.transform = `translateX(${tracker}vw)`;
//     }
//   };

//   let checkForEnd = (number) => {
//     console.log(tracker, -offset[getDevice()] * newsArr.length);
//     if (tracker <= -offset[getDevice()] * (newsArr.length / cardPerUnit[getDevice()])) {
//       tracker = 0;
//     }
//   };

//   return (
//     <section className="news-section">
//       <div className="container">
//         <div className="slider-wraper">
//           <div className="skip-left" onClick={handleClick}></div>
//           <div className="news-section__wrapper">
//             <div className="news-section__slider">
//               {newsArr.map((news, i) => (
//                 <NewsCard
//                   key={news.id}
//                   title={news.title}
//                   p={news.p}
//                   date={news.date}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="skip-right" onClick={handleClick}></div>
//         </div>
//       </div>
//     </section>
//   );
// }
