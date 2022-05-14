import { NextPage } from 'next';
import Link from '@/components/Link';
import Map from '@/components/Map';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Ставрополь - 26 апреля 2022 - Каппушев
const Announcement: NextPage = () => {
  const doctor = doctors[7];
  const addressOfVisit = 'г. Ставрополь, проспект Кулакова, д. 12 «B»';
  const mapsLink = 'https://yandex.ru/maps/-/CCUymHc1cB';
  const mapPosition = [45.054181, 41.915957];
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
      <Header />
      <Greetings
        header={{
          title: '26 апреля 2022',
          pretitle: 'город Ставрополь',
        }}
        buttonText='Записаться на консультацию'
      />
      <div className='container'>
        <h6 className={local_styles.date}>Новость от 29 марта 2022 года</h6>
        <section className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              26 апреля – прием сердечно-сосудистого хирурга из Санкт-Петербурга
              в городе Ставрополе
            </h3>
            <p>
              Приглашаем пациентов с сердечно-сосудистыми заболеваниям и
              болезнями сердца на прием к сердечно-сосудистому хирургу 1-й
              категории из Санкт-Петербурга – Каппушеву Руслану Юсуфовичу.
            </p>
            <p>
              Записывайтесь на консультацию и осмотр нашего кардиохирурга, если
              у вас наблюдаются:
            </p>
            <ul>
              <li> Нарушения ритма сердца</li>
              <li>
                <Link
                  href='/diseases/ishemicheskaya-bolezn-serdca'
                  text='Ишемическая болезнь сердца'
                />
              </li>
              <li> Патология аорты</li>
              <li>
                <Link
                  href='/diseases/poroki-serdca'
                  text='Клапанные пороки сердца'
                />
              </li>
              <li>Патология периферических сосудов</li>
            </ul>
            <p>
              После получения консультации нашего специалиста Вы можете быть
              направлены на 
              <strong>бесплатное лечение в Санкт-Петербурге</strong>.
            </p>
            <h3>Документы, необходимые на приеме специалиста:</h3>
            <ul>
              <li>Паспорт (1-я страница и прописка)</li>
              <li>Полис ОМС (с двух сторон)</li>
              <li>СНИЛС</li>
            </ul>
            <p>А также медицинские документы:</p>
            <h3>
              Обследования для кардиохирургических больных (клапанные пороки,
              ИБС, патология аорты):
            </h3>
            <ul>
              <li>ЭКГ (описание)</li>
              <li>Результаты осмотра кардиолога: заключения и выписки</li>
              <li>Эхокардиография</li>
              <li>
                <Link
                  href='/diagnostics/coronarographia'
                  text='Коронарография '
                />{' '}
                (по возможности)
              </li>
              <li>
                При наличии сопутствующих заболеваний - консультации
                врачей-специалистов (по возможности)
              </li>
            </ul>
            <h3>При сосудистой патологии, дополнительно к вышесказанному:</h3>
            <ul>
              <li>
                Дуплексное сканирование брахиоцефальных артерий, аорты, артерий
                нижних конечностей
              </li>
            </ul>
            <h3>
              При нарушении ритма сердца, дополнительно к вышенаписанному:
            </h3>
            <ul>
              <li>Суточный мониторинг ЭКГ по Холтеру</li>
            </ul>
            <ButtonCTA styling={local_styles.cta} text='Записаться на прием' />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
        </section>
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
              Тел. для записи: <PhoneLink />
            </p>
            <Map position={mapPosition} />
          </div>
        </div>
        <hr />
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
