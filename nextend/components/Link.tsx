import NextLink from 'next/link';
import { ReactChild } from 'react';

type LinkProps = {
  href: string;
  text?: string;
  classes?: string;
  onClick?: () => void;
  linkOptions?: any;
  children?: ReactChild;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  classes = 'article__link',
  onClick,
  linkOptions,
  children,
}) => (
  <NextLink href={href}>
    <a onClick={onClick} className={classes} {...linkOptions}>
      {text}
      {children}
    </a>
  </NextLink>
);

export default Link;
