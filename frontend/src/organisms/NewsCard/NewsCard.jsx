import React from "react";
import "./index.scss";

function NewsCard(props) {
  let titleColor = props.hot ? { color: "#b30404", fontWeight: "600" } : {};

  return (
    <div className="card__container">
      <div className="card-news">
        <div style={{}}>
          <p style={titleColor} className="card__text">
            {props.title}
          </p>
          <p className="card__text">
            <strong>{props.subtitle}</strong>
          </p>
        </div>
        <a href={props.link} className="card__read-more">
          читать подробнее
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
