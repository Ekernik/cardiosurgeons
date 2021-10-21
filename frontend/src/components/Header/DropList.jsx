import React from "react";
import DropListItem from "./DropListItem";

const DropList = ({ mainLink, links }) => {
  return (
    <li className="menu__item">
      <a href={mainLink.link} className="menu__link">
        {mainLink.text}
      </a>
      <div className="menu__drop-down">
        {links.map((link) => (
          <DropListItem link={link.link} text={link.text} />
        ))}
      </div>
    </li>
  );
};

export default DropList;
