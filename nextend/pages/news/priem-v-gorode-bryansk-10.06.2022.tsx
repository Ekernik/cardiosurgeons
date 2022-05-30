import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import Map from '@/components/Map';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Брянск - 10 июня 2022 - 2 врача - Каменских и Шеремет
const Announcement: NextPage = () => {
  const doctor_1 = doctors[2];
  const doctor_2 = doctors[9];
  const dateOfNews = '30 мая 2022';
  const city = 'город Брянск';
  const SEODetails = {
    title: `Кардиохирург в Брянске. Диагностика и лечение болезней сердца`,
    description: `Прием кардиохирургов из Петербурга в городе Брянск. Операции на сердце бесплатно. Лечение в больнице кардиохирургии в Санкт-Петербурге.`,
    pageLink: 'https://heartteamspb.com/news/priem-v-gorode-bryansk-10.06.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: `10 июня`, pretitle: city }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от {dateOfNews} года</h6>
        <h3>
          10 июня в Брянске ведется прием пациентов с заболеваниями органов
          сердечно-сосудистой системы и сердца.
        </h3>
        <div>
          <div style={{ display: 'flex', gap: '15%', marginBottom: '20px' }}>
            <DoctorCard doctor={doctor_1} />
            <DoctorCard doctor={doctor_2} />
          </div>
          <h3>
            Кардиохирурги из Санкт-Петербурга – Каменских Максим Сергеевич и
            Шеремет Антон Андреевич – примут пациентов, которые имеют следующие
            заболевания:
          </h3>
          <ul>
            <li>Патология аорты</li>
            <li>Ишемическая болезнь сердца</li>
            <li>Патология периферических сосудов</li>
            <li>Многоклапанные пороки сердца</li>
            <li>Патологии иного происхождения</li>
          </ul>
          <h3>На приеме пациент должен иметь:</h3>
          <ul>
            <li>паспорт</li>
            <li>СНИЛС</li>
            <li>полис ОМС</li>
            <li>
              Имеющиеся результаты осмотра кардиолога/других специалистов,
              результаты диагностических исследований
            </li>
          </ul>
          <ButtonCTA styling={local_styles.cta} text='Записаться на прием' />
        </div>
        <hr />
        <div className={local_styles.main_flex}>
          <div className={local_styles.place_info}>
            <p>
              Прием будет проводиться: <strong>10 июня 2022 г.</strong>
            </p>
            <p>
              Тел. для записи: <PhoneLink />
            </p>
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
