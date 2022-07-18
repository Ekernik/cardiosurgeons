import Map from '@/components/Map';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import EmailLink from '@/components/EmailLink';

const OurContacts: NextPage = () => {
  const SEODetails = {
    title: 'Контакты Центра кардиохирургии и интервенционной кардиологии.',
    description:
      'Телефон Центра кардиохирургии. Адрес кардиохирургической клиники, как добраться к нам.',
    pageLink: 'https://heartteamspb.com/contacts',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <section className='container mt'>
        <h1>Контакты</h1>
        <h3>Центр кардиохирургии и интервенционной кардиологии</h3>
        <p>
          Приглашаем пациентов на диагностику и лечение органов
          сердечно-сосудистой системы.
        </p>
        <p>Проводим операции по федеральным квотам и ОМС.</p>
        <p>
          Получите консультацию наших кардиологов и кардиохирургов уже сегодня!
        </p>
        <div className='our-contacts__main-flex'>
          <div className='our-contacts__address-flex'>
            <Map position={[59.915765, 30.28255]} />
            <div className='our-contacts__address-bar-flex'>
              <h3>Адрес</h3>
              <p>
                <a
                  href='https://yandex.ru/maps/-/CCUiJDQodD'
                  target='_blank'
                  className='article__link'
                  rel='noreferrer noopenner'
                >
                  190103, Санкт-Петербург, набережная реки Фонтанки, дом 154
                </a>
              </p>
            </div>
          </div>
          <div className='our-contacts__other-flex'>
            <h3 className='our-contacts__info-title'>Колл-центр</h3>
            <p>
              <PhoneLink /> (9:00-21:00)
            </p>
            <h3>Электронная почта</h3>
            <p>
              <EmailLink />
            </p>
            <p>
              <EmailLink email='gosmed@inbox.ru' />
            </p>
          </div>
        </div>
        <h3>Как добраться</h3>
        <p className='our-contacts__route-title'>
          <strong>от ст. метро Садовая:</strong>
        </p>
        <div className='our-contacts__routes'>
          <p>маршрутное такси 7, 212,</p>
          <p>трамвай 3,</p>
          <p>автобусы 49, 181 до остановки наб. реки Фонтанки (ул. Садовая).</p>
        </div>
        <p className='our-contacts__route-title'>
          <strong>от ст. метро Василеостровская:</strong>
        </p>
        <div className='our-contacts__routes'>
          <p>маршрутное такси 154 до Старо-Калинкиного моста,</p>
          <p>автобус 6 до остановки площадь Репина.</p>
        </div>
        <p className='our-contacts__route-title'>
          <strong>от Московского вокзала:</strong>
        </p>
        <div className='our-contacts__routes'>
          <p>автобус 181 до остановки площадь Репина.</p>
        </div>
        <p className='our-contacts__route-title'>
          <strong>от Витебского вокзала:</strong>
        </p>
        <div className='our-contacts__routes'>
          <p>
            трамвай 16 до остановки Рижский проспект (Старо-Петергофский
            проспект)
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurContacts;
