import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
// import FAB from '../FAB/FAB'; #TODO
import insta_logo from "../../public/static/svg/instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <FAB />  #TODO */}
      <div className="container text-center">
        <div className={styles.social_links}>
          <a
            href="https://www.instagram.com/heartteam.spb/"
            target="_blank"
            className={styles.social_links__link}
            rel="noreferrer"
          >
            <Image src={insta_logo} alt="ссылка на наш instagram" />
            <span className={styles.social_links__icon}>heartteam.spb</span>
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
