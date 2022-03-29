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

// Сортавала - 29 марта 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Сортавала, ул. Бондарева, д. 49';
  const doctorFullName = 'Балахонов Василий Васильевич';
  const doctorLink = '/team/doctor_balahonov';
  const doctorTitles = [
    'Cердечно-сосудистый хирург высшей категории,',
    'кандидат медицинских наук',
  ];
  const price = '1100 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUBR6r~8C';
  const mapsGeometry = [61.721579, 30.699943];
  const SEODetails = {
    title: 'Прием кардиохирурга в городе Сортавале.',
    description:
      'Записывайтесь на прием к кардиохирургу из Санкт-Петербурга и получите бесплатное лечение в больнице кардиохирургии.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-sortavala-29.03.2022',
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
            title: '29 марта 2022',
            pretitle: 'город Сортавала',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 28 марта 2022 года</h6>
            <h2 className='news__title'>
              Приём пациентов с заболеваниями органов сердечно-сосудистой
              системы в городе Сортавале.
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  29 марта 2022 года – прием в городе Сортавале кардиохирурга из
                  Санкт-Петербурга.{' '}
                </p>
                <p className='article__p'>Приглашаем на прием пациентов с:</p>
                <ul className='article__ul'>
                  <li className='article__li'>— Нарушениями ритма сердца</li>
                  <li className='article__li'>— Ишемической болезнью сердца</li>
                  <li className='article__li'>— Патологией аорты</li>
                  <li className='article__li'>— Клапанными пороками сердца</li>
                  <li className='article__li'>
                    — Патологией аорты и периферических сосудов
                  </li>
                  <li className='article__li'>
                    — Другими сердечно-сосудистыми заболеваниями
                  </li>
                </ul>
                <p className='article__p'>
                  После осмотра специалистом пациенты могут быть направлены на
                  бесплатное лечение в наш Центр кардиохирургии. Бесплатные
                  операции проводятся по федеральным квотам и ОМС.
                </p>
                <p className='article__p'>
                  С собой на приеме необходимо иметь ксерокопии документов:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — паспорт (1-я страница и прописка)
                  </li>
                  <li className='article__li'>— полис ОМС (с двух сторон)</li>
                  <li className='article__li'>— СНИЛС</li>
                  <li className='article__li'>
                    — Медицинские документы: результаты обследования кардиологом
                    и другими специалистами, ЭКГ (описание),{' '}
                    <Link
                      href='/diagnostics/coronarographia'
                      text='коронарография'
                    />{' '}
                    (если имеется), эхокардиография.
                  </li>
                </ul>
                <p className='article__p'>
                  Для пациентов с сосудистой патологией рекомендуем взять
                  результаты дуплексного сканирования бахиоцефальных артерий,
                  аорты, артерий нижних конечностей.
                </p>
                <p className='article__p'>
                  Для пациентов с нарушениями ритма сердца - результаты
                  суточного мониторинга ЭКГ по Холтеру.
                </p>
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
