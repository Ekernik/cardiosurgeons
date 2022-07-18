import React, { useState } from 'react';
import styles from './styles.module.scss';

const Tab = ({ selected, setSelected }) => {
  return (
    <section className={styles.tabs}>
      <button
        onClick={() => setSelected('text')}
        className={selected === 'text' ? styles.active : ''}
      >
        Текстовые отзывы
      </button>
      <button
        onClick={() => setSelected('video')}
        className={selected === 'video' ? styles.active : ''}
      >
        Видео отзывы
      </button>
    </section>
  );
};

export default Tab;
