import Image from "next/image";
import Link from "next/link";
import success from "@/public/static/svg/success.svg";
import {formSettings} from "@/helpers/form_helper";

let handleSubmit = () => {
  if (formSettings.checkValues(0, 4)) {
    const formTitle = document.querySelector(".floating-contacts__title");
    const floatingForm = document.querySelector(".floating-contacts__form");
    const curtain = document.querySelector(".floating-form__curtain");
    formTitle.style.animation = "group-fade-out .3s ease-in forwards";
    floatingForm.style.animation = "group-fade-out .3s ease-in forwards";
    curtain.style.display = "flex";
    curtain.style.animation = "text-fade-in 1s ease-in forwards";
  }
};

let resetStyling = () => {
  const formTitle = document.querySelector(".floating-contacts__title");
  const floatingForm = document.querySelector(".floating-contacts__form");
  const floatingCurtain = document.querySelector(".floating-form__curtain");
  const formCurtain = document.querySelector(".contact-form__curtain");
  if (formCurtain) {
    formCurtain.style.display = "none";
  }
  if (floatingCurtain) {
    floatingCurtain.style.display = "none";
  }
  formTitle.style.animation = "";
  floatingForm.style.animation = "";
};

let handleClose = () => {
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

export default function FloatingContacts() {
  const frameStyle = { display: "none" };

  return (
    <div className="floating-contacts floating-contacts--hidden">
      <div className="floating-contacts-cross" onClick={handleClose}>
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
      <div className="floating-form__curtain">
        <div className="curtain__svg">
          <Image
            src={success}
            alt="Иконка успешно выполненного действия"
            width={100}
            height={100}
          />
        </div>

        <h3 className="curtain__title">Спасибо!</h3>
        <p className="curtain__message">Мы свяжемся с Вами в ближайшее время</p>
      </div>
      <form
        target="hidden_iframe"
        method="POST"
        action={formSettings.submit_link}
        className="floating-contacts__form"
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
          />
          <input
            type="text"
            style={{ display: "none" }}
            name={formSettings.ref_link}
            value={formSettings.ref_origin()}
            readOnly
            required
          />
          <label className="contact-form__label">
            Ваша электронная почта <span className='contact-form__small-text'>(необязательно)</span>
          </label>
        </div>
        <div className="contact-form__group">
          <textarea
            name={formSettings.message_entry}
            className="contact-form__textfield"
          ></textarea>
          <label className="contact-form__label">Ваше сообщение</label>
        </div>
        <div className="contact-form__sm-section">
          <div className="contact-form__group">
            <input type="checkbox" required />
            <label className="label-for-terms">
              Я согласен на {` `}
              <Link href="/licenses">
                <a target="_blank" className="article__link">
                  обработку персональных данных
                </a>
              </Link>
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
