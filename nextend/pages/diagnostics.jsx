import Link from 'next/link';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import illnesses from '@/public/static/databases/illnesses';
import SEO from '@/components/SEO';

export default function Diagnostics() {
  const SEODetails = {
    title: 'Диагностика сердечно-сосудистых заболеваний.',
    description:
      'Нарушения ритма сердца. Кардиохирургия. Врожденные пороки сердца. Сердечно-сосудистая хирургия.',
    pageLink: 'https://heartteamspb.com/diagnostics',
    type: 'article',
  };

  const renderSubsections = () =>
    illnesses.map((object, i) => (
      <div className='illness-subsection' key={`div${i}`}>
        <h3 className='illness-list__header'>{object.categoryName}</h3>
        {object.illnesses.map((illness, i) => {
          return object.illnesses[object.illnesses.length - 1] === illness
            ? renderItems(i, illness, true)
            : renderItems(i, illness, false);
        })}
      </div>
    ));

  const renderItems = (i, illness, isLastItem) => {
    const isObject = typeof illness === 'object';
    const illnessLink = (
      <Link href={`/diagnostics${illness.link}`}>
        <a className='article__link'>{illness.title}</a>
      </Link>
    );

    return (
      <div key={`item${i}`}>
        <li className='illness-list__item'>
          {isObject ? illnessLink : illness}
        </li>
        {isLastItem ? '' : <hr />}
      </div>
    );
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <main className='page__diagnostics'>
          <section className='container  section__diagnostics'>
            <h1 className='section__header'>
              Мы производим диагностику по следующим направлениям
            </h1>
            <ul className='list-container__list'>{renderSubsections()}</ul>
          </section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
