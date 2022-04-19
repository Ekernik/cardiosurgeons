import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import Map from '@/components/Map';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Шахты - 25 февраля 2022 - 2 врача - Шеремет и Ким
const Announcement: NextPage = () => {
  const doctor_1 = doctors[9];
  const doctor_2 = doctors[4];
  const dayOfVisit = '25';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Шахты, ул. Шишкина, д. 162';
  const dateOfNews = '17 февраля 2022';
  const city = 'город  Шахты';
  const price = 'бесплатно';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RGFx9B';
  const mapPosition = [47.725381, 40.225984];
  const SEODetails = {
    title: `Прием кардиохирургов - ${city}`,
    description: `${city} - ${dayOfVisit} ${monthOfVisit} ${yearOfVisit} - Принимают кардиохирурги из Петербурга - ${doctor_1.name} и ${doctor_2.name}. Записывайтесь на прием.`,
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-shahti-25.02.2022',
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
        <h3>
          {dayOfVisit} {monthOfVisit} {yearOfVisit} – {city} – приглашаем
          пациентов на&nbsp;прием к&nbsp;специалистам из Санкт-Петербурга
        </h3>
        <div className='flex'>
          <div style={{ display: 'flex', gap: '15%', marginBottom: '20px' }}>
            <DoctorCard doctor={doctor_1} />
            <DoctorCard doctor={doctor_2} />
          </div>
          <div>
            <p>
              Администрация «Клиники высоких медицинских технологий им.
              Н.И.Пирогова» в рамках регулярно осуществляемой реализации
              Программы оказания высокотехнологичной медицинской помощи (ВМП)
              жителям России организует бесплатную консультацию пациентов
              специалистами нашего Центра с целью отбора на бесплатное
              оперативное лечение в Санкт-Петербурге.
            </p>
            <p>
              Для отбора на&nbsp;дальнейшее оказание бесплатной
              высокотехнологичной медицинской помощи по&nbsp;федеральным квотам
              и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются пациенты
              со&nbsp;следующими заболеваниями органов сердечно-сосудистой
              системы:
            </p>
            <ul>
              <li>Клапанные пороки сердца</li>
              <li>Ишемическая болезнь сердца</li>
              <li>Патология периферических сосудов</li>
              <li>Патология аорты</li>
            </ul>
            <h3>При себе пациенту необходимо иметь:</h3>
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
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться:{' '}
              <strong>
                {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г.
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
              </a>{' '}
              - Медицинский центр «Кардиоплюс»
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
            </p>
            <p>
              <PhoneLink
                text='тел. медицинского центра «Кардиоплюс»: '
                phoneNumber='+7&nbsp;(960)&nbsp;450&#8209;94&#8209;37'
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
