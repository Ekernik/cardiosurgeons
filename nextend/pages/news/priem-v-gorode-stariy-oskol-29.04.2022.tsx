import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import img_doctor from '@/public/static/images/doctors/doctor_Sorokin.webp';
import ButtonCTA from '@/components/ButtonCTA';
import { NextPage } from 'next';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';

// Старый Оскол - 29 апреля 2022 - Сорокин
const Announcement: NextPage = () => {
  const mapPosition = [51.318761, 37.887184];
  const SEODetails = {
    title: 'Кардиохирург Старый Оскол - приём 29 апреля',
    description:
      'Бесплатное лечение в Петербурге в больнице кардиохирургии. Записывайтесь на диагностику и осмотр.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stariy-oskol-29.04.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{ title: '29 апреля', pretitle: 'город Старый Оскол' }}
        buttonText='Записаться на консультацию'
      />
      <section className='section__news-article'>
        <div className='container container__news-article'>
          <h6 className='news__date'>Новость от 19 апреля 2022 года</h6>
          <h2 className='news__title'>
            29 апреля 2022 г. в&nbsp;МДЦ «Медтест» проводится отбор
            на&nbsp;бесплатное <strong>хирургическое лечение</strong>{' '}
            в&nbsp;Санкт-Петербурге пациентов с&nbsp;заболеваниями:
          </h2>
          <div className='flex'>
            <div style={{ flex: 1 }}>
              <ul className='article__ul'>
                <li className='article__li'>— ИБС</li>
                <li className='article__li'>— Аневризма аорты</li>
                <li className='article__li'>
                  — Окклюзии и&nbsp;стенозы магистральных артерий
                </li>
                <li className='article__li'>— Иная артериальная патология</li>
              </ul>
              <p className='article__p'>
                На прием пациенты должны взять с собой:
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
                Стоимость приёма <strong>2000 рублей</strong>.
              </p>
              <ButtonCTA
                styling='greetings__cta news__cta'
                text='Записаться на прием'
              />
              <div className='marked-container'>
                <p className='article__p'>
                  Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
                  выполняются бесплатно в&nbsp;рамках федеральных квот
                  на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
                  по&nbsp;ОМС.
                </p>
              </div>
            </div>
            <div className='news__help-flex'>
              <p
                className='article__p'
                style={{ textAlign: 'center', flex: 'none' }}
              >
                принимает специалист Центра <br />
                <Link
                  href='/team/doctor_sorokin'
                  text='Сорокин Андрей Александрович'
                />
              </p>
              <DoctorCard
                className='news__doctor-card'
                imgSrc={img_doctor}
                imgAlt={'Доктор Сорокин Андрей Александрович'}
                title={'Сорокин Андрей Александрович'}
                subtitle={[
                  'Cердечно-сосудистый хирург,',
                  'интервенционный радиолог',
                ]}
                link={'/team/doctor_sorokin'}
                showMore={true}
              />
            </div>
          </div>
          <hr />
          <div className='news__main-flex'>
            <div className='news__help-flex'>
              <p className='article__p'>
                Прием будет проводиться:{' '}
                <strong>29&#160;апреля&#160;2022&#160;г</strong>
              </p>
              <p className='article__p'>
                По адресу:{' '}
                <a
                  href='https://yandex.ru/maps/-/CCUmI8TC~D'
                  target='_blank'
                  rel='noreferrer'
                  className='article__link'
                >
                  г.&nbsp;Старый Оскол, микрорайон Макаренко, д.&nbsp;4В
                </a>
              </p>
              <Map position={mapPosition} />
              <p className='article__p'>
                <PhoneLink
                  phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                  text='тел. для записи: '
                />
                <br />
                <PhoneLink
                  phoneNumber='+7&nbsp;(4725)&nbsp;45&#8209;25&#8209;03'
                  text='тел. МДЦ&nbsp;«Медтест»: '
                />
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
