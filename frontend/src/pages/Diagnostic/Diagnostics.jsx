import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import illnesses from "../../assets/databases/illnesses";
import "./index.scss";

export default function Diagnostics() {
  const renderItems = (object, illness, isLastItem) => {
    const isObject = typeof illness === "object";
    const illnessLink = (
      <a className="diagnostics__link" href={`/diagnostics${illness.link}`}>
        {illness.title}
      </a>
    );

    return (
      <div
        key={`i_${object.categoryName}_${object.illnesses.indexOf(illness)}`}
      >
        <li className="illness-list__item">
          {isObject ? illnessLink : illness}
        </li>
        {isLastItem ? "" : <hr />}
      </div>
    );
  };

  return (
    <main className="page__diagnostics">
      <section className="container  section__diagnostics">
        <h1 className="section__header">
          Мы производим диагностику по следующим направлениям
        </h1>
        <ul className="list-container__list">
          {illnesses.map((object) => (
            <div
              className="illness-subsection"
              key={`is${illnesses.indexOf(object)}`}
            >
              <h3 className="illness-list__header">{object.categoryName}</h3>
              {object.illnesses.map((illness) => {
                return object.illnesses[object.illnesses.length - 1] === illness
                  ? renderItems(object, illness, true)
                  : renderItems(object, illness, false);
              })}
            </div>
          ))}
        </ul>
      </section>
      <Contacts />
    </main>
  );
}
