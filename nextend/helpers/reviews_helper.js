import REVIEWS from '@/public/static/databases/reviews';
import VIDEO_REVIEWS from '@/public/static/databases/videoReviews';
import TextCard from '@/components/FeedbackCard/TextCard';
import VideoCard from '@/components/FeedbackCard/VideoCard';

export const getThreeReviews = () => {
  const reviews = [...REVIEWS].reverse().slice(0, 3);
  return reviews.map(review => <TextCard key={review.id} review={review} />);
};

export const getReviews = doctor => {
  const reviews = [...REVIEWS].reverse();

  if (!doctor) {
    return reviews.map(review => <TextCard key={review.id} review={review} />);
  }

  let filteredReviews = reviews.filter(review =>
    review.doctors.includes(doctor.shortname),
  );

  return filteredReviews.map(review => (
    <TextCard key={review.id} review={review} />
  ));
};

export const getVideos = doctor => {
  const reviews = [...VIDEO_REVIEWS];

  if (!doctor) {
    return reviews.map(review => <VideoCard key={review.id} review={review} />);
  }

  let filteredReviews = reviews.filter(review =>
    review.doctors.includes(doctor.shortname),
  );

  return filteredReviews.map(review => (
    <TextCard key={review.id} review={review} />
  ));
};
