import React from 'react';
import './index.scss';

function Banner(props) {
  return (
    <div className="banner">
      <div className="container flex">
        <span className="banner__text">
          {props.text}
        </span>
      </div>
    </div>
  );
}

export default Banner;
