import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { diagnosticsArr } from '@/public/static/databases/diagnostics';
import SEO from '@/components/SEO';
import { DiagnosticsType } from '@/types/diagnostics';
import { NextPage } from 'next';

const Diagnostics: NextPage = () => {
  const SEODetails = {
    title: 'Диагностика сердечно-сосудистых заболеваний.',
    description:
      'Нарушения ритма сердца. Кардиохирургия. Врожденные пороки сердца. Сердечно-сосудистая хирургия.',
    pageLink: 'https://heartteamspb.com/diagnostics',
    type: 'article',
  };

  const renderCategories = () =>
    diagnosticsArr.map((category, i) => (
      <div className='illness-subsection' key={`div${i}`}>
        <h3 className='illness-list__header'>{category.categoryName}</h3>
        {renderDiagnostics(category)}
      </div>
    ));

  const renderDiagnostics = (category: DiagnosticsType) =>
    category.diagnostics.map((diagnostic, i) => {
      const isLastItem =
        category.diagnostics[category.diagnostics.length - 1] === diagnostic;
      const isObject = typeof diagnostic === 'object';
      const link = isObject ? (
        <Link href={`/diagnostics${diagnostic.link}`} text={diagnostic.title} />
      ) : (
        diagnostic
      );

      return (
        <div key={i}>
          <li className='illness-list__item'>{link}</li>
          {isLastItem ? '' : <hr />}
        </div>
      );
    });

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className='page__diagnostics'>
          <section className='container  section__diagnostics'>
            <h1 className='section__header'>
              Мы производим диагностику по следующим направлениям
            </h1>
            <ul className='list-container__list'>{renderCategories()}</ul>
          </section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Diagnostics;
