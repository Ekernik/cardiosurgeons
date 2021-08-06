import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import './index.scss';

export default function OurContacts() {
  return (
    <main className="page__our-contacts">
      <Header />
      <section className="container section__our-contacts">
        <h1 className="section__header">Контакты</h1>
        <h2 className="our-contacts__title">
          Центр кардиохирургии и интервенционной кардиологии
        </h2>
        <div className="our-contacts__main-flex">
          <div className="our-contacts__address-flex">
            <YMaps query={{ lang: 'ru_RU' }}>
              <Map
                width={'100%'}
                height={'30vh'}
                defaultState={{
                  center: [59.915765, 30.28255],
                  zoom: 16,
                  behaviors: ['default', 'scrollZoom'],
                  controls: [],
                }}
              >
                <Placemark defaultGeometry={[59.915765, 30.28255]} />
                <FullscreenControl />
                <ZoomControl />
              </Map>
            </YMaps>
            <div className="our-contacts__address-bar-flex">
              <h3 className="our-contacts__info-title">Адрес</h3>
              <p className="our-contacts__info-text">
                <a
                  href="https://yandex.ru/maps/-/CCUiJDQodD"
                  target="_blank"
                  rel="noreferrer"
                >
                  190103, Санкт-Петербург, набережная реки Фонтанки, дом 154
                </a>
              </p>
            </div>
          </div>
          <div className="our-contacts__other-flex">
            <h3 className="our-contacts__info-title">Колл-центр</h3>
            <p className="our-contacts__info-text">
              <a href="tel:+78126762514">8 (812) 676-25-14</a> (8:00-17:00
              пн-пт)
            </p>
            <p className="our-contacts__info-text">
              <a href="tel:+78126762525">8 (812) 676-25-25</a> (8:00-21:00
              ежедневно) - Запись на консультацию
            </p>
            <h3 className="our-contacts__info-title">Электронная почта</h3>
            <p className="our-contacts__info-text">
              <a href="mailto:heartteam.spb@gmail.com">
                heartteam.spb@gmail.com
              </a>
            </p>
            <p className="our-contacts__info-text">
              <a href="mailto:6762525@gosmed.ru">6762525@gosmed.ru</a>
            </p>
          </div>
        </div>
        <h3 className="our-contacts__info-title">Как добраться</h3>
        <p className="our-contacts__route-title">
          <strong>от ст. метро Садовая:</strong>
        </p>
        <div className="our-contacts__routes">
          <p className="our-contacts__info-text">маршрутное такси 7, 212,</p>
          <p className="our-contacts__info-text">трамвай 3,</p>
          <p className="our-contacts__info-text">
            автобусы 49, 181 до остановки наб. реки Фонтанки (ул. Садовая).
          </p>
        </div>
        <p className="our-contacts__route-title">
          <strong>от ст. метро Василеостровская:</strong>
        </p>
        <div className="our-contacts__routes">
          <p className="our-contacts__info-text">
            маршрутное такси 154 до Старо-Калинкиного моста,
          </p>
          <p className="our-contacts__info-text">
            автобус 6 до остановки площадь Репина.
          </p>
        </div>
        <p className="our-contacts__route-title">
          <strong>от Московского вокзала:</strong>
        </p>
        <div className="our-contacts__routes">
          <p className="our-contacts__info-text">
            автобус 181 до остановки площадь Репина.
          </p>
        </div>
        <p className="our-contacts__route-title">
          <strong>от Витебского вокзала:</strong>
        </p>
        <div className="our-contacts__routes">
          <p className="our-contacts__info-text">
            трамвай 16 до остановки Рижский проспект (Старо-Петергофский
            проспект)
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
