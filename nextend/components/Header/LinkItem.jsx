import Link from 'next/link';

export default function LinkItem({ link, text, click }) {
  return (
    <li className="menu__item" onClick={click}>
      <Link href={link}>
        <a className="menu__link">{text}</a>
      </Link>
    </li>
  );
}
