import React from "react";

import "./index.scss";

import diagnostics from "../../assets/databases/diagnostics";
import illnesses from "../../assets/databases/illnesses";

const toggleBtn = (event) => {
  const buttons = document.querySelectorAll(".toggle__button");
  const lists = document.querySelectorAll(".list-container__list");
  buttons[0].classList.toggle("toggle__button--active");
  buttons[1].classList.toggle("toggle__button--active");
  lists[0].classList.toggle("list-container__list--hidden");
  lists[1].classList.toggle("list-container__list--hidden");
};

function OurServices() {
  const renderSection = (object) => {
    return (
      <div className="illness-subsection">
        <h3>{object.categoryName}</h3>
        {object.illnesses.map((illness) =>
          renderItems(object.illnesses, illness, "illness")
        )}
      </div>
    );
  };

  const renderItems = (object, item, type) => {
    const isLastItem = object[object.length - 1] === item;
    const isItemAnObject = typeof item === "object";
    const itemLink = isItemAnObject ? (
      <a href={item.link} className="illness__link">
        {item.title}
      </a>
    ) : (
      ""
    );
    const key =
      type === "illness"
        ? `i_${object}_${object.indexOf(item)}`
        : `d${object.indexOf(item)}`;
    const className = "illness-list__item";

    return (
      <div key={key}>
        <li className={className}>{isItemAnObject ? itemLink : item}</li>
        {isLastItem ? "" : <hr />}
      </div>
    );
  };

  return (
    <section className="our-services-section container flex-box">
      <h2 className="section__header">Наши услуги</h2>
      <div className="our-services__toggle">
        <button onClick={(e) => toggleBtn(e)} className="toggle__button">
          Диагностика
        </button>
        <button
          onClick={(e) => toggleBtn(e)}
          className="toggle__button toggle__button--active"
        >
          Лечение
        </button>
      </div>
      <div className="our-services__list-container">
        <ul className="list-container__list">
          {diagnostics.map((diagnos) =>
            renderItems(diagnostics, diagnos, "diagnos")
          )}
        </ul>
        <ul className="list-container__list list-container__list--hidden">
          {illnesses.map((object) => renderSection(object))}
        </ul>
      </div>
    </section>
  );
}

export default OurServices;
