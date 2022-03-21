import Header from '@/components/Header/Header';
import SEO from '@/components/SEO';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { NextPage } from 'next';

const Structure: NextPage = () => {
  const SEODetails = {
    title: 'Структура Центра кардиохирургии и интервенционной кардиологии',
    description:
      'Отделения Центра: кардиохирургическое, кардиореаниматологии и анастезиологии, диагностическое отделение кардиологии, отделение функциональной диагностики, отделение рентгенэндоваскулярных обследований.',
    pageLink: 'https://heartteamspb.com/structure',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className='container section__about-us'>
          <h1 className='article__header'>
            Структура Центра кардиохирургии
            и&nbsp;интервенционной&nbsp;кардиологии
          </h1>
          <p className='article__p'>
            Центр кардиохирургии и интервенционной кардиологии основан на базе
            “КВТ им.&nbsp;Н.И.Пирогова” СПбГУ в&nbsp;2014 году.
          </p>
          <p className='article__p'>
            Ведем прием пациентов с&nbsp;различными заболеваниями
            сердечно-сосудистой системы. Проводим как миниинвазивные, так
            и&nbsp;тяжелые операции на&nbsp;сердце и&nbsp;сосудах.
          </p>
          <p className='article__p'>В структуру нашего Центра входят: </p>
          <ul className='article__ul'>
            <li className='article__li'>— Отделение кардиохирургии</li>
            <li className='article__li'>
              —{' '}
              <Link
                href='/structure/cardioreanimatology'
                text='Отделение кардиореаниматологии и анастезиологии'
              />
            </li>
            <li className='article__li'>
              — Отделение рентгенэндоваскулярных методов диагностики и лечения
            </li>
            <li className='article__li'>
              Амбулаторно-диагностическое отделение кардиологии
              и&nbsp;функциональной диагностики
            </li>
            <li className='article__li'>
              —{' '}
              <Link
                href='/structure/functional-diagnostics'
                text='Отделение функциональной диагностики'
              />
            </li>
          </ul>
          <p className='article__p'>
            В нашем центре вы можете пройти диагностику и получить лечение как
            по ОМС, так и по бесплатным федеральным квотам.
          </p>
          <PhoneLink
            phoneNumber='+7 (999) 238-01-36'
            text='За дополнительной
            информацией обращайтесь по телефону: '
          />
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};
export default Structure;
