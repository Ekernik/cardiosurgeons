import { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Железногорск - 10 марта 2022 - Пягай
const Announcement: NextPage = () => {
  const doctor = doctors[10];
  const dayOfVisit = '10';
  const monthOfVisit = 'марта';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Железногорск,  Алексеевский проезд д. 1';
  const dateOfNews = '17 февраля 2022';
  const city = 'город Железногорск';
  const doctorShortName = 'Пягай В.А.';
  const price = '1500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RSU7dB';
  const mapPosition = [52.346086, 35.337819];
  const SEODetails = {
    title: 'Прием кардиохирурга - Железногорск',
    description: `${city} - ${dayOfVisit} ${monthOfVisit} ${yearOfVisit} - Принимает кардиохирург из Петербурга - ${doctor.name}. Записывайтесь на прием.`,
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-zheleznogorsk-10.03.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от {dateOfNews} года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г. в&nbsp;городе
              Железногорске в Медицинском центре «Матис» принимает пациентов
              сердечно-сосудистый хирург из&nbsp;Санкт-Петербурга{' '}
              {doctorShortName}
            </h3>
            <p>
              На прием приглашаем пациентов со&nbsp;следующими заболеваниями
              органов сердечно-сосудистой системы:
            </p>
            <ul>
              <li>Ишемическая болезнь сердца&nbsp;(ИБС)</li>
              <li>Аневризма аорты</li>
              <li>Окклюзии и&nbsp;стенозы магистральных артерий</li>
              <li>Иная артериальная патология</li>
            </ul>
            <h3>Для приема в МЦ «Матис» пациенту необходимы документы:</h3>
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
            <ButtonCTA
              styling={`greetings__cta ${local_styles.cta}`}
              text='Записаться на прием'
            />
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
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(47148)&nbsp;4&#8209;58&#8209;09'
                text='Тел. МДЦ «Матис»: '
              />
            </p>
            <Map position={mapPosition} />
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
