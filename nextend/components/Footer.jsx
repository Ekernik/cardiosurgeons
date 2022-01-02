import Image from 'next/image';
import Link from 'next/link';
import logo_instagram from '@/public/static/svg/instagram.svg';
import logo_vk from '@/public/static/svg/vk.svg';
import styles from '@/styles/footer.module.scss';

const SocialMediaLink = ({ props }) => {
  const { link, logo, alt, socialID } = props;

  return (
    <a
      href={link}
      target="_blank"
      className={styles.social_links__link}
      rel="noreferrer noopenner"
    >
      <Image src={logo} alt={alt} />
      <span className={styles.social_links__icon}>{socialID}</span>
    </a>
  );
};

export default function Footer() {
  const settings_instagram = {
    link: 'https://www.instagram.com/heartteam.spb/',
    logo: logo_instagram,
    alt: 'Ссылка на наш instagram.',
    socialID: 'heartteam.spb',
  };

  const settings_vk = {
    link: 'https://vk.com/heartteam_spb',
    logo: logo_vk,
    alt: 'Cсылка на нас во Вконтакте.',
    socialID: 'heartteam_spb',
  };

  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <div className={styles.social_links__container}>
          <SocialMediaLink props={settings_instagram} />
          <SocialMediaLink props={settings_vk} />
        </div>
        <hr className={styles.footer__hr} />
        <span className={styles.footer__copyright}>&copy; copyright 2021</span>
        <Link href="/reestr.pdf">
          <a
            target="_blank"
            className={styles.footer__mark}
            rel="noreferrer noopenner"
          >
            выписка из реестра лицензий по состоянию на 23.04.2021
          </a>
        </Link>
      </div>
    </footer>
  );
}
