import Link from "next/link";
import Image from "next/image";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import ContactsForm from "./Forms/ContactsForm";

// ICONS
import icon_mail from "../public/static/svg/mail.svg";
import icon_map from "../public/static/svg/pin.svg";
import icon_metro from "../public/static/svg/metro.svg";
import icon_phone from "../public/static/svg/phone.svg";
import icon_clock from "../public/static/svg/clock.svg";
import icon_external from "../public/static/svg/external.svg";
import success from "../public/static/svg/success.svg";

function Contacts() {
  const frameStyle = { display: "none" };

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
          <Link href="/map-route.png">
            <a
              className="advanced-route"
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробный маршрут
              <span className="contacts-external-icon">
                <Image src={icon_external} alt="" width={13} height={13} />
              </span>
            </a>
          </Link>
          <ul className="contacts-info">
            <li className="contacts-info__item">
              <span className="contacts-bottom-icon">
                <Image src={icon_map} alt="" width={32} height={32} />
              </span>
              Санкт-Петербург, наб. р. Фонтанки, д. 154
            </li>
            <li className="contacts-info__item">
              <span className="contacts-bottom-icon">
                <Image src={icon_metro} alt="" width={32} height={32} />
              </span>
              Балтийская, Технологический институт
            </li>
            <li className="contacts-info__item">
              <span className="contacts-bottom-icon">
                <Image src={icon_clock} alt="" width={32} height={32} />
              </span>
              09:00 - 21:00
            </li>
            <li className="contacts-info__item">
              <span className="contacts-bottom-icon">
                <Image src={icon_mail} alt="" width={32} height={32} />
              </span>
              <p className="our-contacts__info-text">
                <a
                  href="mailto:heartteam.spb@gmail.com"
                  className="article__link"
                >
                  heartteam.spb@gmail.com
                </a>
              </p>{" "}
            </li>
            <li className="contacts-info__item">
              <span className="contacts-bottom-icon">
                <Image src={icon_phone} alt="" width={32} height={32} />
              </span>
              <p>
                <a href="tel:+79992380136" className="article__link">
                  +7 (999) 238-01-36
                </a>{" "}
                (9:00-21:00)
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
              <div className="curtain__svg">
                <Image
                  src={success}
                  alt="Иконка успешно выполненного действия"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="curtain__title">Спасибо!</h3>
              <p className="curtain__message">
                Мы свяжемся с Вами в ближайшее время
              </p>
            </div>
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
