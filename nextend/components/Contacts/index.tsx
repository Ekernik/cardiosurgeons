import Link from '@/components/Link';
import ContactsForm from './ContactsForm';
import styles from './styles.module.scss';
import PhoneLink from '@/components/PhoneLink';
import Map from '@/components/Map';

// ICONS
import { BiLinkExternal, BiPhoneCall } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiMoscowmetro } from 'react-icons/si';
import { GoMail } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';

const Contacts: React.FC = () => (
  <section className='container'>
    <div className={styles.contacts_flexbox}>
      {/* Left part */}
      <div className={styles.our_location}>
        <h3 className={styles.subheader}>
          Где нас найти в г. Санкт-Петербурге
        </h3>
        <Map position={[59.915765, 30.28255]} />
        <Link
          href='/map-route.png'
          classes={styles.advanced_route}
          kids={
            <>
              <span className={styles.contacts_external_icon}>
                Подробный маршрут
                <BiLinkExternal />
              </span>
            </>
          }
          linkOptions={{ target: '_blank' }}
        />

        <ul className={styles.contacts_info}>
          <li className={styles.contacts_info__item}>
            <FaMapMarkerAlt />
            Санкт-Петербург, наб. р. Фонтанки, д. 154
          </li>

          <li className={styles.contacts_info__item}>
            <SiMoscowmetro />
            Балтийская, Технологический институт
          </li>

          <li className={styles.contacts_info__item}>
            <BsClock />
            09:00 - 21:00
          </li>

          <li className={styles.contacts_info__item}>
            <GoMail />
            <a href='mailto:heartteam.spb@gmail.com' className='article__link'>
              heartteam.spb@gmail.com
            </a>
          </li>

          <li className={styles.contacts_info__item}>
            <BiPhoneCall />
            <PhoneLink phoneNumber='+7 (999) 238-01-36' text_classes='' />
          </li>
        </ul>
      </div>

      {/* Right part - Form */}
      <ContactsForm />
    </div>
  </section>
);

export default Contacts;
