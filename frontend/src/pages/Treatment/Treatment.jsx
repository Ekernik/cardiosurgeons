import React from "react";
import Contacts from "../../components/Contacts";
import { treatments } from "../../assets/databases/links";
import "./index.scss";

export default function Treatment() {
  return (
    <main className="page__services">
      <div className="container container__services">
        <h1 className="services__header">Лечение</h1>
        <div className="services__list">
          {treatments.links.map((treatment) => (
            <a className="services__link" href={treatment.link}>
              {treatment.text}
            </a>
          ))}
        </div>
      </div>
      <Contacts />
    </main>
  );
}
