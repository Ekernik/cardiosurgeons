import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Нижний Новгород - 21 декабря 2021 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const mapPosition = [56.255322, 43.852258];
  const SEODetails = {
    title: 'Кардиохирург в Нижнем Новгороде. Сердечно-сосудистая хирургия',
    description:
      'Прием специалистов клиники кардиохирургии и кардиологии ВМТ им. Н.И. Пирогова',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-nizhniy-novgorod-21.12.2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{ title: '21 декабря', pretitle: 'город Нижний Новгород' }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 15 декабря 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              Проводим отбор пациентов на&nbsp;бесплатное хирургическое лечение
              в&nbsp;Санкт-Петербурге. Прием состоится 21 декабря 2021&nbsp;г.
              в&nbsp;клинике «Александрия» (г.&nbsp;Нижний Новгород).
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
              Чтобы попасть на прием к&nbsp;специалисту нашего Центра вам
              необходимо иметь с&nbsp;собой:
            </h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
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
              <strong>21&#160;декабря&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/maps/-/CCUyUOv7WD'
                target='_blank'
                rel='noreferrer noopener'
                className='article__link'
              >
                г.&nbsp;Нижний Новгород, ул.&nbsp;Краснодонцев д.&nbsp;19,
                к.&nbsp;1
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
