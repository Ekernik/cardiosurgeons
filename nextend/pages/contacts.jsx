import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function OurContacts() {
  const SEODetails = {
    title: 'Контакты Центра кардиохирургии и интервенционной кардиологии.',
    description:
      'Телефон Центра кардиохирургии. Адрес кардиохирургической клиники, как добраться к нам.',
    pageLink: 'https://heartteamspb.com/contacts',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <main className='page__our-contacts'>
          <section className='container section__our-contacts'>
            <h1 className='article__header'>Контакты</h1>
            <h2 className='our-contacts__title'>
              Центр кардиохирургии и интервенционной кардиологии
            </h2>
            <div className='our-contacts__main-flex'>
              <div className='our-contacts__address-flex'>
                <YMaps query={{ lang: 'ru_RU' }}>
                  <Map
                    width={'100%'}
                    height={'30vh'}
                    defaultState={{
                      center: [59.915765, 30.28255],
                      zoom: 16,
                      behaviors: ['default', 'scrollZoom'],
                      controls: [],
                    }}
                  >
                    <Placemark defaultGeometry={[59.915765, 30.28255]} />
                    <FullscreenControl />
                    <ZoomControl />
                  </Map>
                </YMaps>
                <div className='our-contacts__address-bar-flex'>
                  <h3 className='our-contacts__info-title'>Адрес</h3>
                  <p className='article__p'>
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
                <p className='article__p'>
                  <a href='tel:+79992380136' className='article__link'>
                    +7 (999) 238-01-36
                  </a>{' '}
                  (9:00-21:00)
                </p>
                <h3 className='our-contacts__info-title'>Электронная почта</h3>
                <p className='article__p'>
                  <a
                    href='mailto:heartteam.spb@gmail.com'
                    className='article__link'
                  >
                    heartteam.spb@gmail.com
                  </a>
                </p>
                <p className='article__p'>
                  <a href='mailto:gosmed@inbox.ru' className='article__link'>
                    gosmed@inbox.ru
                  </a>
                </p>
              </div>
            </div>
            <h3 className='our-contacts__info-title'>Как добраться</h3>
            <p className='our-contacts__route-title'>
              <strong>от ст. метро Садовая:</strong>
            </p>
            <div className='our-contacts__routes'>
              <p className='article__p'>маршрутное такси 7, 212,</p>
              <p className='article__p'>трамвай 3,</p>
              <p className='article__p'>
                автобусы 49, 181 до остановки наб. реки Фонтанки (ул. Садовая).
              </p>
            </div>
            <p className='our-contacts__route-title'>
              <strong>от ст. метро Василеостровская:</strong>
            </p>
            <div className='our-contacts__routes'>
              <p className='article__p'>
                маршрутное такси 154 до Старо-Калинкиного моста,
              </p>
              <p className='article__p'>
                автобус 6 до остановки площадь Репина.
              </p>
            </div>
            <p className='our-contacts__route-title'>
              <strong>от Московского вокзала:</strong>
            </p>
            <div className='our-contacts__routes'>
              <p className='article__p'>
                автобус 181 до остановки площадь Репина.
              </p>
            </div>
            <p className='our-contacts__route-title'>
              <strong>от Витебского вокзала:</strong>
            </p>
            <div className='our-contacts__routes'>
              <p className='article__p'>
                трамвай 16 до остановки Рижский проспект (Старо-Петергофский
                проспект)
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
