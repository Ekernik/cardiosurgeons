import React from "react";

const LinkItem = ({ link, text }) => {
  return (
    <li className="menu__item">
      <a href={link} className="menu__link">
        {text}
      </a>
    </li>
  );
};

export default LinkItem;
