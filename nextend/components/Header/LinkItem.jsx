import Link from 'next/link';

export default function LinkItem({ link, text }) {
  return (
    <li className="menu__item">
      <Link href={link}>
        <a className="menu__link">{text}</a>
      </Link>
    </li>
  );
}
