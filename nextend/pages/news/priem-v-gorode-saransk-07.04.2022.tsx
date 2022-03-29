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

// Саранск - 07 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Cаранск, ул. Васенко, д. 11';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const mapsLink = 'https://yandex.ru/maps/-/CCU5mMD90D';
  const mapsGeometry = [54.195171, 45.169143];

  const SEODetails = {
    title: 'Прием кардиохирурга в городе Саранске.',
    description:
      '7 апреля в МЦ «КИМ» проводится прием сердечно-сосудистого хирурга Балахонова В.В. Приглашаем на прием.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-saransk-07.04.2022',
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
            title: '07 апреля 2022',
            pretitle: 'город Саранск',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              Прием кардиохирурга в городе Саранске
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  7 апреля 2022 года февраля в медицинском центре «КИМ» проводит
                  прием сердечно-сосудистый хирург Центра кардиохирургии
                  и кардиологии ВМТ им. Н.И.Пирогова Балахонов Василий
                  Васильевич.
                </p>
                <p className='article__p'>
                  Приглашаем на прием всех пациентов, у которых ранее были
                  выявлены следующие заболевания:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Ишемическая болезнь сердца</li>
                  <li className='article__li'>— Клапанные пороки сердца</li>
                  <li className='article__li'>— Патология аорты</li>
                  <li className='article__li'>
                    — Патология сосудов (периферических)
                  </li>
                  <li className='article__li'>— Другие патологии</li>
                </ul>
                <p className='article__p'>
                  На прием пациенту необходимо взять с собой паспорт, полис ОМС,
                  СНИЛС и имеющиеся на руках медицинские документы.
                </p>
                <p className='article__p'>
                  По итогам приема пациенты будут приглашены на бесплатное
                  лечение сердца и органов сердечно-сосудистой системы в
                  высокотехнологичной клинике в Санкт-Петербурге.
                </p>
                <p className='article__p'>
                  Стоимость приёма <strong>1500 рублей</strong>.
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
