import Link from '@/components/Link';
import { showFullHeader } from '@/helpers/header_helper';
import styles from './styles.module.scss';
import style from './BurgerMenu/styles.module.scss';

type LinkProps = {
  link?: string;
  text: string;
  click?: () => void;
  isBurgerItem?: boolean;
};

const LinkItem: React.FC<LinkProps> = ({
  link,
  text,
  click,
  isBurgerItem = false,
}) => {
  const handleClick = () => {
    try {
      showFullHeader();
      click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      className={isBurgerItem ? style.burger__item : styles.menu__item}
      onClick={handleClick}
    >
      {link ? (
        <Link
          href={link}
          text={text}
          classes={isBurgerItem ? style.burger__link : styles.menu__link}
        />
      ) : (
        <p className={isBurgerItem ? style.burger__link : styles.menu__link}>
          {text}
        </p>
      )}
    </li>
  );
};

export default LinkItem;
