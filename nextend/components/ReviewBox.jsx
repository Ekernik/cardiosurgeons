import { useState } from 'react';
import Modal from '@/components/Modal';
import style from '@/styles/reviewBox.module.scss';

const ReviewBox = ({ review }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const renderMessage = () =>
    review.message.map((message, i) => (
      <p className='article__p' key={i + Date.now()}>
        {message}
      </p>
    ));

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
      <div className={style.box}>
        <div className={style.header}>
          <p>{review.author || 'Анонимно'}</p>
          <p>{review.city}</p>
        </div>
        <div className={style.message}>{renderMessage()}</div>
        {review.readmore && (
          <button className={style.btn_more} onClick={handleClick}>
            читать полностью
          </button>
        )}
      </div>
    </>
  );
};

export default ReviewBox;
