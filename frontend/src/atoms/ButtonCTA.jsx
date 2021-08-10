import React from 'react';

function Button(props) {
  let handleClick = () => {
    const body = document.querySelector('body');
    const curtain = document.getElementById('curtain');
    const floatingContacts = document.querySelector('.floating-contacts');
    const headerContainer = document.querySelector('.header__container');
    const headerNav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    // Scroll to the top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    body.classList.toggle('fixed-page');
    curtain.classList.toggle('curtain--opened');
    headerContainer.classList.toggle('hidden');
    headerNav.classList.toggle('hidden');
    header.classList.toggle('darken')
    floatingContacts.classList.toggle('floating-contacts--hidden');
  };

  return (
    <button className={props.styling} onClick={handleClick}>
      {props.text}
    </button>
  );
}

export default Button;
