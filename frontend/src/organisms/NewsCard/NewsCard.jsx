import React from "react";
import "./index.scss";

function NewsCard(props) {
  let titleColor = props.hot ? {color: '#b30404', fontWeight: '600'} : {};

  return (
    <div className="card-news">
      <div>
        <h3 className="card__title">{props.pretitle}</h3>
        <p style={titleColor} className="card__text">{props.title}</p>
      </div>
      <a href={props.link} className="card__read-more">
        читать подробнее
      </a>
    </div>
  );
}

export default NewsCard;
