import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Арзамас - 06 апреля 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Арзамас, ул. Матросова, д. 13';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOSs0B';
  const mapsGeometry = [55.401693, 43.843023];
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург в городе Арзамасе.',
    description:
      'Прием петербургского кардиохирурга в городе Арзамас. Набираем пациентов на бесплатные операции на сердце.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-arzamas-06.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{
          title: '06 апреля 2022',
          pretitle: 'город Арзамас',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>Прием сердечно-сосудистого хирурга в городе Арзамасе</h3>
            <p>
              6 апреля в МЦ «ЛОР+» принимает сердечно-сосудистый хирург из
              Санкт-Петербурга Балахонов Василий Васильевич.
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
              6-го апреля приглашаем на прием всех пациентов со следующими
              заболеваниями:
            </h3>
            <ul>
              <li>Клапанные пороки сердца</li>
              <li>Ишемическая болезнь сердца</li>
              <li>Патология периферических сосудов</li>
              <li>Патология аорты</li>
              <li>Иные патологии</li>
            </ul>
            <h3>При себе пациенту необходимо иметь:</h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
              <li>Имеющиеся медицинские документы</li>
            </ul>
            <h3>Стоимость приёма — 2000 рублей.</h3>
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
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
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
