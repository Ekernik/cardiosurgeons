import Image from 'next/image';
import arrowRight from '@/public/static/svg/chevron-right.svg';
import Link from '@/components/Link';
import styles from '@/styles/newsCard.module.scss';

const NewsCard = props => {
  const { title, subtitle, link, isRegions = false } = props;
  const cardClass = isRegions ? styles.data_card__regions : styles.data_card;

  return (
    <div className={cardClass}>
      <h3 className={styles.date}>{title}</h3>
      <h4 className={styles.city}>{subtitle}</h4>
      <Link
        href={link}
        text='Читать подробнее'
        kids={<Image src={arrowRight} alt='' width={24} height={24} />}
        classes={styles.link}
      />
    </div>
  );
};

export default NewsCard;
