import Link from '@/components/Link';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import img_doctor from '@/images/doctors/doctor_Kappushev.webp';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

// Ставрополь - 26 апреля 2022
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Ставрополь, проспект Кулакова, д. 12 «B»';
  const doctorFullName = 'Капушев Руслан Юсуфович';
  const doctorLink = '/team/doctor_kappushev';
  const doctorTitles = [
    'Cердечно-сосудистый хирург,',
    'интервенционный радиолог',
  ];
  const mapsLink = 'https://yandex.ru/maps/-/CCUymHc1cB';
  const mapsGeometry = [45.054181, 41.915957];

  const SEODetails = {
    title: 'Сердечно-сосудистый хирург – Ставрополь.',
    description:
      '26 апреля – прием сердечно-сосудистого хирурга из Санкт-Петербургского Центра кардиохирургии в городе Ставрополе.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stavropol-26.04.2022',
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
            title: '26 апреля 2022',
            pretitle: 'город Ставрополь',
          }}
          buttonText='Записаться на консультацию'
        />
        <section className='section__news-article'>
          <div className='container container__news-article'>
            <h6 className='news__date'>Новость от 29 марта 2022 года</h6>
            <h2 className='news__title'>
              26 апреля – прием сердечно-сосудистого хирурга из Санкт-Петербурга
              в городе Ставрополе
            </h2>
            <div className='flex'>
              <div style={{ flex: 1 }}>
                <p className='article__p'>
                  Приглашаем пациентов с сердечно-сосудистыми заболеваниям и
                  болезнями сердца на прием к сердечно-сосудистому хирургу 1-й
                  категории из Санкт-Петербурга – Каппушеву Руслану Юсуфовичу.
                </p>
                <p className='article__p'>
                  Записывайтесь на консультацию и осмотр нашего кардиохирурга,
                  если у вас наблюдаются:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— Нарушения ритма сердца</li>
                  <li className='article__li'>
                    —{' '}
                    <Link
                      href='/diseases/ishemicheskaya-bolezn-serdca'
                      text='Ишемическая болезнь сердца'
                    />
                  </li>
                  <li className='article__li'>— Патология аорты</li>
                  <li className='article__li'>
                    —{' '}
                    <Link
                      href='/diseases/poroki-serdca'
                      text='Клапанные пороки сердца'
                    />
                  </li>
                  <li className='article__li'>
                    — Патология периферических сосудов
                  </li>
                </ul>
                <p className='article__p'>
                  После получения консультации нашего специалиста Вы можете быть
                  направлены на 
                  <strong>бесплатное лечение в Санкт-Петербурге</strong>.
                </p>
                <p className='article__p'>
                  Документы, необходимые на приеме специалиста:
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — Паспорт (1-я страница и прописка)
                  </li>
                  <li className='article__li'>— Полис ОМС (с двух сторон)</li>
                  <li className='article__li'>— СНИЛС</li>
                </ul>
                <p className='article__p'>А также медицинские документы:</p>
                <p className='article__p'>
                  <strong>
                    Обследования для кардиохирургических больных (клапанные
                    пороки, ИБС, патология аорты)
                  </strong>
                  :
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>— ЭКГ (описание)</li>
                  <li className='article__li'>
                    — Результаты осмотра кардиолога: заключения и выписки
                  </li>
                  <li className='article__li'>— Эхокардиография</li>
                  <li className='article__li'>
                    —{' '}
                    <Link
                      href='/diagnostics/coronarographia'
                      text='Коронарография '
                    />{' '}
                    (по возможности)
                  </li>
                  <li className='article__li'>
                    — При наличии сопутствующих заболеваний - консультации
                    врачей-специалистов (по возможности)
                  </li>
                </ul>
                <p className='article__p'>
                  <strong>
                    При сосудистой патологии, дополнительно к вышесказанному:
                  </strong>
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — Дуплексное сканирование брахиоцефальных артерий, аорты,
                    артерий нижних конечностей
                  </li>
                </ul>
                <p className='article__p'>
                  <strong>
                    При нарушении ритма сердца, дополнительно к вышенаписанному:
                  </strong>
                </p>
                <ul className='article__ul'>
                  <li className='article__li'>
                    — Суточный мониторинг ЭКГ по Холтеру
                  </li>
                </ul>
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
