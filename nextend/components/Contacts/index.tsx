import styles from './styles.module.scss';

import MakeAppointmentForm from '../Forms/MakeAppointmentForm';
import LocationCard from '../Cards/LocationCard';

const Contacts: React.FC = () => (
  <section className='container'>
    <div className={styles.contacts_flexbox}>
<<<<<<< HEAD
      {/* Left part */}
      <LocationCard />
      {/* Right part - Form */}
=======
      <LocationCard />
>>>>>>> fc3ffadf00f64fb2f06535fccb461dd750be3187
      <MakeAppointmentForm />
    </div>
  </section>
);

export default Contacts;
