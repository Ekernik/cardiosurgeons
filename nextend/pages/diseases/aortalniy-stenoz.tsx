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
    title: 'Аортальный стеноз: лечение и операции',
    description:
      'Заболевание: аортальный стеноз. Операции в клинике кардиохирургии.',
    pageLink: 'https://heartteamspb.com/diseases/aortalniy-stenoz',
    type: 'article',
  };
  
  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <Header />
        <Greetings
          header='Аортальный стеноз'
          subheader=''
          buttonText='записаться на бесплатный прием'
        />
        <Banner />
        <article className='container'>
          <h1 className='article__header'>Аортальный стеноз</h1>
          <p className='article__p'>
            Аортальный стеноз — это заболевание, являющееся как врожденным, так
            и приобретенным{' '}
            <Link href='/diseases/poroki-serdca' text='пороком сердца' />. При
            этом створки аортального клапана, расположенного на выходе из левого
            желудочка в аорту, срастаются между собой. В результате подвижность
            створок при открывании и закрывании резко ограничивается,
            препятствуя нормальному движению крови через клапан. Как следствие,
            наступает застой крови в левом желудочке и недостаточное поступление
            крови ко всем органам.
          </p>
          <h2 className='article__p text-center'>Аортальный стеноз: причины</h2>
          <p className='article__p'>
            Причинами приобретенного порока могут быть: болезнь Педжета;
            кальциноз (обызвествление) аортального клапана; инфекционный
            эндокардит; атеросклероз аорты; системная красная волчанка;
            ревматизм и др. Врожденный аортальный стеноз наблюдается при
            врожденном сужении устья аорты или аномалии развития - двустворчатом
            аортальном клапане. Врожденный порок аортального клапана обычно
            проявляется в возрасте до 30 лет; приобретенный – в более старшем
            возрасте (обычно после 60 лет).
          </p>
          <h2 className='article__p text-center'>
            Симптомы аортального стеноза
          </h2>
          <p className='article__p'>
            Основными жалобы при такой патологии является головокружения,
            потемнения в глазах, слабость, повышенная утомляемость, что
            обусловлено недостаточным поступлением крови к головному мозгу.
            Другими симптомами могут быть давящие боли за грудиной и одышка,
            обусловленные недостаточным поступлением крови к миокарду сердца.
          </p>
          <h2 className='article__p text-center'>
            Диагностика аортального стеноза
          </h2>
          <p className='article__p'>
            При появлении вышеописанных симптомов необходимо обратиться на приём
            к кардиологу. Одним из специфичных и распространённых методов
            диагностики аортального стеноза является эхокардиография. Этот метод
            ультразвуковой диагностики позволяет не только выявить наличие
            данного заболевания, но и определить степень его выраженности,
            степень застоя крови в лёгких (легочную гипертензию), а также
            оценить операбельность.
          </p>
          <h2 className='article__p text-center'>
            Аортальный стеноз: лечение в нашей клинике
          </h2>
          <p className='article__p'>
            Лечение аортального стеноза может быть двумя способами:
          </p>
          <p className='article__p'>
            - <strong>консервативное лечение</strong> - комплекс мероприятий,
            направленных на изменение образа жизни и приём лекарственных
            препаратов, нацеленных на уменьшение клинических проявлений и
            замедление прогрессирования заболевания.
          </p>
          <p className='article__p'>
            - <strong>оперативное лечение</strong> - хирургическое
            вмешательство, цель которого заключается в восстановлении
            нормального кровотока через зауженное аортальное отверстие и тем
            самым поступление достаточного объёма крови ко всем органам. Смысл
            операции заключается в замене изменённого, плохо функционирующего
            клапана на механический или биологический протез.
          </p>
          <p className='article__p'>
            В пожилом и старческом возрасте возможно выполнение операции без
            разрезов методом стентирования клапана через прокол бедренной
            артерии
          </p>
          <h2 className='article__p text-center'>Прогноз</h2>
          <p className='article__p'>
            В случае естественного течения заболевания (отсутствии лечения)
            аортальный стеноз может быстро привести к инвалидизации пациента. В
            далеко зашедших случаях аортальный стеноз осложняется инфарктом
            миокарда или инсультом, что может приводить к смерти пациента.
          </p>
          <p className='article__p'>
            При появлении симптомов тяжелой сердечной недостаточности средняя
            продолжительность жизни не превышает 1 год. А при отсутствии
            хирургического вмешательства смертность в течение 2 лет достигает
            80%. Поэтому, если вы чувствуете симптомы, описанные выше,
            обязательно позвоните нашим специалистам для получения подробной
            консультации.
          </p>
        </article>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default DiseaseArticle;