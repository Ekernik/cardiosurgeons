import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';

const Article: NextPage = () => {
  const SEODetails = {
    title: 'Протезирование аорты.',
    description:
      'Выполняем операции по протезированию аорты. Пройдите лечение в нашей клинике кардиохирургии и кардиологии.',
    pageLink: 'https://heartteamspb.com/treatment/protezirovanie-aorti',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Протезирование аорты'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <section className='container'>
        <h1>Протезирование аорты</h1>
        <p>
          Аорта является главным сосудом и по ней кровь поступает от сердца ко
          всем жизненно важным органам человека. Проблемы могут возникать от
          разных причин: врожденные (генетические), воспалительные или
          аутоиммунные заболевания, но чаще всего в связи с большой нагрузкой,
          за счет повышенного давления на стенки аорты с последующим
          присоединением атеросклеротического процесса, что приводит к
          локальному расширению и образованию “мешка” - аневризмы.
        </p>
        <p>
          Жалобы обычно появляются, когда аневризма начинает расслаиваться или,
          увеличиваясь, сдавливает окружающие органы и ткани. Появляется боль
          и/или нарушение функций тех органов, которые располагаются в области
          аневризмы. Изначально жалобы не носят яркого характера и, поэтому, не
          настораживают ни пациента, ни врача.
        </p>
        <p>
          В клинике Высоких медицинских технологий для лечения{' '}
          <Link
            href='/diseases/anevrizma-i-rassloenie-aorti'
            text='аневризмы аорты'
          />{' '}
          применяются два способа - эндоваскулярный метод с использованием
          специального внутрисосудистого протеза (стент-графта), и открытая
          операция - протезирование аорты (синтетическим заменителем) во всех ее
          отделах - восходящий, дуга, грудной и брюшной.
        </p>
        <p>
          Выбрать тот или иной метод лечения пациенту посоветует
          сердечно-сосудистый хирург, опираясь на результаты диагностических
          обследований. Поэтому перед тем, как делать операцию по протезированию
          аорты, нужно сперва провести полную диагностику.
        </p>
        <p>
          В настоящее время оптимальным методом диагностики, дающим наиболее
          полную информацию о локализации, протяженности, диаметре аневризмы и
          ее отношении к близлежащим органам является мультиспиральная{' '}
          <Link
            href='/diagnostics/computer-tomography'
            text='компьютерная томография'
          />{' '}
          компьютерная томография — аортография с внутривенным
          контрастированием. Для каждого отдела аорты существует пограничный
          предел расширения, после достижения которого, риск разрыва сосуда
          увеличивается. Критическим значением считается 5 см и более, либо
          прирост на 6 мм за 6 месяцев по данным обследования.
        </p>
        <p>
          Основной метод лечения аневризмы любого отдела аорты — хирургический.
          Смысл метода заключается в замене расширенного участка аорты с целью
          предотвращения его дальнейшего растяжения и разрыва. Для каждого
          метода имеются свои показания, и каждому из них присущи свои
          преимущества и недостатки. Если говорить об открытом хирургическом
          методе, то прежде всего, обращает на себя внимание его
          универсальность, возможность исправления всех нарушений, связанных с
          аневризмой аорты, вне зависимости от отдела и характера поражения.
          Например, при аневризме восходящего отдела аорты и поражении
          аортального клапана проводят протезирование аорты и аортального
          клапана. Соответственно, появляется необходимость применения
          искусственного кровообращения, а зачастую - полной остановки
          кровообращения.
        </p>
        <p>
          Все кардиохирургические процедуры в нашей клинике выполняются опытными
          специалистами, которые проводят операции на регулярной основе:
        </p>
        <ul>
          <li>протезирование восходящего отдела аорты</li>
          <li>протезирование грудной аорты</li>
          <li>протезирование брюшной аорты</li>
          <li>протезирование дуги аорты</li>
        </ul>
        <p>
          Для получения дополнительной информации по протезированию аорты,
          свяжитесь с нашими специалистами по телефону: <PhoneLink />
        </p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Article;