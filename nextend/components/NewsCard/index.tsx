import Image from 'next/image';
import Link from '@/components/Link';
import arrowRight from '@/public/static/svg/chevron-right.svg';
import styles from './newsCard.module.scss';

type PropTypes = {
  title: string;
  subtitle: string;
  link: string;
  isRegions: boolean;
};

const NewsCard: React.FC<PropTypes> = props => {
  const { title, subtitle, link, isRegions = false } = props;
  const cardClass = isRegions ? styles.data_card__regions : styles.data_card;

  return (
    <div className={`${cardClass}`}>
      <h2 className={styles.date}>{title}</h2>
      <h4 className={styles.city}>{subtitle}</h4>
      <Link href={link} text='Читать подробнее' classes={styles.link}>
        <Image src={arrowRight} alt='' width={24} height={24} />
      </Link>
    </div>
  );
};

export default NewsCard;
