import NextLink from 'next/link';
import { ReactChild } from 'react';

type LinkProps = {
  href: string;
  text?: string;
  classes?: string;
  onClick?: () => void;
  kids?: ReactChild;
  linkOptions?: any;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  classes = 'article__link',
  onClick,
  kids,
  linkOptions,
}) => (
  <NextLink href={href}>
    <a onClick={onClick} className={classes} {...linkOptions}>
      {text}
      {kids}
    </a>
  </NextLink>
);

export default Link;
