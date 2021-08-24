import React from "react";
import "./index.scss";
import svg__phone from "../../assets/svg/phone-call.svg";
import ym from "react-yandex-metrika";

export default function FAB() {
  let handleClick = () => {
    window.location.href = "tel:+79992380136";
    ym(83857552, "reachGoal", "call-ok"); // Yandex.Metrika call by button javascript goal
  };

  return (
    <button className="fab" onClick={handleClick}>
      <div className="fab__container">
        <img className="fab__icon" src={svg__phone} alt="" />
      </div>
    </button>
  );
}
