import React from "react";
import "./index.scss";
import reestr from "../../assets/documents/reestr.pdf";
import FAB from "../FAB/FAB";

function Footer() {
  return (
    <footer className="footer">
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
