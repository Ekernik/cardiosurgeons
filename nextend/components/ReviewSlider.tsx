import styles from '@/styles/reviewSlider.module.scss';
import { getThreeReviews } from '@/helpers/reviews_helper';

const ReviewSlider: React.FC = () => (
  <div className='container'>
    <h2 className='article__header'>Отзывы о нашем Центре</h2>
    <div className={styles.review__container}>{getThreeReviews()}</div>
  </div>
);

export default ReviewSlider;
