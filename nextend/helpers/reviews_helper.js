import REVIEWS from '@/public/static/databases/reviews';
import ReviewBox from '@/components/ReviewBox';

export const getThreeReviews = () => {
  const reviews = [...REVIEWS].reverse().slice(0, 3);
  return reviews.map((review, i) => (
    <ReviewBox key={i + Date.now()} review={review} />
  ));
};
