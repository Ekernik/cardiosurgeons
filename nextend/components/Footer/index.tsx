import Link from '@/components/Link';
import styles from './styles.module.scss';
import { FaVk } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className='container text-center'>
      <div className={styles.social_links__container}>
        <a
          href='https://vk.com/heartteam_spb'
          className={styles.link}
          rel='noreferrer noopenner'
        >
          <FaVk className={styles.icon} />
          <span>heartteam_spb</span>
        </a>
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
