import React from "react";
import "./index.scss";

function Banner(props) {
  return (
    <div className="banner">
      <div className="container flex">
        <p className="banner__text">
          Получить бесплатную оперативную помощь в&nbsp;рамках ОМС и&nbsp;ВМП
          могут все граждане&nbsp;РФ
          <br />
          (из&nbsp;любых регионов&nbsp;РФ)
        </p>
      </div>
    </div>
  );
}

export default Banner;
