import dynamic from 'next/dynamic';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import first_img_doctor from '@/public/static/images/doctors/doctor_Sheremet.jpg';
import second_img_doctor from '@/public/static/images/doctors/doctor_Kim.jpg';

const Map = dynamic(() => import('@/components/Map'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const newPhone = '+7 (999) 538-38-21';

// Шахты - 25 февраля 2022 - 2 врача
export default function Announcement() {
  const dayOfVisit = '25';
  const monthOfVisit = 'февраля';
  const yearOfVisit = '2022';
  const addressOfVisit = 'г. Шахты, ул. Шишкина, д. 162';
  const dateOfNews = '17 февраля 2022';
  const city = 'город  Шахты';
  const firstDoctorFullName = 'Шеремет Антон Андреевич';
  const firstDoctorLink = '/team/doctor_sheremet';
  const firstDoctorTitles = ['врач сердечно-сосудистый хирург', 'аритмолог'];
  const secondDoctorFullName = 'Ким Глеб Ирламович';
  const secondDoctorLink = '/team/doctor_kim';
  const secondDoctorTitles = [
    'врач сердечно-сосудистый хирург',
    'кандидат медицинских наук',
  ];
  const price = 'бесплатно';
  const mapsLink = 'https://yandex.ru/maps/-/CCU5RGFx9B';
  const mapsGeometry = [47.725381, 40.225984];
  const SEODetails = {
    title: `Прием кардиохирургов - ${city}`,
    description: `${city} - ${dayOfVisit} ${monthOfVisit} ${yearOfVisit} - Принимают кардиохирурги из Петербурга - ${firstDoctorFullName} и ${secondDoctorFullName}. Записывайтесь на прием.`,
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-shahti-25.02.2022',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <Header />
        <Greetings
          header={{ title: `${dayOfVisit} ${monthOfVisit}`, pretitle: city }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от {dateOfNews} года</h6>
            <h2 className='news__title'>
              {dayOfVisit} {monthOfVisit} {yearOfVisit} – {city} – приглашаем
              пациентов на&nbsp;прием к&nbsp;специалистам из Санкт-Петербурга
            </h2>
            <div className='flex'>
              <div className='flex justify-evenly'>
                <DoctorCard
                  className='news__doctor-card news__help-flex news__contained'
                  imgSrc={first_img_doctor}
                  imgAlt={`Доктор ${firstDoctorFullName}`}
                  title={firstDoctorFullName}
                  subtitle={firstDoctorTitles}
                  link={firstDoctorLink}
                  showMore={true}
                />
                <DoctorCard
                  className='news__doctor-card news__help-flex news__contained'
                  imgSrc={second_img_doctor}
                  imgAlt={`Доктор ${secondDoctorFullName}`}
                  title={secondDoctorFullName}
                  subtitle={secondDoctorTitles}
                  link={secondDoctorLink}
                  showMore={true}
                />
              </div>
              <div>
                <p className='article__p'>
                  Администрация «Клиники высоких медицинских технологий им.
                  Н.И.Пирогова» в рамках регулярно осуществляемой реализации
                  Программы оказания высокотехнологичной медицинской помощи
                  (ВМП) жителям России организует бесплатную консультацию
                  пациентов специалистами нашего Центра с целью отбора на
                  бесплатное оперативное лечение в Санкт-Петербурге.
                </p>
                <p className='article__p'>
                  Для отбора на&nbsp;дальнейшее оказание бесплатной
                  высокотехнологичной медицинской помощи по&nbsp;федеральным
                  квотам и&nbsp;ОМС в&nbsp;Санкт-Петербурге приглашаются
                  пациенты со&nbsp;следующими заболеваниями органов
                  сердечно-сосудистой системы:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Клапанные пороки сердца</li>
                  <li className='article__li'>— Ишемическая болезнь сердца</li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                  <li className='article__li'>— Патология аорты</li>
                </ul>
                <p className='article__p'>
                  При себе пациенту необходимо иметь:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— паспорт</li>
                  <li className='article__li'>— полис ОМС</li>
                  <li className='article__li'>— СНИЛС</li>
                  <li className='article__li'>
                    — имеющиеся медицинские документы.
                  </li>
                </ul>
                <p className='article__p'>
                  Стоимость приёма <strong>{price}</strong>.
                </p>
                <ButtonCTA
                  styling='greetings__cta news__cta'
                  text='Записаться на прием'
                />
              </div>
            </div>
            <hr />
            <div className='news__main-flex'>
              <div className='news__help-flex'>
                <p className='article__p'>
                  Прием будет проводиться:{' '}
                  <strong>
                    {dayOfVisit} {monthOfVisit} {yearOfVisit}&nbsp;г.
                  </strong>
                </p>
                <p className='article__p'>
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
                <Map position={mapsGeometry} />
                <PhoneLink
                  text='тел. для записи: '
                  phoneNumber='+7 (999) 238-01-36'
                />
                <PhoneLink
                  text='тел. медицинского центра «Кардиоплюс»: '
                  phoneNumber='+7 (960) 450-94-37'
                />
              </div>
            </div>
            <hr />
          </div>
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
