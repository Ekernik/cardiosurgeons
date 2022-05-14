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

// Сортавала - 29 марта 2022 - Каппушев
const Announcement: NextPage = () => {
  const doctor = doctors[7];
  const addressOfVisit = 'г. Сортавала, ул. Бондарева, д. 49';
  const price = '1100 рублей';
  const mapsLink = 'https://yandex.ru/maps/-/CCUBR6r~8C';
  const mapPosition = [61.721579, 30.699943];
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
      <Header />
      <Greetings
        header={{
          title: '29 марта 2022',
          pretitle: 'город Сортавала',
        }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>Новость от 28 марта 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              Приём пациентов с заболеваниями органов сердечно-сосудистой
              системы в городе Сортавале.
            </h3>
            <p>
              29 марта 2022 года – прием в городе Сортавале кардиохирурга из
              Санкт-Петербурга.
            </p>
            <h3>Приглашаем на прием пациентов с:</h3>
            <ul>
              <li>Нарушениями ритма сердца</li>
              <li>Ишемической болезнью сердца</li>
              <li>Патологией аорты</li>
              <li>Клапанными пороками сердца</li>
              <li>Патологией аорты и периферических сосудов</li>
              <li>Другими сердечно-сосудистыми заболеваниями</li>
            </ul>
            <p>
              После осмотра специалистом пациенты могут быть направлены на
              бесплатное лечение в наш Центр кардиохирургии. Бесплатные операции
              проводятся по федеральным квотам и ОМС.
            </p>
            <h3>С собой на приеме необходимо иметь ксерокопии документов:</h3>
            <ul>
              <li>паспорт (1-я страница и прописка)</li>
              <li>полис ОМС (с двух сторон)</li>
              <li>СНИЛС</li>
              <li>
                Медицинские документы: результаты обследования кардиологом и
                другими специалистами, ЭКГ (описание),{' '}
                <Link
                  href='/diagnostics/coronarographia'
                  text='коронарография'
                />{' '}
                (если имеется), эхокардиография.
              </li>
            </ul>
            <p>
              Для пациентов с сосудистой патологией рекомендуем взять результаты
              дуплексного сканирования бахиоцефальных артерий, аорты, артерий
              нижних конечностей.
            </p>
            <p>
              Для пациентов с нарушениями ритма сердца - результаты суточного
              мониторинга ЭКГ по Холтеру.
            </p>
            <h3>Стоимость приёма — {price}.</h3>
            <ButtonCTA styling={local_styles.cta} text='Записаться на прием' />
          </div>
          <div className={local_styles.help_flex}>
            <DoctorCard doctor={doctor} />
          </div>
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
              Тел. для записи: <PhoneLink />
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
