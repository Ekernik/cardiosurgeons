import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Map from '@/components/Map';
import EmailLink from '@/components/EmailLink';
import styles from './locationCard.module.scss';

// ICONS
import { BiPhoneCall } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiMoscowmetro } from 'react-icons/si';
import { GoMail } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';

function LocationCard() {
  return (
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

      <ul className={styles.info}>
        <li className={styles.info__item}>
          <FaMapMarkerAlt />
          <address>
            Санкт-Петербург, наб.&nbsp;р.&nbsp;Фонтанки,&nbsp;д.&nbsp;154
          </address>
        </li>

        <li className={styles.info__item}>
          <SiMoscowmetro />
          Балтийская, Технологический&nbsp;институт
        </li>

        <li className={styles.info__item}>
          <BsClock />
          <time dateTime='09:00'>09:00</time> -{' '}
          <time dateTime='21:00'>21:00</time>
        </li>

        <li className={styles.info__item}>
          <GoMail />
          <EmailLink />
        </li>

        <li className={styles.info__item}>
          <BiPhoneCall />
          <PhoneLink />
        </li>
      </ul>
    </section>
  );
}

export default LocationCard;
