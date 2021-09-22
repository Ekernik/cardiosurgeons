import React from "react";
import "./index.scss";
import svg__phone from "../../assets/svg/phone-call.svg";

export default function FAB() {
  let handleClick = () => {
    window.location.href = "tel:+79992380136";
    // Yandex.Metrika call by button javascript goal
  };

  return (
    <button className="fab" onClick={handleClick}>
      <div className="fab__container" onClick='ym(83857552, "reachGoal", "call-ok");'>
        <img className="fab__icon" src={svg__phone} alt="" />
      </div>
    </button>
  );
}
