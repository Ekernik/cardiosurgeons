import React from "react";
import "./index.scss";

function NewsCard(props) {
  return (
    <div className="card-news">
      <div>
        <h3 className="card__title">{props.pretitle}</h3>
        <p className="card__text">{props.title}</p>
      </div>
      <a href={props.link} className="card__read-more">
        читать подробнее
      </a>
    </div>
  );
}

export default NewsCard;
