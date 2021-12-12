import Link from 'next/link';
import { showFullHeader } from './watchScroll';

export default function LinkItem({ link, text, click }) {
  const handleClick = () => {
    try {
      showFullHeader();
      click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="menu__item" onClick={handleClick}>
      <Link href={link}>
        <a className="menu__link">{text}</a>
      </Link>
    </li>
  );
}
