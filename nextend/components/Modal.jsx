import Image from 'next/image';
import React, { Suspense } from 'react';
import close_img from '../public/static/svg/x-mark.png';
import styles from '../styles/modal.module.scss';

export default function Modal({ open, onClose, content }) {
  if (!open) return null;
  const ContentfullComponent = React.lazy(() => import(`./Reviews/${content}`));
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h3 className={styles.heading}>Отзыв</h3>
          <div className={styles.container}>
            <button onClick={onClose} className={styles.button}>
              <Image src={close_img} className={styles.close__btn} />
            </button>
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <ContentfullComponent></ContentfullComponent>
          </Suspense>
        </div>
      </div>
    </>
  );
}
