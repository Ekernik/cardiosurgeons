import Link from "next/link";
import formSettings from "../../public/static/databases/googleForm";

export default function ContactsForm() {
  const handleSubmit = () => {
    console.log("отправляем форму");
    try {
      formSettings.checkValues(4, 8);
      // Make success animation
      const floatingForm = document.querySelector(".contact-form");
      const curtain = document.querySelector(".contact-form__curtain");
      floatingForm.style.animation = "group-fade-out .3s ease-in forwards";
      floatingForm.style.display = "none";
      curtain.style.display = "flex";
      curtain.style.animation = "contact-form--fade-in 1.5s ease-in forwards";
      console.log("Форма отправленна");
    } catch {
      console.log("Форма не отправленна");
    }
  };
  return (
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
        />
        <input
          type="text"
          style={{ display: "none" }}
          name={formSettings.ref_link}
          value={formSettings.ref_origin()}
          readOnly
          required
        />
        <label className="contact-form__label">Ваша электронная почта</label>
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
      <button onClick={handleSubmit} className="cta-make-appointment">
        Записаться
      </button>
    </form>
  );
}
