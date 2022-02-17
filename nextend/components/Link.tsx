import NextLink from 'next/link';

type LinkProps = {
  href: string;
  text: string;
  classes: string;
  onClick?: () => void;
  kids: any;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  classes = 'article__link',
  onClick,
  kids,
}) => (
  <NextLink href={href}>
    <a onClick={onClick} className={classes}>
      {text}
      {kids}
    </a>
  </NextLink>
);

export default Link;
