import { NextPage } from 'next';
import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Хасавюрт - 01 марта 2022 - Каппушев
const Announcement: NextPage = () => {
  const doctor = doctors[7];
  const dayOfVisit = '01';
  const monthOfVisit = 'марта';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Хасавюрт, ул. Дачная, д. 4';
  const dateOfNews = '17 февраля 2022';
  const city = 'город Хасавюрт';
  const doctorShortName = 'Каппушев Р.Ю.';
  const price = 'бесплатно';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RKt83D';
  const mapsGeometry = [43.248833, 46.590709];
  const SEODetails = {
    title: 'Прием кардиохирурга - Хасавюрт',
    description: `${city} - ${dayOfVisit} ${monthOfVisit} ${yearOfVisit} - Принимает кардиохирург из Петербурга - ${doctor.name}. Записывайтесь на прием.`,
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-hasavyurt-01.03.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <p className={local_styles.date}>Новость от {dateOfNews} года</p>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г. в&nbsp;городе
              Хасавюрте в Медицинском центре «Медиус» принимает пациентов
              сердечно-сосудистый хирург из&nbsp;Санкт-Петербурга{' '}
              {doctorShortName}
            </h3>
            <p>
              На прием приглашаем пациентов со&nbsp;следующими заболеваниями
              органов сердечно-сосудистой системы:
            </p>
            <ul>
              <li>
                <Link
                  href='/diseases/ishemicheskaya-bolezn-serdca'
                  text='Ишемическая болезнь сердца&nbsp;(ИБС)'
                />
              </li>
              <li>
                <Link
                  href='/diseases/anevrizma-i-rassloenie-aorti'
                  text='Аневризма аорты'
                />
              </li>
              <li>Окклюзии и&nbsp;стенозы магистральных артерий</li>
              <li>Иная артериальная патология</li>
            </ul>
            <h3>Для приема в МЦ «Медиус» пациенту необходимы документы:</h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
            <h3>Стоимость приёма — {price}.</h3>
            <div className='marked-container'>
              <p>
                Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
                выполняются бесплатно в&nbsp;рамках федеральных квот
                на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
                по&nbsp;ОМС.
              </p>
            </div>
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
              Прием будет проводиться:{' '}
              <strong>
                {dayOfVisit}&#160;{monthOfVisit}&#160;{yearOfVisit}&#160;г.
              </strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href={mapsLink}
                target='_blank'
                rel='noreferrer'
                className='article__link'
              >
                {addressOfVisit}
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
            </p>
            <p>
              Тел. МЦ «Медиус»:{' '}
              <PhoneLink phoneNumber='+7&nbsp;(928)&nbsp;254&#8209;33&#8209;33' />
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
