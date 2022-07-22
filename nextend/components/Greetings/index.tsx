import Button from '@/components/ButtonCTA';
import { useState } from 'react';
import styles from './styles.module.scss';
import FormModal from '@/components/FormModal';

type PropsType = {
  header:
    | string
    | {
        title: string;
        pretitle: string;
      };
  subheader?: string;
  buttonText: string;
};

const Greetings: React.FC<PropsType> = ({ header, subheader, buttonText }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const handleClose = () => setShowFormModal(false);

  const title = typeof header === 'string' ? header : header.title;
  const pretitle = typeof header === 'string' ? '' : header.pretitle;
  return (
    <section className={styles.greetings__section}>
      <div className='container'>
        <h2 className={styles.greetings__header}>{title}</h2>
        <p className={styles.greetings__text}>{pretitle}</p>
        <h3 className={styles.greetings__subheader}>{subheader}</h3>
        <Button
          styling={styles.greetings__cta}
          text={buttonText}
          onClick={() => setShowFormModal(true)}
        />
      </div>
      {showFormModal && <FormModal handleClose={handleClose} />}
    </section>
  );
};

export default Greetings;
