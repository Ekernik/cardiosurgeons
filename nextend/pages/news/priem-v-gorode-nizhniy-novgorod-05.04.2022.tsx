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

// Нижний Новгород - 05 апреля 2022 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const addressOfVisit = 'г. Нижний Новгород, ул. Краснодонцев д. 19, к. 1';
  const price = '2500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOv7WD';
  const mapsGeometry = [56.255322, 43.852258];
  const SEODetails = {
    title: 'Прием петербургского кардиохирурга в Нижнем Новгороде.',
    description:
      '5 апреля в Нижнем Новгороде принимает сердечно-сосудистый хирург из Петербурга. Записывайтесь на прием.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-nizhniy-novgorod-05.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{
          title: '05 апреля 2022',
          pretitle: 'город Нижний Новгород',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              5 апреля в клинике «Александрия» (г. Нижний Новгород)
              осуществляется прием пациентов с заболеваниями сердца и органов
              сердечно-сосудистой системы
            </h3>
            <p>
              На прием к кардиохирургу из Санкт-Петербурга приглашаются
              пациенты, у которых наблюдаются следующие заболевания:{' '}
            </p>
            <ul>
              <li> Патология аорты</li>
              <li> Патология периферических сосудов</li>
              <li>
                <Link
                  href='/diseases/poroki-serdca'
                  text='Многоклапанные пороки сердца'
                />
              </li>
              <li> Ишемическая болезнь сердца ИБС</li>
              <li> Другие патологии</li>
            </ul>
            <h3>На приеме от пациента потребуются:</h3>
            <ul>
              <li>
                Имеющиеся медицинские документы: результаты диагностических
                исследований, результаты осмотра кардиолога/других специалистов
              </li>
              <li>Паспорт, СНИЛС, полис ОМС</li>
            </ul>
            <h3>Стоимость приёма {price}.</h3>
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
