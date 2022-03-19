import Image from 'next/dist/client/image';
import {
  IoIosArrowBack as ArrowLeft,
  IoIosArrowForward as ArrowRight,
} from 'react-icons/io';
import { useState } from 'react';
import styles from './styles.module.scss';
import { imageDataType } from '@/types/imageSlider';

const ImageSlider: React.FC<{ props: imageDataType[] }> = ({ props }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex(imageIndex === props.length - 1 ? 0 : imageIndex + 1);
  };

  const prevSlide = () => {
    setImageIndex(imageIndex === 0 ? props.length - 1 : imageIndex - 1);
  };

  return (
    <section className={styles.slider}>
      <ArrowLeft className={styles.arrow__left} onClick={prevSlide} />
      <ArrowRight className={styles.arrow__right} onClick={nextSlide} />
      {props.map((slide, index) => (
        <div
          key={slide.ID}
          className={
            index === imageIndex
              ? `${styles.slide} ${styles.active}`
              : styles.slide
          }
        >
          {index === imageIndex && (
            <div className={styles.image}>
              <Image
                src={slide.url}
                alt={slide.alt}
                priority={true}
                placeholder='blur'
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
