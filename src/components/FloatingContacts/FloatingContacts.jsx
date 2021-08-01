import React from "react";
import "./index.scss";

import success from "../../assets/svg/success.svg";

// Form inputs and action
const email_entry = "entry.1879504940";
const phone_entry = "entry.1859320754";
const message_entry = "entry.1529901543";
const name_entry = "entry.1552386635";
const formLink =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZ7vKD_Cgav2R21Zgmex2vnBGro2HMYpV0F9_wWG9qF_HHww/formResponse";

let formSubmitted = false;

let checkValues = () => {
  let inputs = Array.prototype.slice
    .call(document.querySelectorAll("input[required]"))
    .slice(0, 4);
  let valid = inputs.filter((input) => input.checkValidity() === true);
  console.log(inputs, valid);
  return inputs.length === valid.length ? true : false;
};

let handleSubmit = () => {
  formSubmitted = true;
  if (checkValues()) {
    // Make success animation
    const formTitle = document.querySelector(".floating-contacts__title");
    const floatingForm = document.querySelector(".floating-contacts__form");
    const curtain = document.querySelector(".contact-form__curtain");
    formTitle.style.animation = "group-fade-out .3s ease-in forwards";
    floatingForm.style.animation = "group-fade-out .3s ease-in forwards";
    curtain.style.display = "flex";
    curtain.style.animation = "text-fade-in 1s ease-in forwards";
  }
};

let resetStyling = () => {
  const formTitle = document.querySelector(".floating-contacts__title");
  const floatingForm = document.querySelector(".floating-contacts__form");
  const curtain = document.querySelector(".contact-form__curtain");
  formTitle.style.animation = "";
  floatingForm.style.animation = "";
  curtain.style.display = "none";
};

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
  resetStyling();
};

function FloatingContacts() {
  const frameStyle = { display: "none" };

  return (
    <div className="floating-contacts floating-contacts--hidden">
      <div className="floating-contacts-cross" onClick={handleClick}>
        <span></span>
      </div>
      <h3 className="floating-contacts__title">
        Записаться на бесплатный прием
      </h3>
      <iframe
        title="Redirected"
        name="hidden_iframe"
        id="hidden_iframe"
        style={frameStyle}
      ></iframe>
      <div className="contact-form__curtain">
        <img
          src={success}
          alt="знак успешно выполненного действия"
          className="curtain__svg"
        />
        <h3 className="curtain__title">Спасибо!</h3>
        <p className="curtain__message">Мы свяжемся с Вами в ближайшее время</p>
      </div>
      <form
        target="hidden_iframe"
        method="POST"
        action={formLink}
        className="floating-contacts__form"
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
          ></textarea>
          <label className="contact-form__label">Ваше сообщение</label>
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
        <button
          type="submit"
          onClick={handleSubmit}
          className="floating-contacts__cta"
        >
          Записаться
        </button>
      </form>
    </div>
  );
}

export default FloatingContacts;
