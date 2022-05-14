import styles from './styles.module.scss';
import Link from '@/components/Link';

const Card = ({ link, title, publishDate }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <p className={styles.date}>{publishDate}</p>
      <p className={styles.title}>{title}</p>
    </div>
    <Link href={`/announcements/${link}`} text='Читать подробнее' />
  </div>
);

export default Card;
