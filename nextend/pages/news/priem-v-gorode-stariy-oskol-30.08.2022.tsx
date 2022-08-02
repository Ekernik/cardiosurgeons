import { NextPage } from 'next';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Старый Оскол - 30 августа 2022 - Сорокин
const Announcement: NextPage = () => {
  const doctor = doctors[6];
  const mapPosition = [51.318761, 37.887184];
  const SEODetails = {
    title: 'Прием сердечно-сосудистого хирурга в Старом Осколе 30 августа',
    description:
      '30 августа 2022 года в городе Старом Осколе сердечно-сосудистый хирург Сорокин А.А. проводит отбор на бесплатное лечение в Санкт-Петербурге.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stariy-oskol-30.08.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '30 августа', pretitle: 'город Старый Оскол' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 02 августа 2022 года</h6>
        <section className='flex'>
          <div className={local_styles.text_content}>
            <h1>Прием сердечно-сосудистого хирурга в Старом Осколе</h1>
            <h3>
              <time dateTime='2022-08-30'>30 августа 2022 г.</time> в&nbsp;МДЦ
              «Медтест» проводится отбор на&nbsp;бесплатное{' '}
              <strong>хирургическое лечение</strong> в&nbsp;Санкт-Петербурге
              пациентов с&nbsp;заболеваниями:
            </h3>
            <ul>
              <li>ИБС</li>
              <li>Аневризма аорты</li>
              <li>Окклюзии и&nbsp;стенозы магистральных артерий</li>
              <li>Иная артериальная патология</li>
            </ul>
            <h3>На прием пациенты должны взять с собой:</h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы</li>
            </ul>
            <h3>
              Стоимость консультации — <strong>2000 рублей</strong>.
            </h3>
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
        </section>

        <hr />
        <div className={local_styles.place_info}>
          <p>
            Прием будет проводиться:{' '}
            <strong>
              <time dateTime='2022-08-30'>
                30&#160;августа&#160;2022&#160;г
              </time>
            </strong>
          </p>
          <p>
            По адресу:{' '}
            <a
              href='https://yandex.ru/maps/-/CCUmI8TC~D'
              target='_blank'
              rel='noreferrer'
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
        <hr />
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
