import Link from '@/components/Link';
import SocialMediaLink from '@/components/SocialMediaLink';
import logo_instagram from '@/public/static/svg/instagram.svg';
import logo_vk from '@/public/static/svg/vk.svg';
import styles from '@/styles/footer.module.scss';

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

const Footer = () => (
  <footer className={styles.footer}>
    <div className='container text-center'>
      <div className={styles.social_links__container}>
        <SocialMediaLink {...settings_instagram} />
        <SocialMediaLink {...settings_vk} />
      </div>
      <hr className={styles.footer__hr} />
      <span className={styles.footer__copyright}>&copy; copyright 2022</span>
      <Link
        href='/reestr.pdf'
        text='выписка из реестра лицензий по состоянию на 23.04.2021'
        classes={styles.footer__mark}
      />
    </div>
  </footer>
);

export default Footer;
