import DropListItem from "./DropListItem";

const DropList = ({ mainLink, links }) => {
  return (
    <li className="menu__item">
      <a href={mainLink.link} className="menu__link">
        {mainLink.text}
      </a>
      <div className="menu__drop-down">
        {links.map((link, i) => (
          <DropListItem
            link={link.link}
            text={link.text}
            key={Date.now() + i}
          />
        ))}
        {links.length % 2 !== 0 ? <DropListItem fake/> : <></>}
      </div>
    </li>
  );
};

export default DropList;
