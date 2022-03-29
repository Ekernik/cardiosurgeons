import Link from '@/components/Link';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import img_doctor from '@/images/doctors/doctor_Balahonov.webp';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

// Арзамас - 06 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Арзамас, ул. Матросова, д. 13';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const mapsLink = 'https://yandex.ru/maps/-/CCUyUOSs0B';
  const mapsGeometry = [55.401693, 43.843023];

  const SEODetails = {
    title: 'Сердечно-сосудистый хирург в городе Арзамасе.',
    description:
      'Прием петербургского кардиохирурга в городе Арзамас. Набираем пациентов на бесплатные операции на сердце.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-arzamas-06.04.2022',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <Greetings
          header={{
            title: '06 апреля 2022',
            pretitle: 'город Арзамас',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              Прием сердечно-сосудистого хирурга в городе Арзамасе
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  6 апреля в МЦ «ЛОР+» принимает сердечно-сосудистый хирург из
                  Санкт-Петербурга Балахонов Василий Васильевич.
                </p>
                <p className='article__p'>
                  По итогам приема будут отобраны пациенты на бесплатные
                  операции в Санкт-Петербурге.
                </p>
                <p className='article__p'>
                  Бесплатное лечение в нашем Центре кардиохирургии и
                  интервенционной кардиологии проводится по ОМС и федеральным
                  квотам.
                </p>
                <p className='article__p'>
                  6-го апреля приглашаем на прием всех пациентов со следующими
                  заболеваниями:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Клапанные пороки сердца</li>
                  <li className='article__li'>— Ишемическая болезнь сердца</li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                  <li className='article__li'>— Патология аорты</li>
                  <li className='article__li'>— Иные патологии</li>
                </ul>
                <p className='article__p'>
                  При себе пациенту необходимо иметь:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Паспорт</li>
                  <li className='article__li'>— Полис ОМС</li>
                  <li className='article__li'>— СНИЛС</li>
                  <li className='article__li'>
                    — Имеющиеся медицинские документы
                  </li>
                </ul>
                <p className='article__p'>
                  Стоимость приёма <strong>2000 рублей</strong>.
                </p>
                <ButtonCTA
                  styling='greetings__cta news__cta'
                  text='Записаться на прием'
                />
              </div>
              <div className='news__help-flex'>
                <p
                  className='article__p'
                  style={{ textAlign: 'center', flex: 'none' }}
                >
                  прием ведет: <br />
                  <Link href={doctorLink} text={doctorFullName} />
                </p>
                <DoctorCard
                  className='news__doctor-card'
                  imgSrc={img_doctor}
                  imgAlt={`Доктор ${doctorFullName}`}
                  title={doctorFullName}
                  subtitle={doctorTitles}
                  link={doctorLink}
                  showMore={true}
                />
              </div>
            </div>
            <hr />
            <div className='news__main-flex'>
              <div className='news__help-flex'>
                <p className='article__p'>
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
                <Map position={mapsGeometry} />
                <PhoneLink
                  phoneNumber='+7 (999) 238-01-36'
                  text='тел. для записи: '
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
};

export default Announcement;
