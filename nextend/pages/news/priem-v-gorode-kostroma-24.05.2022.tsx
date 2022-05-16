import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';
import Link from '@/components/Link';

// Кострома - 24 мая 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Кострома, ул. Боевая, д. 32';
  const city = 'город Кострома';
  const mapsLink = 'https://yandex.ru/maps/-/CCUFr6dW3D';
  const mapsGeometry = [57.778568, 40.955802];
  const SEODetails = {
    title: 'Кардиохирург в городе Кострома.',
    description:
      'Записывайтесь на прием в кардиохирургу в городе Кострома. Прием ведут кардиохирурги из Санкт-Петербурга. Бесплатно по ОМС.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-kostroma-24.05.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `26 мая`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 16 мая 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>Прием сердечно-сосудистого хирурга в городе Костроме</h3>
            <p>
              24 мая в Кардиологическом диспансере КОКБ принимает врач
              сердечно-сосудистый хирург кандидат медицинских наук{' '}
              <Link
                href='/team/doctor_balahonov'
                text='Балахонов Василий Васильевич'
              />
              .
            </p>
            <p>
              По итогам приема будут отобраны пациенты на бесплатные операции в
              Санкт-Петербурге.
            </p>
            <p>
              Бесплатное лечение в нашем Центре кардиохирургии и интервенционной
              кардиологии проводится по ОМС и федеральным квотам.
            </p>
            <h3>
              Приглашаем на прием всех пациентов со следующими заболеваниями:
            </h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
              <li>Кардиомиопатии</li>
              <li>Пороки и аномалии развития сердца</li>
            </ul>
            <h3>При себе пациенту необходимо иметь:</h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
              <li>Имеющиеся медицинские документы</li>
            </ul>
            <h3>Стоимость приёма — бесплатно по ОМС.</h3>
            <ButtonCTA styling={local_styles.cta} text='Записаться на прием' />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться по адресу:{' '}
              <a
                href={mapsLink}
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                {addressOfVisit}
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink phoneNumber='+7 (474) 237-00-07' />
            </p>
            <Map position={mapsGeometry} />
          </div>
        </div>
        <hr />
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
