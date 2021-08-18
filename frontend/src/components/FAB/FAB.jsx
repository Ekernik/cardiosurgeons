import React from "react";
import "./index.scss";
import svg__phone from "../../assets/svg/phone-call.svg";

export default function FAB() {
  return (
    <div className="fab">
      <a className="fab__link" href="tel:+79992380136">
        <img className='fab__icon' src={svg__phone} alt="" />
      </a>
    </div>
  );
}
