import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { NextPage } from 'next';

const Article: NextPage = () => {
  const SEODetails = {
    title: 'Опухоли сердца. Миксома сердца. Опухоли сосудов сердца.',
    description:
      'Проводим операции по устранению опухолей сердца: как доброкачественных, так и злокачественных. Устранение миксомы сердца. Записывайтесь на прием!',
    pageLink: 'https://heartteamspb.com/treatment/opuholi-serdca',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Опухоли сердца'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <section className=' container'>
        <h1>Опухоли сердца</h1>
        <p>
          Опухоли сердца - различные по своей структуре новообразования,
          возникающие из тканей самого сердца или прорастающие в него из других
          органов.
        </p>
        <p>
          Они могут прорастать сердечную мышцу, перикард, поражать клапаны и
          перегородки сердца. Все опухоли сердца можно условно разделить на
          развивающиеся из тканей самого сердца, то есть первичные и, вторичные,
          возникающие как метастатический процесс из других органов
          (злокачественные). Чаще всего встречается именно доброкачественный
          вариант - 75% всех опухолей сердца.
        </p>
        <p>
          Миксома сердца – наиболее часто встречающаяся доброкачественная
          опухоль сердца. Представляет собой желеобразной консистенции
          образование, локализующиеся во всех камерах сердца, чаще - в левом
          предсердии. Клиническая картина заболевания крайне разнообразна и
          малоспецифична и зависит от локализации опухоли и возможности
          прорастания в проводящую систему сердца. Из наиболее распространенных
          симптомов, которые беспокоят пациентов: одышка, боли в груди,
          головокружения, обмороки, различные виды аритмий. Если имеется
          поражение проводящей системы, то возникают нарушениями ритма и
          проводимости (блокады, пароксизмальные наджелудочковые и желудочковые
          тахикардии).
        </p>
        <p>
          В первую очередь, опухоли сердца опасны тем, что нарушают
          внутрисердечную гемодинамику, создавая препятствие току крови через
          клапаны. Также опухоли опасны эмболиями (фрагментации части опухоли),
          вызывая инсульты, инфаркты почек, кишечника, ишемию конечностей.
          Происходит это из-за отрыва &quot;кусочков&quot; опухоли и
          блокирования кровотока в пораженном органе вне сердца. В настоящее
          время для точной диагностики опухолей сердца применяются
          эхокардиография (трансторакальная и чреспищеводная) и МРТ/МСКТ сердца,
          которые, в абсолютном большинстве случаев, предоставляют достаточную
          информации об образовании и наиболее оптимальном способе его лечения.
        </p>
        <p>
          В Клинике высоких медицинских технологий проводится как диагностика,
          так и хирургическое лечение новообразований сердца. Каждый конкретный
          случай заболевания уникален и требует индивидуального подхода. Тем не
          менее, можно точно сказать, что наличие миксомы в полости сердца
          является экстренным показанием к его устранению, так как риск
          фатальных осложнений крайне велик.
        </p>
        <p>Записывайтесь на прием к нашим специалистам!</p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Article;
