import Image from 'next/image';
import Link from 'next/link';
import logo_instagram from '../public/static/svg/instagram.svg';
import logo_vk from '../public/static/svg/vk.svg';
import styles from '../styles/footer.module.scss';
// import FAB from '../FAB/FAB'; #TODO

export default function Footer() {
  const link_instagram = 'https://www.instagram.com/heartteam.spb/';
  const link_vk = 'https://vk.com/heartteam_spb';

  return (
    <footer className={styles.footer}>
      {/* <FAB />  #TODO */}
      <div className="container text-center">
        <div className={styles.social_links}>
          <a
            href={link_instagram}
            target="_blank"
            className={styles.social_links__link}
            rel="noreferrer noopenner"
          >
            <Image src={logo_instagram} alt="Ссылка на наш instagram." />
            <span className={styles.social_links__icon}>heartteam.spb</span>
          </a>
          <a
            href={link_vk}
            target="_blank"
            className={styles.social_links__link}
            rel="noreferrer noopenner"
          >
            <Image src={logo_vk} alt="Cсылка на нас во Вконтакте." />
            <span className={styles.social_links__icon}>heartteam_spb</span>
          </a>
        </div>
        <hr className={styles.footer__hr} />
        <span className={styles.footer__copyright}>© copyright 2021</span>
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
