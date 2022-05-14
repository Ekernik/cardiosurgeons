import Button from '@/components/ButtonCTA';
import styles from './styles.module.scss';

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
  const title = typeof header === 'string' ? header : header.title;
  const pretitle = typeof header === 'string' ? '' : header.pretitle;
  return (
    <section className={styles.greetings__section}>
      <div className='container'>
        <h2 className={styles.greetings__header}>{title}</h2>
        <p className={styles.greetings__text}>{pretitle}</p>
        <h3 className={styles.greetings__subheader}>{subheader}</h3>
        <Button styling={styles.greetings__cta} text={buttonText} />
      </div>
    </section>
  );
};

export default Greetings;
