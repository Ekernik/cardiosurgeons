import Image from 'next/image';
import styles from './styles.module.scss';

const DoctorCard: React.FC<any> = ({ doctor }) => {
  return (
    <div className={styles.card}>
      <a href={doctor.link}>
        <Image src={doctor.img} alt={doctor.alt} />
        <h2>{doctor.name}</h2>
        <section className={styles.card__titles}>
          {doctor.title.map((title, i) => (
            <span key={Date.now() + i}>{title}</span>
          ))}
        </section>
      </a>
    </div>
  );
};

export default DoctorCard;
