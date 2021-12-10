import { useState } from 'react';
import Modal from './Modal';
import style from '../styles/reviewBox.module.scss';

export default function ReviewBox({ review }) {
  const isDoctorMentioned = review.doctors.length > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
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
          <p className={style.author}>{review.author || 'Анонимно'}</p>
        </div>
        <p className={style.city}>{review.city}</p>
        <div className={style.message}>
          {review.message.map((par, i) => (
            <p className="article__p" key={i + Date.now()}>
              {par}
            </p>
          ))}
        </div>
        {review.readmore && (
          <button
            className={style.btn_more}
            onClick={() => {
              console.log(isModalOpen);
              setIsModalOpen(true);
              document.querySelector('body').classList.add('fixed');
              setModalContent(review.id);
            }}
          >
            читать полностью
          </button>
        )}
      </div>
    </>
  );
}
