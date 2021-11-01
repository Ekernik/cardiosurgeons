import Link from 'next/link';

const DropListItem = ({ link, text, fake = false }) => {
  return fake ? (
    <div className="link-container"></div>
  ) : (
    <div className="link-container">
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default DropListItem;
