import MakeAppointmentForm from './Forms/MakeAppointmentForm';
import styles from '@/components/Header/styles.module.scss';
import styles2 from '@/components/Header/Nav/styles.module.scss';

const handleClose = () => {
  const body = document.querySelector('body');
  const curtain = document.getElementById('curtain');
  const floatingContacts = document.querySelector('.floating-contacts');
  const headerContainer = document.querySelector(
    `.${styles.header__container}`,
  );
  const headerNav = document.querySelector(`.${styles2.header__nav}`);
  const header = document.querySelector(`.${styles.header}`);
  headerContainer.classList.toggle('hidden');
  headerNav.classList.toggle('hidden');
  header.classList.toggle('darken');
  body.classList.toggle('fixed-page');
  curtain.classList.toggle('curtain--opened');
  floatingContacts.classList.toggle('floating-contacts--hidden');
};

function FloatingContacts() {
  return (
    <div className="floating-contacts floating-contacts--hidden">
      <div className="floating-contacts-cross" onClick={handleClose}>
        <span></span>
      </div>

      <MakeAppointmentForm />
    </div>
  );
}

export default FloatingContacts;
