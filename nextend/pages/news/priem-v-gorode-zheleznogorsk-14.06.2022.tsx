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

// Железногорск - 14 июня 2022 - Пягай
const Announcement: NextPage = () => {
  const doctor = doctors[10];
  const addressOfVisit = 'г. Железногорск, Алексеевский проезд д. 1';
  const city = 'Железногорск';
  const mapsLink = 'https://yandex.ru/maps/-/CCUJe8ujcD';
  const mapsGeometry = [52.346086, 35.337819];
  const SEODetails = {
    title: 'Кардиохирург Железногорск. Кардиолог Железногорск',
    description:
      'Прием ведут специалисты клиники кардиохирургии из Санкт-Петербурга. Записывайтесь на обследование!',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-zheleznogorsk-14.06.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `14 июня`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 30 мая 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              14 июня 2022 года в городе Железногорске прием пациентов в МЦ
              «Матис». Принимать пациентов будет сердечно-сосудистый хирург
              из Санкт-Петербурга{' '}
              <Link
                href='/team/doctor_pyagai'
                text='Пягай Виктор Александрович'
              />
              .
            </h3>
            <h3>Важно. При себе необходимо иметь:</h3>
            <ul>
              <li>Паспорт</li>
              <li>СНИЛС</li>
              <li>Полис ОМС</li>
              <li>Медицинские документы</li>
            </ul>
            <h3>
              14 июня будут приниматься пациенты со следующими заболеваниями:
            </h3>
            <ul>
              <li>Аневризмы аорты</li>
              <li>Ишемическая болезнь сердца</li>
              <li>Окклюзии и стенозы магистральных артерий</li>
              <li>Прочие артериальные патологии</li>
            </ul>
            <h3>Стоимость приёма — 1500 рублей.</h3>
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
            <p>
              Тел. МДЦ «Матис»: <PhoneLink phoneNumber='+7 (47148) 45809' />
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
