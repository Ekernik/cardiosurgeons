import React from "react";
import "./index.scss";

function FloatingContacts() {
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

  return (
    <div className="floating-contacts floating-contacts--hidden">
      <div className="floating-contacts-cross" onClick={handleClick}>
        <span></span>
      </div>
      <h3>Записаться на бесплатный прием</h3>
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
            Адрес электронной почты<span className="must-have">*</span>
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
