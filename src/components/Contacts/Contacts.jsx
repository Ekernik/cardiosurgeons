import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import './index.scss';

// ICONS
import icon_mail from '../../assets/svg/mail.svg';
import icon_map from '../../assets/svg/pin.svg';
import icon_metro from '../../assets/svg/metro.svg';
import icon_phone from '../../assets/svg/phone.svg';
import icon_clock from '../../assets/svg/clock.svg';
import icon_external from '../../assets/svg/external.svg';

function Contacts() {
  return (
    <section id="contacts-section">
      <h2 className="section__header">Контакты</h2>
      <div className="container contacts-flexbox">
        <div className="our-location">
          <h3 className="subheader">Где нас найти</h3>
          <YMaps query={{ lang: 'ru_RU' }}>
            <Map
              width={'100%'}
              height={'30vh'}
              defaultState={{
                center: [59.915765, 30.28255],
                zoom: 12,
                behaviors: ['default', 'scrollZoom'],
                controls: [],
              }}
            >
              <Placemark defaultGeometry={[59.915765, 30.28255]} />
              <FullscreenControl />
              <ZoomControl />
            </Map>
          </YMaps>
          <a
            href="#TODO"
            className="advanced-route"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробный маршрут
            <img src={icon_external} loading="lazy" alt="" />
          </a>
          <ul className="contacts-info">
            <li className="contacts-info__item">
              <img src={icon_map} lodaing="lazy" alt="" />
              Санкт-Петербург, наб. р. Фонтанки, д. 154
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_metro} lodaing="lazy" alt="" />
              </span>
              Балтийская, Технологический институт
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_clock} lodaing="lazy" alt="" />
              </span>
              09:00 - 20:00
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_mail} lodaing="lazy" alt="" />
              </span>
              <a href="mailto:">6762525@gosmed.ru</a>
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_phone} lodaing="lazy" alt="" />
              </span>
              <a href="tel:+">+7(812)676-25-25</a>
            </li>
          </ul>
        </div>
        <div className="appointment">
          <h3 className="subheader">Запись на прием</h3>
          <form className="contact-form">
            <div className="contact-form__group">
              <input className="contact-form__input" type="text" required />
              <label className="contact-form__label">
                Ваше ФИО (полностью)<span className="must-have">*</span>
              </label>
            </div>
            <div className="contact-form__group">
              <input type="tel" className="contact-form__input" required />
              <label className="contact-form__label">
                Контактный телефон<span className="must-have">*</span>
              </label>
            </div>
            <div className="contact-form__group">
              <input type="email" className="contact-form__input" required />
              <label className="contact-form__label">
                Адрес Вашей электронной почты
                <span className="must-have">*</span>
              </label>
            </div>
            <div className="contact-form__group">
              <textarea className="contact-form__textfield" required></textarea>
              <label className="contact-form__label">
                Ваше сообщение<span className="must-have">*</span>
              </label>
            </div>
            <div className="contact-form__sm-section">
              <div className="contact-form__group">
                <input type="checkbox" required />
                <label className="label-for-terms">
                  Я согласен на{' '}
                  <a href="#TODO" className="tac-link">
                    обработку персональных данных
                  </a>
                </label>
              </div>
            </div>
            <button className="cta-make-appointment">Записаться</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
