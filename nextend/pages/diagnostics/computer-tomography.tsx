import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { NextPage } from 'next';

const KT: NextPage = () => {
  const SEODetails = {
    title: 'КТ Компьютерная томография',
    description:
      'Сделайте компьютерную томографию (КТ) в нашей клинике кардиохирургии и кардиологии.',
    pageLink: 'https://heartteamspb.com/diagnostics/computer-tomography',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <article className='mt container'>
          <h1 className='article__header'>КТ – компьютерная томография</h1>
          <p className='article__p'>
            Неотъемлемой частью современной диагностики является компьютерная
            томография (КТ). Она представляет собой диагностическое
            исследование, в ходе которого визуализируется послойное детальное
            изображение всех структур и органов. Если говорить об использовании
            КТ в <Link href='/' text='кардиохирургии' />, то прежде всего стоит
            отметить высокую информативность данного метода. Данный метод
            позволяет хирургам оценить размеры камер сердца и сосудов, наличие{' '}
            <Link
              href='/diagnostics/ateroskleros'
              text='атеросклеротического процесса'
            />
            , который часто сопровождается кальцинированием стенок сосуда и
            создает высокую опасность при проведении оперативного вмешательства.
          </p>
          <p className='article__p'>
            Если говорить о дополнительных методах визуализации в компьютерной
            диагностике, то существует КТ-ангиография. Этот метод подразумевает
            введение рентгеноконтрастного вещества в сосуд во время исследования
            (контраст, как правило, вводится внутривенно). Применяется в
            следующих клинических случаях: выявление сужения (стеноза) или
            блокирования (окклюзии) коронарных артерий при ишемической болезни
            сердца. При этом достаточно хорошо видно наличие атеросклеротических
            бляшек, суживающих просвет артерии, и кальция; аневризма или
            расслоение (диссекция) аорты; выявление поражения артерий почек,
            сонных артерий, артерий нижних конечностей, аневризма сосудов
            головного мозга, висцеральных артерий; диагностика тромбоэмболии
            лёгочной артерии; аномалии развития или мальформации сосудов или
            сосудистых опухолей.
          </p>
          <p className='article__p'>
            Показания для проведения КТ, а особенно ангиографии определяет врач
            кардиолог или сердечно-сосудистый хирург, т.к. область исследования
            выбирается на основании диагноза и других клинических данных.
          </p>
        </article>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default KT;