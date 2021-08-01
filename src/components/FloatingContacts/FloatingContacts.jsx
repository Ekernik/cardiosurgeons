import React from "react";
import "./index.scss";

// Form inputs and action
const email_entry = "entry.1879504940";
const phone_entry = "entry.1859320754";
const message_entry = "entry.1529901543";
const name_entry = "entry.1552386635";
const formLink =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZ7vKD_Cgav2R21Zgmex2vnBGro2HMYpV0F9_wWG9qF_HHww/formResponse";

function FloatingContacts() {
  let formSubmitted = false;
  const frameStyle = { display: "none" };

  let handleClick = () => {
    const body = document.querySelector("body");
    const curtain = document.getElementById("curtain");
    const floatingContacts = document.querySelector(".floating-contacts");
    const headerContainer = document.querySelector(".header__container");
    const headerNav = document.querySelector(".header__nav");
    const header = document.querySelector(".header");
    headerContainer.classList.toggle("hidden");
    headerNav.classList.toggle("hidden");
    header.classList.toggle("darken");
    body.classList.toggle("fixed-page");
    curtain.classList.toggle("curtain--opened");
    floatingContacts.classList.toggle("floating-contacts--hidden");
  };
  let handleSubmit = () => {
    formSubmitted = true;
  };
  let handleRedirect = () => {
    if (formSubmitted) {
      window.location = "/";
    }
  };

  return (
    <div className="floating-contacts floating-contacts--hidden">
      <div className="floating-contacts-cross" onClick={handleClick}>
        <span></span>
      </div>
      <h3>Записаться на бесплатный прием</h3>
      <iframe
        title="Redirected"
        name="hidden_iframe"
        id="hidden_iframe"
        style={frameStyle}
        onLoad={handleRedirect()}
      ></iframe>
      <form
        target="hidden_iframe"
        onSubmit={handleSubmit()}
        method="POST"
        action={formLink}
        className="contact-form"
      >
        <div className="contact-form__group">
          <input
            className="contact-form__input"
            name={name_entry}
            type="text"
            required
          />
          <label className="contact-form__label">
            Ваше ФИО (полностью)<span className="must-have">*</span>
          </label>
        </div>
        <div className="contact-form__group">
          <input
            name={phone_entry}
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
            name={email_entry}
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
            name={message_entry}
            className="contact-form__textfield"
            required
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
        <button className="cta-make-appointment">Записаться</button>
      </form>
    </div>
  );
}

export default FloatingContacts;
