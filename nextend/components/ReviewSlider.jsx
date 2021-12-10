import REVIEWS from '../public/static/databases/reviews';
import ReviewBox from './ReviewBox';
import styles from '../styles/reviewSlider.module.scss';

export default function ReviewSlider() {
  const reviews = [...REVIEWS].reverse().slice(0, 3);
  const getReviews = () =>
    reviews.map((review, i) => (
      <ReviewBox key={i + Date.now()} review={review}/>
    ));

  return (
    <div className="container">
      <h2 className="article__header">Отзывы о нашем Центре</h2>
      <div className={styles.review__container}>{getReviews()}</div>
    </div>
  );
}
