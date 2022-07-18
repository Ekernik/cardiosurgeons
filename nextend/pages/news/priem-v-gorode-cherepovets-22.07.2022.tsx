import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import Map from '@/components/Map';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Череповец - 22 июля 2022 - 2 врача - Зубарев и Каменских
const Announcement: NextPage = () => {
  const doctor_1 = doctors[8];
  const doctor_2 = doctors[2];
  const addressOfVisit = 'г. Череповец, ул. Социалистическая, д. 50';
  const dateOfNews = '5 июля 2022';
  const city = 'город Череповец';
  const price = '2000 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUFrCcEkA';
  const mapPosition = [59.124192, 37.933501];
  const SEODetails = {
    title: `Прием кардиохирургов в городе Череповец. Диагностика болезней сердца`,
    description: `Лечение болезней сердца - Череповец. Прием кардиохирургов из Петербурга`,
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-cherepovets-22.07.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `22 июля`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от {dateOfNews} года</h6>
        <h3>
          22 июля – {city} – приглашаем пациентов на&nbsp;прием
          к&nbsp;специалистам из Санкт-Петербурга
        </h3>
        <div>
          <div style={{ display: 'flex', gap: '15%', marginBottom: '20px' }}>
            <DoctorCard doctor={doctor_1} />
            <DoctorCard doctor={doctor_2} />
          </div>
          <section>
            <p>
              Администрация «Клиники высоких медицинских технологий
              им.&nbsp;Н.И.Пирогова» в рамках регулярно осуществляемой
              реализации Программы оказания высокотехнологичной медицинской
              помощи (ВМП) жителям России организует бесплатную консультацию
              пациентов специалистами нашего Центра с целью отбора на бесплатное
              оперативное лечение в Санкт-Петербурге.
            </p>
            <section className='flex'>
              <div style={{ flex: 1.7 }}>
                <h3>
                  Для отбора на&nbsp;дальнейшее оказание бесплатной
                  высокотехнологичной медицинской помощи по&nbsp;федеральным
                  квотам и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются
                  пациенты со&nbsp;следующими заболеваниями органов
                  сердечно-сосудистой системы:
                </h3>
                <ul>
                  <li>Клапанные пороки сердца</li>
                  <li>Ишемическая болезнь сердца</li>
                  <li>Патология периферических сосудов</li>
                  <li>Патология аорты</li>
                </ul>
                <h3>Стоимость приёма — {price}.</h3>
              </div>

              <div style={{ flex: 1 }}>
                <h3>При себе пациенту необходимо иметь:</h3>
                <ul>
                  <li>паспорт</li>
                  <li>полис ОМС</li>
                  <li>СНИЛС</li>
                  <li>имеющиеся медицинские документы.</li>
                </ul>
                <ButtonCTA
                  styling={local_styles.cta}
                  text='Записаться на прием'
                />
              </div>
            </section>
          </section>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться: <strong>22 июля 2022 г.</strong>
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
              - Клиника «Медэксперт»
            </p>
            <p>
              Тел. для записи: <PhoneLink />
            </p>
            <p>
              Тел. клиники «Медэксперт»:{' '}
              <PhoneLink phoneNumber='+7 (8202) 57-77-77' />
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
