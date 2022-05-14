import styles from '@/components/Header/styles.module.scss';
import styles2 from '@/components/Header/Nav/styles.module.scss';

export const openFloatingForm = () => {
  const body = document.querySelector('body');
  const curtain = document.getElementById('curtain');
  const floatingContacts = document.querySelector('.floating-contacts');
  const headerContainer = document.querySelector(`.${styles.header__container}`);
  const headerNav = document.querySelector(`.${styles2.header__nav}`);
  const header = document.querySelector(`.${styles.header}`);

  // Scroll to the top of the page
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  body.classList.toggle('fixed-page');
  curtain.classList.toggle('curtain--opened');
  headerContainer.classList.toggle('hidden');
  headerNav.classList.toggle('hidden');
  header.classList.toggle('darken');
  floatingContacts.classList.toggle('floating-contacts--hidden');
};
