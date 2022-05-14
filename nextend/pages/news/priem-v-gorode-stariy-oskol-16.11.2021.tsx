import { NextPage } from 'next';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import PhoneLink from '@/components/PhoneLink';
import SEO from '@/components/SEO';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Старый Оскол - 16 ноября 2021 - Сорокин
const Announcement: NextPage = () => {
  const mapPosition = [51.318761, 37.887184];
  const doctor = doctors[6];
  const SEODetails = {
    title: 'Центр кардиохирургии и интервенционной кардиологии',
    description:
      'Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stariy-oskol-16.11.2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '16 ноября', pretitle: 'город Старый Оскол' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 21 октября 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              16 ноября 2021 г. в&nbsp;МДЦ «Медтест» проводится отбор
              на&nbsp;бесплатное <strong>хирургическое лечение</strong>{' '}
              в&nbsp;Санкт-Петербурге пациентов с&nbsp;заболеваниями:
            </h3>
            <ul>
              <li>ИБС</li>
              <li>Аневризма аорты</li>
              <li>Окклюзии и&nbsp;стенозы магистральных артерий</li>
              <li>Иная артериальная патология</li>
            </ul>
            <h3>На прием пациенты должны взять с собой:</h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
            <h3>Стоимость приёма — 2000 рублей.</h3>
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
              <strong>16&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/maps/-/CCUmI8TC~D'
                target='_blank'
                rel='noreferrer'
                className='article__link'
              >
                г.&nbsp;Старый Оскол, микрорайон Макаренко, д.&nbsp;4В
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
            </p>
            <p>
              Тел. МДЦ&nbsp;«Медтест»:{' '}
              <PhoneLink phoneNumber='+7&nbsp;(4725)&nbsp;45&#8209;25&#8209;03' />
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
