import NextLink from 'next/link';

type LinkProps = {
  href: string;
  text: string;
  classes: string;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  classes = 'article__link',
}) => (
  <NextLink href={href}>
    <a className={classes}>{text}</a>
  </NextLink>
);

export default Link;
