import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Липецк - 25 мая 2022 - Шипова Надежда Георгиевна
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Липецк, ул. С.С.Бетхеева, д. 9';
  const mapsLink = 'https://yandex.ru/maps/-/CCUF6XWEGD';
  const mapsGeometry = [52.602061, 39.510925];
  const SEODetails = {
    title: 'Кардиолог Липецк. Кардиохирург Липецк.',
    description:
      'Записывайтесь на прием к кардиологу из Санкт-Петербурга с дальнейшим бесплатным лечением в клинике Петербурга.',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-lipeck-25.05.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{
          title: '25 мая 2022',
          pretitle: 'город Липецк',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>Новость от 11 мая 2022 года</h6>
        <div className={local_styles.text_content}>
          <h3>Прием врача кардиолога в городе Липецке</h3>
          <p>
            Приглашаем на прием в Северо-Западный Центре доказательной медицины
            пациентов с заболеваниями органов сердечно-сосудистой системы.
          </p>
          <p>
            принимает врач кардиолог Центра кардиохирургии и интервенционной
            кардиологии — Шипова Надежда Георгиевна.
          </p>
          <p>
            По итогам приема будут отобраны пациенты на дальнейшее оказание
            бесплатной высокотехнологичной медицинской помощи по федеральным
            квотам и ОМС в Санкт-Петербурге.
          </p>
          <section className='flex'>
            <div>
              <h3>Приглашаются пациенты со следующими заболеваниями:</h3>
              <ul>
                <li>Ишемическая болезнь сердца</li>
                <li>Клапанные пороки сердца</li>
                <li>Патология аорты</li>
                <li>Патология периферических сосудов</li>
                <li>Кардиомиопатии</li>
                <li>Пороки и аномалии развития сердца</li>
                <li>Нарушения ритма сердца</li>
              </ul>
              <h3>
                Стоимость приёма — <strong>бесплатно по ОМС</strong>.
              </h3>
            </div>
            <div>
              <h3>При себе пациенту необходимо иметь:</h3>
              <ul>
                <li>Паспорт</li>
                <li>Полис ОМС</li>
                <li>СНИЛС</li>
                <li>Имеющиеся медицинские документы</li>
              </ul>
              <ButtonCTA
                styling={`greetings__cta ${local_styles.cta}`}
                text='Записаться на прием'
              />
            </div>
          </section>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
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
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(474)&nbsp;237&#8209;00&#8209;07'
                text='Тел. для записи: '
              />
            </p>
            <Map position={mapsGeometry} />
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
