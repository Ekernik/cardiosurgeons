import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";

import "./index.scss";
import map from "../../assets/images/map.png";
import formSettings from "../../assets/databases/googleForm";

// ICONS
import icon_mail from "../../assets/svg/mail.svg";
import icon_map from "../../assets/svg/pin.svg";
import icon_metro from "../../assets/svg/metro.svg";
import icon_phone from "../../assets/svg/phone.svg";
import icon_clock from "../../assets/svg/clock.svg";
import icon_external from "../../assets/svg/external.svg";
import success from "../../assets/svg/success.svg";

function Contacts() {
  const frameStyle = { display: "none" };

  let handleSubmit = () => {
    if (formSettings.checkValues(4, 8)) {
      // Make success animation
      const floatingForm = document.querySelector(".contact-form");
      const curtain = document.querySelector(".contact-form__curtain");
      floatingForm.style.animation = "group-fade-out .3s ease-in forwards";
      floatingForm.style.display = "none";
      curtain.style.display = "flex";
      curtain.style.animation = "contact-form--fade-in 1.5s ease-in forwards";
      console.log("SUBMITTED");
    }
  };

  return (
    <section id="contacts-section">
      <div className="container contacts-flexbox">
        <div className="our-location">
          <h3 className="subheader">Где нас найти в г. Санкт-Петербурге</h3>
          <YMaps query={{ lang: "ru_RU" }}>
            <Map
              width={"100%"}
              height={"30vh"}
              defaultState={{
                center: [59.915765, 30.28255],
                zoom: 12,
                behaviors: ["default", "scrollZoom"],
                controls: [],
              }}
            >
              <Placemark defaultGeometry={[59.915765, 30.28255]} />
              <FullscreenControl />
              <ZoomControl />
            </Map>
          </YMaps>
          <a
            href={map}
            className="advanced-route"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробный маршрут
            <img src={icon_external} loading="lazy" alt="" />
          </a>
          <ul className="contacts-info">
            <li className="contacts-info__item">
              <img src={icon_map} loading="lazy" alt="" />
              Санкт-Петербург, наб. р. Фонтанки, д. 154
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_metro} loading="lazy" alt="" />
              </span>
              Балтийская, Технологический институт
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_clock} loading="lazy" alt="" />
              </span>
              09:00 - 21:00
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_mail} loading="lazy" alt="" />
              </span>
              <p className="our-contacts__info-text">
                <a href="mailto:heartteam.spb@gmail.com">
                  heartteam.spb@gmail.com
                </a>
              </p>{" "}
            </li>
            <li className="contacts-info__item">
              <span>
                <img src={icon_phone} loading="lazy" alt="" />
              </span>
              <p>
                <a href="tel:+79992380136">+7 (999) 238-01-36</a> (9:00-21:00)
              </p>
            </li>
          </ul>
        </div>
        <div className="appointment">
          <h3 className="subheader">Запись на прием</h3>
          <iframe
            title="Redirected"
            name="hidden_iframe"
            id="hidden_iframe"
            style={frameStyle}
          ></iframe>
          <div className="form-wrapper">
            <div className="contact-form__curtain">
              <img
                src={success}
                alt="знак успешно выполненного действия"
                className="curtain__svg"
              />
              <h3 className="curtain__title">Спасибо!</h3>
              <p className="curtain__message">
                Мы свяжемся с Вами в ближайшее время
              </p>
            </div>
            <form
              target="hidden_iframe"
              method="POST"
              action={formSettings.submit_link}
              className="contact-form"
            >
              <div className="contact-form__group">
                <input
                  className="contact-form__input"
                  name={formSettings.name_entry}
                  type="text"
                  required
                />
                <label className="contact-form__label">
                  Ваше ФИО (полностью)<span className="must-have">*</span>
                </label>
              </div>
              <div className="contact-form__group">
                <input
                  name={formSettings.phone_entry}
                  type="tel"
                  className="contact-form__input"
                  required
                />
                <label className="contact-form__label">
                  Контактный телефон<span className="must-have">*</span>
                </label>
              </div>
              <div className="contact-form__group">
                <input
                  name={formSettings.email_entry}
                  type="email"
                  className="contact-form__input"
                  required
                />
                <label className="contact-form__label">
                  Адрес Вашей электронной почты
                  <span className="must-have">*</span>
                </label>
              </div>
              <div className="contact-form__group">
                <textarea
                  name={formSettings.message_entry}
                  className="contact-form__textfield"
                ></textarea>
                <label className="contact-form__label">
                  Ваше сообщение<span className="must-have">*</span>
                </label>
              </div>
              <div className="contact-form__sm-section">
                <div className="contact-form__group">
                  <input type="checkbox" required />
                  <label className="label-for-terms">
                    Я согласен на {` `}
                    <a href="/licenses" target="_blank" className="tac-link">
                      обработку персональных данных
                    </a>
                  </label>
                </div>
              </div>
              <button onClick={handleSubmit} className="cta-make-appointment">
                Записаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
