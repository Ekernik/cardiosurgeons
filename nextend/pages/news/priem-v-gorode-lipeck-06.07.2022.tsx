import { NextPage } from 'next';
import Map from '@/components/Map';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import local_styles from './styles.module.scss';

// Липецк - 06 июля 2022 - Шипова Надежда Георгиевна
const Announcement: NextPage = () => {
  const addressOfVisit = 'г. Липецк, ул. С.С.Бетхеева, д. 9';
  const mapsLink = 'https://yandex.ru/maps/-/CCUF6XWEGD';
  const mapsGeometry = [52.602061, 39.510925];
  const SEODetails = {
    title: 'Кардиолог в городе Липецк. Прием кардиолога.',
    description:
      'Записывайтесь к кардиологу из Санкт-Петербурга. Прием ведем только один день, количество мест ограничено!',
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-lipeck-06.07.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{
          title: '06 июля 2022',
          pretitle: 'город Липецк',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 05 июля 2022 года</h6>
        <div className={local_styles.text_content}>
          <h3>Прием врача кардиолога в городе Липецке</h3>
          <p>
            Приглашаем на прием пациентов с заболеваниями органов
            сердечно-сосудистой системы.
          </p>
          <p>
            Только 6-го июля 2022 года в Северо-Западном Центре доказательной
            медицины принимает врач кардиолог Шипова Надежда Георгиевна,
            специалист Центра кардиохирургии и интервенционной кардиологии (г.
            Санкт-Петербург).
          </p>
          <p>
            В нашей клинике кардиохирургии в Петербурге Вы можете сделать
            бесплатные операции на сердце по ОМС или федеральным квотам.
          </p>
          <h3>
            Запишитесь на прием, если у Вас наблюдаются следующие заболевания:
          </h3>
          <ul>
            <li>Ишемическая болезнь сердца ИБС</li>
            <li>Патология аорты</li>
            <li>Клапанные пороки сердца</li>
            <li>Патология периферических сосудов</li>
            <li>Пороки и аномалии развития сердца</li>
            <li>Кардиомиопатии</li>
            <li>Нарушения ритма сердца</li>
          </ul>
          <h3>
            Стоимость приёма — <strong>бесплатно по ОМС</strong>.
          </h3>
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
              Тел. для записи:{' '}
              <PhoneLink phoneNumber='+7&nbsp;(474)&nbsp;237&#8209;00&#8209;07' />
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
