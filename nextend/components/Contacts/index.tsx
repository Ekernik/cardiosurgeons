import styles from './styles.module.scss';

import MakeAppointmentForm from '../Forms/MakeAppointmentForm';
import LocationCard from '../Cards/LocationCard';

const Contacts: React.FC = () => (
  <section className='container'>
    <div className={styles.contacts_flexbox}>
      {/* Left part */}
      <LocationCard />
      {/* Right part - Form */}
      <MakeAppointmentForm />
    </div>
  </section>
);

export default Contacts;
