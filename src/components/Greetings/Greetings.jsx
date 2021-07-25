import React from 'react';
import './index.scss';

function Greetings() {
  let handleClick = () => {
    const body = document.querySelector('body');
    const curtain = document.getElementById('curtain');
    const floatingContacts = document.querySelector('.floating-contacts');
    // Scroll to the top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    body.classList.toggle('fixed-page');
    curtain.classList.toggle('curtain--opened');
    floatingContacts.classList.toggle('floating-contacts--hidden');
  };

  return (
    <section id="greetings-section">
      <div className="container">
        <h1 className="greetings__header">
          Центр кардиохирургии и интервенционной кардиологии
        </h1>
        <h3 className="greetings__subheader">Медицина, доступная каждому</h3>
        <button className="greetings__cta" onClick={handleClick}>
          Записаться на прием
        </button>
      </div>
    </section>
  );
}

export default Greetings;
