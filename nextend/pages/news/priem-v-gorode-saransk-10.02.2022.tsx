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

// Арзамас - 22 декабря 2021 - Балахонов
const Announcement: NextPage = () => {
  const doctor = doctors[3];
  const dayOfVisit = '10';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Cаранск, ул. Васенко, д. 11';
  const dateOfNews = '03 февраля 2022';
  const city = 'город Саранск';
  const price = '1500 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5mMD90D';
  const mapPosition = [54.195171, 45.169143];
  const SEODetails = {
    title: 'Кардиохирург Саранск. Кардиолог Саранск',
    description:
      'Прием петербурского кардиохирурга в городе Саранск. Консультации и диагностика сердечно-сосудистых заболеваний.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-saransk-10.02.2022',
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
              {dayOfVisit} {monthOfVisit} {yearOfVisit} – приглашаем на прием
              к&nbsp;сердечно-сосудистому хирургу в Медицинском Центре
              &#34;КИМ&#34;.
            </h3>
            <p>
              {dayOfVisit} {monthOfVisit} в&nbsp;МЦ «КИМ» будет производить
              прием и&nbsp;консультацию специалист Центра кардиохирургии
              и&nbsp;кардиологии ВМТ им.&nbsp;Н.И.Пирогова, сердечно-сосудистый
              хирург, кандидат медицинских наук Балахонов Василий Васильевич.
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
              </a>
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(8342)&nbsp;222&#8209;700'
                text='тел. МЦ &#34;КИМ&#34;: '
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
