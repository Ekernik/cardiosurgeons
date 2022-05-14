import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Map from '@/components/Map';
import DoctorCard from '@/components/DoctorCard';
import ButtonCTA from '@/components/ButtonCTA';
import SEO from '@/components/SEO';
import PhoneLink from '@/components/PhoneLink';
import { doctors } from '@/public/static/databases/doctors';
import local_styles from './styles.module.scss';

// Ставрополь - 15 марта 2022 - Каппушев
const Announcement: NextPage = () => {
  const doctor = doctors[7];
  const mapPosition = [45.054181, 41.915957];
  const SEODetails = {
    title: 'Прием кардиохирурга - Ставрополь',
    description: `Ставрополь - 15 марта 2022 г. - Принимает кардиохирург из Петербурга - Каппушев Руслан Юсуфович. Записывайтесь на прием.`,
    pageLink:
      'https://heartteamspb.com/news/priem-v-gorode-stavropol-15.03.2022',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header={{ title: '15 марта', pretitle: 'город Ставрополь' }}
        buttonText='Записаться на консультацию'
      />
      <article className='container'>
        <h6 className={local_styles.date}>новость от 17 февраля 2022 года</h6>
        <div className='flex'>
          <div className={local_styles.text_content}>
            <h3>
              Приём пациентов с заболеваниями органов сердечно-сосудистой
              системы в&nbsp;городе Ставрополе
            </h3>
            <p>
              Записывайтесь на прием и консультацию к&nbsp;опытному
              сердечно-сосудистому хирургу 1-й категории
              из&nbsp;Санкт-Петербурга –{' '}
              <Link href={doctor.link} text={doctor.name} />.
            </p>
            <p>
              15 марта 2022 – Ставропольский Краевой реабилитационный Центр.
            </p>
            <h3>Ждем на прием пациентов, у которых наблюдаются:</h3>
            <ul>
              <li>Ишемическая болезнь сердца</li>
              <li>Клапанные пороки сердца</li>
              <li>Нарушения ритма сердца</li>
              <li>Патология аорты</li>
              <li>Патология периферических сосудов</li>
            </ul>
            <p>
              После получения консультации нашего специалиста Вы&nbsp;можете
              быть направлены на&nbsp;
              <strong>бесплатное лечение в&nbsp;Санкт-Петербурге</strong>{' '}
              (по&nbsp;федеральной квоте или&nbsp;ОМС).
            </p>
            <h3>С собой вам необходимо иметь ксерокопии документов:</h3>
            <ul>
              <li>паспорт (1-я страница и&nbsp;прописка)</li>
              <li>полис ОМС (с&nbsp;двух сторон)</li>
              <li>СНИЛС</li>
            </ul>
            <h3>А также медицинские документы:</h3>
            <h4>
              Обследования для кардиохирургических больных (ИБС, клапаны,
              аорта):
            </h4>
            <ul>
              <li>ЭКГ (описание)</li>
              <li>Эхокардиография</li>
              <li>Осмотр кардиолога (по&nbsp;возможности)</li>
              <li>
                <Link
                  href='/diagnostics/coronarographia'
                  text='Коронарография'
                />
                (по&nbsp;возможности)
              </li>
              <li>
                При наличии сопутствующих заболеваний - консультации
                врачей-специалистов (по&nbsp;возможности)
              </li>
            </ul>
            <h4>
              При сосудистой патологии, дополнительно к&nbsp;вышесказанному:
            </h4>
            <ul>
              <li>
                Дуплексное сканирование брахиоцефальных артерий, аорты, артерий
                нижних конечностей.
              </li>
            </ul>
            <h4>
              При нарушении ритма сердца, дополнительно к&nbsp;вышенаписанному:
            </h4>
            <ul>
              <li>Суточный мониторинг ЭКГ по&nbsp;Холтеру.</li>
            </ul>
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
              Прием будет проводиться:{' '}
              <strong>15&#160;марта&#160;2022&#160;г.</strong>
            </p>
            <p>
              По адресу:{'  '}
              <a
                href='https://yandex.ru/maps/-/CCU5RWWr0D'
                target='_blank'
                className='article__link'
                rel='noreferrer noopenner'
              >
                г.&nbsp;Ставрополь, проспект Кулакова, д.&nbsp;12&nbsp;«B»
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
