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
 
// Нижний Новгород - 05 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Нижний Новгород, ул. Краснодонцев д. 19, к. 1';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
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
      <div className='App'>
        <div id='curtain' />
        <Header />
        <Greetings
          header={{
            title: '05 апреля 2022',
            pretitle: 'город Нижний Новгород',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              5 апреля в клинике «Александрия» (г. Нижний Новгород)
              осуществляется прием пациентов с заболеваниями сердца и органов
              сердечно-сосудистой системы
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  На прием к кардиохирургу из Санкт-Петербурга приглашаются
                  пациенты, у которых наблюдаются следующие заболевания:{' '}
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Патология аорты</li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                  <li className='article__li'>
                    —{' '}
                    <Link
                      href='/diseases/poroki-serdca'
                      text='Многоклапанные пороки сердца'
                    />
                  </li>
                  <li className='article__li'>
                    — Ишемическая болезнь сердца ИБС
                  </li>
                  <li className='article__li'>— Другие патологии</li>
                </ul>
                <p className='article__p'>На приеме от пациента потребуются:</p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — Имеющиеся медицинские документы: результаты
                    диагностических исследований, результаты осмотра
                    кардиолога/других специалистов
                  </li>
                  <li className='article__li'>— Паспорт, СНИЛС, полис ОМС</li>
                </ul>
                <p className='article__p'>
                  Стоимость приёма <strong>{price}</strong>.
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
