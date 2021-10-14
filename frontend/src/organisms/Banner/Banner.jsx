import React from "react";
import "./index.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="container flex">
        <p className="banner__text">
          Наш Центр предлагает бесплатное оперативное лечение по федеральным
          квотам и ОМС <br />всем гражданам РФ из любых регионов
        </p>
      </div>
    </div>
  );
}

export default Banner;
