import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Banner from '@/components/Banner';
import Greetings from '@/components/Greetings';
import styles from '@/styles/article.module.scss';

const DiseaseArticle: NextPage = () => {
  const SEODetails = {
    title: 'Поражения сердца: дилатационная кардиомиопатия',
    description: 'Дилатационная кардиомиопатия – лечение в Петербурге',
    pageLink:
      'https://heartteamspb.com/diseases/dilatacionnaya-kardiomiopatiya',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <Greetings
        header='Дилатационная кардиомиопатия'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className={`container ${styles.article}`}>
        <h1>Дилатационная кардиомиопатия</h1>
        <p>
          Дилатационная кардиомиопатия - поражение сердца, характеризующееся
          расширением его полостей, истончением миокарда и выраженным нарушением
          насосной функции.
        </p>
        <h2>Причины дилатационной кардиомиопатии</h2>
        <p>
          В основе поражений сердца, в частности, дилатационной кардиомиопатии
          лежат различные генетические нарушения, аутоиммунные заболевания,
          вирусные и токсические воздействия. Уменьшается интенсивность
          сокращений желудочков, что приводит к появлению признаков застойной
          сердечной недостаточности.
        </p>
        <h2>Типичные жалобы пациентов</h2>
        <p>
          Характерными симптомами дилатационной кардиомиопатии являются
          проявления застойной сердечной недостаточности, появляются жалобы на
          одышку, слабость, высокую утомляемость, отёки нижних конечностей.
          Нередко возникают эпизоды сердечной астмы и приступы отека легких. На
          поздних стадиях отмечается скопление жидкости во внутренних органах и
          полостях тела.
        </p>
        <p>
          Одним из ранних проявлений дилатационной кардиомиопатии может быть
          мерцательная аритмия, являющаяся причиной формирования тромбов внутри
          сердца. Риск тромбоэмболических осложнений (отрыва тромбов) наиболее
          высок у больных с постоянной формой мерцательной аритмии и выраженной
          сердечной недостаточностью. Другие частые осложнения дилатационной
          кардиомиопатии - нарушения ритма и проводимости сердца,{' '}
          <Link
            href='/diseases/vnezapnaya-serdechnaya-smert'
            text='внезапная сердечная смерть'
          />
          .
        </p>
        <h2>Диагностика дилатационной кардиомиопатии</h2>
        <p>
          Решающее значение в диагностике дилатационной кардиомиопатии имеет
          ультразвуковое исследование сердца (эхокардиография), которая
          позволяет оценить насосную функцию сердца, определить размеры
          полостей, толщину стенок, выявить нарушение функции клапанов.
        </p>
        <h2>Дилатационная кардиомиопатия: лечение и операции</h2>
        <p>
          Очень важно соблюдать постоянную медикаментозную терапию. Для
          предотвращения тромбоэмболических осложнений пациентам с имеющимися
          нарушениями сердечного ритма показан прием разжижающих кровь
          препаратов. При отсутствии лечения заболевание быстро прогрессирует.
        </p>
        <p>
          Диагноз дилатационной кардиомиопатии, сопровождающийся тяжелыми
          клиническими проявлениями и неэффективностью медикаментозной терапии
          является показанием к трансплантации сердца. Также нередко применяются
          различные системы механической поддержки – специальные насосы,
          помогающие проталкивать кровь из сердца, в большинстве случаев
          являются «мостом» к пересадке сердца.
        </p>
        <h2>Прогноз</h2>
        <p>
          Прогноз при данном заболевании крайне серьезный. Естественное течение
          заболевания приводит к быстрой инвалидизации и высокой смертности.
          Своевременное выполненная диагностика, правильное лечение могут
          снизить риски прогрессирования и осложнений заболевания, а современные
          возможности хирургического лечения способны значительно продлить
          жизнь.
        </p>
        <p>
          Для диагностики поражений сердца (в том числе – дилатационной
          кардиомиопатии) обращайтесь в наш{' '}
          <Link href='/' text='центр кардиохирургии' />. Опытные кардиологи и
          кардиохирурги проконсультируют вас по всем вопросам, запишут на прием,
          проведут полный курс лечения.
        </p>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default DiseaseArticle;
