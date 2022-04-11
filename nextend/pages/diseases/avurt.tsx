import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Banner from '@/components/Banner';
import Greetings from '@/components/Greetings';

const DiseaseArticle: NextPage = () => {
  const SEODetails = {
    title: 'Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ)',
    description:
      'Диагностика и лечение атриовентрикулярной узловой реципрокной тахикардии (АВУРТ)',
    pageLink: 'https://heartteamspb.com/diseases/avurt',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <Header />
        <Greetings
          header='Атриовентрикулярная узловая реципрокная тахикардия'
          subheader='приступы внезапного учащенного сердцебиения'
          buttonText='записаться на бесплатный прием'
        />
        <Banner />
        <article className='container'>
          <h1 className='article__header'>
            Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ)
          </h1>
          <p className='article__p'>
            Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ) –
            разновидность суправентрикулярной (наджелудочковой) тахикардии.
          </p>
          <h2 className='article__p text-center'>Причины появления АВУРТ</h2>
          <p className='article__p'>
            Причиной появления атриовентрикулярной узловой реципрокной
            тахикардии (АВУРТ) является врожденное расщепление («диссоциация»)
            АВ узла на 2 канала проведения, имеющих общие начало и конец, и
            разные электрофизиологические свойства. Как и при{' '}
            <Link href='/diseases/sindrom-wpw' text='синдроме WPW' />, при АВУРТ
            ключевую роль играет механизм re-entry, в результате чего импульс
            возбуждения начинает циркулировать по кругу и возникает тахикардия.
          </p>
          <h2 className='article__p text-center'>
            Симптомы АВУРТ. Типичные проявления
          </h2>
          <p className='article__p'>
            Пациенты с АВУРТ испытывают приступы внезапного учащенного
            сердцебиения, от нескольких минут до нескольких часов (реже),
            которые также внезапно заканчиваются; приступы могут сопровождаться
            головокружением, одышкой, предобморочными состояниями, появлением
            болей за грудиной.
          </p>
          <h2 className='article__p text-center'>Диагностика АВУРТ</h2>
          <p className='article__p'>
            Специфические изменения на ЭКГ, снятой в покое, - отсутствуют.
            Диагноз устанавливается на основе ЭКГ, снятой в момент приступа
            тахикардии, и подтверждается при электрофизиологическом
            исследовании.
          </p>
          <h2 className='article__p text-center'>
            Лечение атриовентрикулярной узловой реципрокной тахикардии
          </h2>
          <p className='article__p'>
            Медикаментозное лечение при АВУРТ малоэффективно. Для купирования
            приступов сердцебиения возможно применение «вагусных приемов»
            (задержка дыхания на глубоком вдохе с напряжением мышц живота,
            помещение лица в холодную воду, надавливание на глазные яблоки и
            т.д.).
          </p>
          <p className='article__p'>
            Единственным эффективным и радикальным методом лечения является{' '}
            <Link
              href='/treatment/radiochastotnaya-ablyaciya'
              text='радиочастотная катетерная аблация (РЧА)'
            />
            , во время которой устраняется «патологический» канал поведения.
          </p>
          <h2 className='article__p text-center'>Прогноз</h2>
          <p className='article__p'>
            У половины пациентов с АВУРТ может встречатся фибрилляция
            предсердий, которая обычно проходит после катетерной аблации АВУРТ.
          </p>
        </article>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default DiseaseArticle;
