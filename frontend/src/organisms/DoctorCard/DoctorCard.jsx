import React from "react";
import "./index.scss";

export default function DoctorCard(props) {
  let btnMore = (props) => {
    if (props.showMore) {
      return (
        <a href={props.link} className="doc-card__about-link">
          читать подробнее
        </a>
      );
    }
  };
  return (
    <div className={`doc-card__doctor ${props.className}`}>
      <a href={props.link || "#TODO"}>
        <img className="doc-card__img" src={props.imgSrc} alt={props.imgAlt} />
      </a>
      <a href={props.link || "#TODO"} className="doc-card__title">
        <h2>{props.title}</h2>
      </a>
      <h3 className="doc-card__subtitle">{props.subtitle}</h3>
      {btnMore(props)}
    </div>
  );
}