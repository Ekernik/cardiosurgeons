import React from "react";

const DropListItem = ({ link, text }) => {
  return (
    <div className="link-container">
      <a href={link}>{text}</a>
    </div>
  );
};

export default DropListItem;
