import { NextPage } from 'next';
import Link from '@/components/Link';
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

// Великие Луки - 11 апреля 2022
const Announcement: NextPage = () => {
  const doctor = doctors[4];
  const addressOfVisit = 'г. Великие Луки, ул. Лизы Чайкиной, д. 23';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUKAL-D';
  const mapPosition = [56.349495, 30.511027];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Великие Луки.',
    description:
      'Диагностика и лечение кардиохирургических заболеваний в городе Великие Луки. Бесплатное лечение по ОМС и квотам.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-velikie-luki-11.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{
          title: '11 апреля 2022',
          pretitle: 'город Великие Луки',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <section className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              11 апреля 2022 г. в городе Великие Луки принимает пациентов
              сердечно-сосудистый хирург из Санкт-Петербурга
            </h3>
            <p>
              Прием пациентов будет осуществляться в МЦ «Медтайм» с дальнейшим
              направлением пациентов на БЕСПЛАТНОЕ лечение в Санкт-Петербурге.
            </p>
            <p>
              Внимание: в апреле 2022 года прием нашего специалиста,
              сердечно-сосудистого хирурга, кандидата медицинских наук, Ким
              Глеба Ирламовича будет проводиться только 11 апреля.
              Записывайтесь!
            </p>
            <h3>При себе пациенту необходимо иметь:</h3>
            <ul>
              <li>Паспорт</li>
              <li>Полис ОМС</li>
              <li>Страховой номер индивидуального лицевого счёта, СНИЛС. </li>
              <li>медицинские документы</li>
            </ul>
            <h3>Важно: мы приглашаем на прием людей с заболеваниями:</h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
              <li>Клапанные пороки сердца</li>
            </ul>
            <p>
              По итогам обследования нашим специалистом можно будет получить
              направление на{' '}
              <Link
                href='/besplatnoe-lechenie-po-kvotam'
                text='бесплатное лечение по квотам'
              />{' '}
              и ОМС.
            </p>
            <ButtonCTA
              styling={`greetings__cta ${local_styles.cta}`}
              text='Записаться на прием'
            />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </section>
        <hr />
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
        <hr />
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
