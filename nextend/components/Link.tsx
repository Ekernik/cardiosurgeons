import NextLink from 'next/link';

type LinkProps = {
  href: string;
  text: string;
  classes: string;
  onClick?: () => void;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  classes = 'article__link',
  onClick,
}) => (
  <NextLink href={href}>
    <a onClick={onClick} className={classes}>
      {text}
    </a>
  </NextLink>
);

export default Link;
