import REVIEWS from '@/public/static/databases/reviews';
import TextCard from '@/components/FeedbackCard/TextCard';

export const getThreeReviews = () => {
  const reviews = [...REVIEWS].reverse().slice(0, 3);
  return reviews.map((review, i) => (
    <TextCard key={i + Date.now()} review={review} />
  ));
};
