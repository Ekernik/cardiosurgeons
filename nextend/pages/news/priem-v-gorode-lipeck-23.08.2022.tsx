import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import local_styles from './styles.module.scss';
import { doctors } from '@/public/static/databases/doctors';
import DoctorCard from '@/components/DoctorCard';

// Липецк - 23 августа 2022 - Сорокин А.А.
const Announcement: NextPage = () => {
  const doctor = doctors[6];
  const dayOfVisit = '23';
  const monthOfVisit = 'августа';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Липецк, ул. С.С.Бетхеева, д. 9';
  const dateOfNews = '20 июля 2022';
  const city = 'город Липецк';
  const price = 'бесплатно по ОМС';
  const mapsLink = 'https://yandex.ru/maps/-/CCUF6XWEGD';
  const mapPosition = [52.602061, 39.510925];
  const SEODetails = {
    title: 'Прием сердечно-сосудистого хирурга в городе Липецке',
    description:
      'Записывайтесь на консультацию к кардиохирургу из Санкт-Петербурга. Осмотр и лечение бесплатно. Количество мест ограничено!',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-lipeck-23.08.2022',
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
        <h6 className={local_styles.date}>Новость от {dateOfNews} года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h1>Прием сердечно-сосудистого хирурга в городе Липецкe</h1>
            <p>
              <time dateTime='2022-08-23'>23 августа 2022 года</time> в городе
              Липецк состоится выездной прием кардиохирурга нашей клиники
              Сорокина Андрея Александровича. Приглашаем на консультацию
              пациентов с сердечно-сосудистыми заболеваниями для отбора на
              БЕСПЛАТНОЕ лечение в Санкт-Петербурге (по ОМС или федеральным
              квотам).
            </p>
            <p>
              Прием будет проходить в Северо-Западном Центре доказательной
              медицины по адресу: г. Липецк, ул. С.С.Бетхеева, д. 9.
            </p>
            <h3>
              Чтобы попасть на осмотр к нашему специалисту вам необходимо:
            </h3>
            <ol>
              <li>
                Позвонить по номеру телефона{' '}
                <PhoneLink phoneNumber='+7&nbsp;(474)&nbsp;237&#8209;00&#8209;07' />
              </li>
              <li>
                Взять с собой паспорт, СНИЛС, полис ОМС, все имеющиеся
                медицинские документы (заключения специалистов, справки и т.д.)
              </li>
            </ol>
            <h3>
              Записывайтесь на прием к кардиохирургу в городе Липецк, если у вас
              продиагностированы:
            </h3>
            <ul>
              <li>Ишемическая болезнь сердца&nbsp;ИБС</li>
              <li>Окклюзии и&nbsp;стенозы магистральных артерий</li>
              <li>Аневризма и расслоение аорты</li>
              <li>Иные артериальные патологии</li>
            </ul>
            <h3>
              Стоимость приёма — <strong>{price}</strong>.
            </h3>
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
                <time dateTime='2022-08-23'>
                  23&#160;августа&#160;2022&#160;г.
                </time>
              </strong>
            </p>
            <p>
              По адресу:{' '}
              <a href={mapsLink} target='_blank' rel='noreferrer'>
                {addressOfVisit}
              </a>
            </p>
            <p>
              Тел. для записи:{' '}
              <PhoneLink phoneNumber='+7&nbsp;(474)&nbsp;237&#8209;00&#8209;07' />
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
