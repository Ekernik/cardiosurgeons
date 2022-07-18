import { videoReviewType } from '@/types/videoReview';

const VIDEO_REVIEWS: videoReviewType[] = [
  {
    id: 2,
    author: 'Иван Павлович Байков',
    city: 'г. Брянск',
    doctors: ['balahonov', 'pyagai'],
    link: 'https://www.youtube.com/embed/UIhM5Ct4-F0',
    date: '31.03.2022',
  },
  {
    id: 1,
    author: 'Наталья Леонидовна',
    city: 'Африка, Того',
    doctors: ['zubarev, kotova, shmatov, stolyarov'],
    link: 'https://www.youtube.com/embed/vfLySGUlBVY',
    date: '06.10.2021',
  },
];

export default VIDEO_REVIEWS;
