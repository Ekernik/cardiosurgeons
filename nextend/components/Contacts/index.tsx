import Link from '@/components/Link';
import styles from './styles.module.scss';
import PhoneLink from '@/components/PhoneLink';
import Map from '@/components/Map';
import EmailLink from '@/components/EmailLink';

// ICONS
import { BiPhoneCall } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiMoscowmetro } from 'react-icons/si';
import { GoMail } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import MakeAppointmentForm from '../Forms/MakeAppointmentForm';

const Contacts: React.FC = () => (
  <section className='container'>
    <div className={styles.contacts_flexbox}>
      {/* Left part */}
      <section className={styles.our_location}>
        <h2>
          Где нас найти <br /> в Санкт-Петербурге
        </h2>
        <Map position={[59.915765, 30.28255]} height='350px' />
        <Link
          href='/map-route.png'
          classes={styles.advanced_route}
          linkOptions={{ target: '_blank' }}
        >
          Подробный маршрут
        </Link>

        <ul className={styles.contacts_info}>
          <li className={styles.contacts_info__item}>
            <FaMapMarkerAlt />
            <address>
              Санкт-Петербург, наб.&nbsp;р.&nbsp;Фонтанки,&nbsp;д.&nbsp;154
            </address>
          </li>

          <li className={styles.contacts_info__item}>
            <SiMoscowmetro />
            Балтийская, Технологический&nbsp;институт
          </li>

          <li className={styles.contacts_info__item}>
            <BsClock />
            <time dateTime='09:00'>09:00</time> -{' '}
            <time dateTime='21:00'>21:00</time>
          </li>

          <li className={styles.contacts_info__item}>
            <GoMail />
            <EmailLink />
          </li>

          <li className={styles.contacts_info__item}>
            <BiPhoneCall />
            <PhoneLink />
          </li>
        </ul>
      </section>

      {/* Right part - Form */}
      <MakeAppointmentForm />
    </div>
  </section>
);

export default Contacts;
