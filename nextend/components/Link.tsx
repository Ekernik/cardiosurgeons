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
  classes,
  onClick,
  linkOptions,
  children,
}) => (
  <NextLink href={href} prefetch={false}>
    <a onClick={onClick} className={classes} {...linkOptions}>
      {text}
      {children}
    </a>
  </NextLink>
);

export default Link;
