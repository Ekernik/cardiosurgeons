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

// Арзамас - 21 июня 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Арзамас, ул. Матросова, д. 13';
  const city = 'город Арзамас';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOSs0B';
  const mapsGeometry = [55.401693, 43.843023];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Арзамасе',
    description:
      'Записывайтесь на прием к кардиохирургу из Петербурга. Проводим бесплатные операции на сердце по федеральным квотам и ОМС.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-arzamas-21.06.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `21 июня`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 30 мая 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>Прием сердечно-сосудистого хирурга в городе Арзамасе</h3>
            <p>
              21 июня в МЦ «Лор+» состоится прием сердечно-сосудистого хирурга
              из Санкт-Петербурга{' '}
              <Link
                href='/team/doctor_balahonov'
                text='Балахонова Василия Васильевича'
              />
              .
            </p>
            <p>
              По итогам приема будут отобраны пациенты для бесплатного лечения в
              нашем Центре кардиохирургии и интервенционной кардиологии, которые
              проводятся по ОМС и федеральным квотам.
            </p>
            <h3>
              21 июня будут приниматься пациенты со следующими заболеваниями:
            </h3>
            <ul>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Ишемическая болезнь сердца</li>
              <li>Патология периферических сосудов</li>
              <li>Иные патологии</li>
            </ul>
            <h3>Для приема необходимо иметь с собой:</h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
              <li>Имеющиеся результаты предыдущих обследований</li>
            </ul>
            <h3>Стоимость приёма — 2000 рублей.</h3>
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
              Тел. для записи: <PhoneLink />
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
