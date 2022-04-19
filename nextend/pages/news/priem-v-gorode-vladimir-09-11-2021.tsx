import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import global_styles from '@/styles/article.module.scss';
import local_styles from './styles.module.scss';

// Владимир - 09 ноября 2021 - Пягай
const Announcement: NextPage = () => {
  const doctor = doctors[10];
  const mapPosition = [56.160802, 40.475113];
  const SEODetails = {
    title: 'Прием сердечно-сосудистого хирурга в городе Владимире',
    description:
      'Приглашаем пациентов с заболеваниями органов сердечно-сосудистой системы для отбора на дальнейшее оказание бесплатной оперативной помощи в г. Санкт-Петербурге.',
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-vladimir-09-11-2021',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header={{ title: '9 ноября', pretitle: 'город Владимир' }}
        buttonText='Записаться на консультацию'
      />
      <article className={`container ${global_styles.article}`}>
        <h6 className={local_styles.date}>новость от 06 октября 2021 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              Приглашаем пациентов с заболеваниями органов сердечно-сосудистой
              системы:
            </h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
              <li>Нарушения ритма сердца</li>
            </ul>
            <p>
              На консультацию специалиста Центра кардиохирургии и
              интервенционной кардиологии Клиники высоких медицинских технологий
              им. Н.И. Пирогова Санкт-Петербургского государственного
              Университета для отбора на дальнейшее оказание{' '}
              <strong>бесплатной</strong> оперативной помощи в г.
              Санкт-Петербург.
            </p>
            <h3>На консультацию пациенты должны взять с собой:</h3>
            <ul>
              <li>паспорт</li>
              <li>полис ОМС</li>
              <li>СНИЛС</li>
              <li>имеющиеся медицинские документы.</li>
            </ul>
            <h3>Стоимость приёма 1500 рублей.</h3>
            <div className='marked-container'>
              <p>
                Большинство операций в Клинике ВМТ им. Н.И. Пирогова выполняются
                бесплатно в рамках федеральных квот на высокотехнологичную
                медицинскую помощь, а также по ОМС.
              </p>
            </div>
            <ButtonCTA
              styling={`greetings__cta ${local_styles.cta}`}
              text='Записаться на конусльтацию'
            />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Консультация будет проводиться:{' '}
              <strong>9&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p>
              По адресу:{' '}
              <a
                href='https://yandex.ru/mApS/-/CCUiuPuYWA'
                target='_blank'
                className='article__link'
                rel='noreferrer noopenner'
              >
                г. Владимир, ул. Добросельская, д. 36-б, Медицинский центр
                &quot;Палитра&quot;
              </a>
            </p>
            <p>
              <PhoneLink
                phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36'
                text='Тел. для записи: '
              />
            </p>
            <Map position={mapPosition} />
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
