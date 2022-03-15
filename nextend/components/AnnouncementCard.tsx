import styles from '@/styles/announcements.module.scss';
import Link from '@/components/Link';

const Card = ({ link, title, publishDate }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <h3 className={styles.date}>{publishDate}</h3>
      <h2 className={styles.title}>{title}</h2>
    </div>
    <Link href={`/announcements/${link}`} text='Читать подробнее' />
  </div>
);

export default Card;
