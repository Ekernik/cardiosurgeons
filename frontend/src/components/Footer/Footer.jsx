import React from "react";
import { YMInitializer } from 'react-yandex-metrika';
import "./index.scss";
import reestr from "../../assets/documents/reestr.pdf";
import FAB from "../FAB/FAB";

function Footer() {
  return (
    <footer className="footer">
      <YMInitializer accounts={[83857552]} options={{webvisor: true, triggerEvent: true}} />
      <FAB />
      <div className="container">
        <span className="footer__copyright">© copyright 2021</span>
        <a
          href={reestr}
          target="_blank"
          className="footer__mark"
          rel="noreferrer"
        >
          выписка из реестра лицензий по состоянию на 23.04.2021
        </a>
      </div>
    </footer>
  );
}

export default Footer;
