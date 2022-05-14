import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { NextPage } from 'next';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Кардиохирургические операции на сердце для жителей России',
    description:
      'Приглашаем пациентов со всей России на диагностику и лечение кардиохирургических заболеваний. Записывайтесь на прием!',
    pageLink:
      'https://heartteamspb.com/announcements/kardiohirurgicheskie-operatsii-dlya-zhitelej-rossii',
    type: 'article',
  };
  
  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <section className='container mt'>
        <h1>Кардиохирургические операции на сердце для&nbsp;жителей России</h1>
        <p>
          Центр кардиохирургии и интервенционной кардиологии клиники ВМТ им.
          Н.И. Пирогова СПбГУ приглашает пациентов на диагностику и лечение
          заболеваний органов сердца и сердечно-сосудистой системы.
        </p>
        <p>
          На сегодняшний день специалисты нашей клиники осуществляют приемы во
          многих городах России – пациенты из более, чем 30 регионов уже
          получают высококвалифицированную медицинскую помощь в нашей больнице
          кардиохирургии.{' '}
          <Link href='/operacii-na-serdce' text='Операции на сердце' /> наши
          кардиохирурги проводят на ежедневной основе.
        </p>
        <p>
          Лечение в нашем центре можно провести как на платной, так и на
          бесплатной основе: мы принимаем пациентов по федеральной квоте и ОМС.
        </p>
        <p>
          Опытные врачи-кардиохирурги, современное медицинское оборудование и
          чуткий обслуживающий персонал – ваше лечение и реабилитация пройдут
          комфортно. Звоните, пишите, записывайтесь на прием.
        </p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
