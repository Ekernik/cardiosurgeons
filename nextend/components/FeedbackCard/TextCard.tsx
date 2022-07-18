import { useState } from 'react';
import Modal from '@/components/Modal';
import style from './feedbackCard.module.scss';

const TextCard = ({ review }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleClick = () => {
    setIsModalOpen(true);
    document.querySelector('body').classList.add('fixed');
    setModalContent(review.id);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          document.querySelector('body').classList.remove('fixed');
        }}
        content={modalContent}
      />
      <section className={style.box}>
        <div className={style.header}>
          <p>{review.author || 'Анонимно'}</p>
          <p>{review.city}</p>
        </div>
        <div className={style.message}>
          <p>{review.message}</p>
        </div>
        {review.readmore && (
          <button className={style.btn_more} onClick={handleClick}>
            читать полностью
          </button>
        )}
      </section>
    </>
  );
};

export default TextCard;
