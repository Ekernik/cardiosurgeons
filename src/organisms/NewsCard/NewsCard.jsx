import React from 'react';
import './index.scss';

function NewsCard(props) {
  return (
    <div className="card-news">
      <div>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.p}</p>
      </div>
      <a href={props.link} className="card__read-more">читать подробнее</a>
    </div>
  );
}

export default NewsCard;
