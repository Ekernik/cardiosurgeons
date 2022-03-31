import styles from './styles.module.scss';
import { BsMegaphone } from 'react-icons/bs';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const style = isOpen ? styles.banner : `${styles.banner} ${styles.closed}`;
  // if (!isOpen) return <></>;
  return (
    <div className={style}>
      <div className={`${styles.icon} ${styles.icon__megaphone}`}>
        <BsMegaphone />
      </div>
      <p className={styles.banner__text}>
        <span>
          Наш Центр предлагает бесплатное оперативное лечение
          по&nbsp;федеральным&nbsp;квотам&nbsp;и&nbsp;ОМС{' '}
        </span>
        <span>
          всем&nbsp;гражданам&nbsp;РФ&nbsp;из&nbsp;любых&nbsp;регионов
        </span>
      </p>
      <div className={`${styles.icon} ${styles.icon__close}`} onClick={() => setIsOpen(false)} >
        <RiCloseFill />
      </div>
    </div>
  );
};

export default Banner;
