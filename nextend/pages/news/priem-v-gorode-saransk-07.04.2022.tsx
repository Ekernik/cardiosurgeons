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

// Саранск - 07 апреля 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Cаранск, ул. Васенко, д. 11';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5mMD90D';
  const mapPosition = [54.195171, 45.169143];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Саранске.',
    description:
      '7 апреля в МЦ «КИМ» проводится прием сердечно-сосудистого хирурга Балахонова В.В. Приглашаем на прием.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-saransk-07.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{
          title: '07 апреля 2022',
          pretitle: 'город Саранск',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>Прием кардиохирурга в городе Саранске</h3>
            <p>
              7 апреля 2022 года февраля в медицинском центре «КИМ» проводит
              прием сердечно-сосудистый хирург Центра кардиохирургии
              и кардиологии ВМТ им. Н.И.Пирогова Балахонов Василий Васильевич.
            </p>
            <h3>
              Приглашаем на прием всех пациентов, у которых ранее были выявлены
              следующие заболевания:
            </h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Патология сосудов (периферических)</li>
              <li>Другие патологии</li>
            </ul>
            <h3>
              На прием пациенту необходимо взять с собой паспорт, полис ОМС,
              СНИЛС и имеющиеся на руках медицинские документы.
            </h3>
            <p>
              По итогам приема пациенты будут приглашены на бесплатное лечение
              сердца и органов сердечно-сосудистой системы в высокотехнологичной
              клинике в Санкт-Петербурге.
            </p>
            <h3>Стоимость приёма — 1500 рублей.</h3>
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
