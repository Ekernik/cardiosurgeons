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

// Нижний Новгород - 08 февраля 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const dayOfVisit = '08';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Нижний Новгород, ул. Краснодонцев д. 19, к. 1';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Нижний Новгород';
  const price = '2500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOv7WD';
  const mapsGeometry = [56.255322, 43.852258];
  const SEODetails = {
    title: 'Кардиохирург Нижний Новгород. Записаться к кардиохирургу на прием.',
    description:
      'Прием кардиохирурга в городе Нижний Новгород. Лечение бесплатно в клинике кардиохирургии Петербурга. Записывайтесь!',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-nizhniy-novgorod-08.02.2022',
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
              Проводим отбор пациентов на&nbsp;бесплатное хирургическое лечение
              в&nbsp;Санкт-Петербурге. Прием состоится {dayOfVisit}{' '}
              {monthOfVisit} {yearOfVisit}&nbsp;г. в&nbsp;клинике «Александрия»
              (г.&nbsp;Нижний Новгород).
            </h3>
            <p>На прием приглашаются пациенты с:</p>
            <ul>
              <li>Ишемической болезнью сердца</li>
              <li>Патологией аорты</li>
              <li>Клапанными пороками сердца</li>
              <li>Патологией периферических сосудов</li>
              <li>Другими патологиями</li>
            </ul>
            <h3>
              Чтобы попасть на прием к&nbsp;специалисту нашего Центра Вам
              необходимо иметь с&nbsp;собой:
            </h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
            <h3>Стоимость приёма — {price}.</h3>
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
