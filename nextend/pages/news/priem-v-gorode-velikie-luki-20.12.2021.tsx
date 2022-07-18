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

// Великие Луки - 20 декабря 2021 - Ким
const Announcement: NextPage = () => {
  const doctor = doctors[4];
  const mapPosition = [56.349495, 30.511027];
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург в городе Великие Луки',
    description:
      'Записывайтесь на прием к специалисту из Санкт-Петербурга - кардиохирургу, кандидату медицинских наук.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-velikie-luki-20.12.2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '20 декабря', pretitle: 'город Великие Луки' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 15 декабря 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              20 декабря 2021&nbsp;г. в&nbsp;МЦ «Медтайм» (г.&nbsp;Великие Луки)
              состоится прием и&nbsp;отбор пациентов на&nbsp;бесплатное
              хирургическое лечение в&nbsp;Санкт-Петербурге.
            </h3>
            <h3>Приглашаем на прием пациентов со следующими заболеваниями:</h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
            </ul>
            <h3>
              Для того, чтобы попасть на прием в&nbsp;МЦ&nbsp;«Медтайм» вам
              необходимы следующие документы:
            </h3>
            <ul>
              <li>паспорт</li>
              <li>СНИЛС</li>
              <li>полис ОМС</li>
              <li>имеющиеся медицинские документы.</li>
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
              Прием будет проводиться:{' '}
              <strong>20&#160;декабря&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/maps/-/CCUyUKAL-D'
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                г.&nbsp;Великие Луки, ул.&nbsp;Лизы Чайкиной, д.&nbsp;23
              </a>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
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
