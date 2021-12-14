import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '../public/static/svg/chevron-right.svg';
import styles from '../styles/newsCard.module.scss';

export default function NewsCard(props) {
  const { title, subtitle, link, isRegions = false } = props;

  return (
    <div className={isRegions ? styles.data_card__regions : styles.data_card}>
      <h3 className={styles.date}>{title}</h3>
      <h4 className={styles.city}>{subtitle}</h4>
      <Link href={link}>
        <a className={styles.link}>
          Читать подробнее
          <Image src={arrowRight} alt="" width={24} height={24} />
        </a>
      </Link>
    </div>
  );
}
