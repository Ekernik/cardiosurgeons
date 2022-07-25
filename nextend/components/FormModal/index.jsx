import MakeAppointmentForm from '../Forms/MakeAppointmentForm';
import styles from './styles.module.scss';
import { useEffect } from 'react';

function FormModal(props) {
  useEffect(() => {
    const htmlEl = document.querySelector('html');
    htmlEl.classList.add('fixed');

    return () => {
      htmlEl.classList.remove('fixed');
    };
  }, []);

  return (
    <section className={styles.modal} onClick={props.handleClose}>
      <div onClick={e => e.stopPropagation()}>
        <div className={styles.modal__cross} onClick={props.handleClose}>
          <span></span>
        </div>

        <MakeAppointmentForm />
      </div>
    </section>
  );
}

export default FormModal;
