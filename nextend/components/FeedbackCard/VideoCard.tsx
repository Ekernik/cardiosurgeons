import { FC } from 'react';
import styles from './feedbackCard.module.scss';
import { videoReviewType } from '@/types/videoReview';

type props = {
  review: videoReviewType;
};

const VideoCard: FC<props> = ({ review }) => {
  return (
    <div className={styles.videowrapper}>
      <iframe src={review.link} frameBorder='0' allowFullScreen />
    </div>
  );
};

export default VideoCard;
