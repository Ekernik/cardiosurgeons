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

// Великие Луки - 07 июня 2022 - Ким
const Announcement: NextPage = () => {
  const doctor = doctors[4];
  const addressOfVisit = 'г. Великие Луки, ул. Лизы Чайкиной, д. 23';
  const city = 'Великие Луки';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUKAL-D';
  const mapsGeometry = [56.349495, 30.511027];
  const SEODetails = {
    title:
      'Кардиохирург Великие Луки. Осмотр кардиохирурга в городе Великие Луки',
    description:
      'Диагностируем заболевания сердца и органов сердечно-сосудистой системы у пациентов из города Великие Луки. Направляем на лечение в Санкт-Петербург.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-velikie-luki-07.06.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `07 июня`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 30 мая 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              7 июня 2022 года в городе Великие Луки принимает пациентов врач
              медицинских наук и сердечно-сосудистый хирург из Санкт-Петербурга{' '}
              <Link href='/team/doctor_kim' text='Ким Глеб Ирламович' />.
            </h3>
            <p>
              Прием пациентов будет проводиться в медицинском центре «Медтайм».
              После приема врач выпишет направление на БЕСПЛАТНОЕ лечение в
              Санкт-Петербурге.
            </p>
            <h3>
              Важно! На прием к специалисту принимаются пациенты с
              заболеваниями:
            </h3>
            <ul>
              <li>Аневризмы и расслоение аорты</li>
              <li>Ишемическая болезнь сердца (ИБС)</li>
              <li>Клапанные пороки сердца</li>
              <li>Другие патологии</li>
            </ul>
            <h3>Для приема пациенту требуется иметь при себе:</h3>
            <ul>
              <li>Заключения кардиолога или других специалистов</li>
              <li>Результаты диагностических исследований</li>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>СНИЛС</li>
            </ul>
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
