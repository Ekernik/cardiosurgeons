import Image from 'next/image';
import styles from '@/styles/socialMediaLink.module.scss';

type LogoType = {
  height: number;
  width: number;
  src: string;
};

type PropType = {
  link: string;
  logo: LogoType;
  alt: string;
  socialID: string;
};

const SocialMediaLink: React.FC<PropType> = ({ link, logo, alt, socialID }) => (
  <a
    href={link}
    target='_blank'
    className={styles.link}
    rel='noreferrer noopenner'
  >
    <Image src={logo} alt={alt} />
    <span className={styles.icon}>{socialID}</span>
  </a>
);

export default SocialMediaLink;
