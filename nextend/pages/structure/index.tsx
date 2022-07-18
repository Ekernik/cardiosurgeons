import { NextPage } from 'next';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

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
      <Header />
      <main className='mt container'>
        <article>
          <h1>
            Структура Центра кардиохирургии
            и&nbsp;интервенционной&nbsp;кардиологии
          </h1>
          <p>
            Центр кардиохирургии и интервенционной кардиологии основан на базе
            “КВТ им.&nbsp;Н.И.Пирогова” СПбГУ в&nbsp;2014 году.
          </p>
          <p>
            Ведем прием пациентов с&nbsp;различными заболеваниями
            сердечно-сосудистой системы. Проводим как миниинвазивные, так
            и&nbsp;тяжелые операции на&nbsp;сердце и&nbsp;сосудах.
          </p>
          <p>В структуру нашего Центра входят: </p>
          <ul>
            <li> Отделение кардиохирургии</li>
            <li>
              <Link
                href='/structure/cardioreanimatology'
                text='Отделение кардиореаниматологии и анастезиологии'
              />
            </li>
            <li>
              Отделение рентгенэндоваскулярных методов диагностики и лечения
            </li>
            <li>
              Амбулаторно-диагностическое отделение кардиологии
              и&nbsp;функциональной диагностики
            </li>
            <li>
              <Link
                href='/structure/functional-diagnostics'
                text='Отделение функциональной диагностики'
              />
            </li>
          </ul>
          <p>
            В нашем центре вы можете пройти диагностику и получить лечение как
            по ОМС, так и по бесплатным федеральным квотам.
          </p>
          <p>
            За дополнительной информацией обращайтесь по телефону: <PhoneLink />
          </p>
        </article>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};
export default Structure;
