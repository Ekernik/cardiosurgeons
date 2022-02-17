import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Page = () => {
  const SEODetails = {
    title: 'Аневризма аорты. Расслоение аорты',
    description:
      'Лечим аневризмы и расслоение аорты. Диагностируем аневризму грудной аорты. Современное кардиохирургическое оборудование',
    pageLink: 'https://heartteamspb.com/diseases/anevrizma-i-rassloenie-aorti',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <main>
          <Header />
          <article className='container mt'>
            <h1 className='article__header'>Аневризма и расслоение аорты</h1>
            <p className='article__p'>
              Аневризма аорты – увеличение диаметра главной артерии организма
              более чем в 2 раза. По расположению в теле человека аневризмы
              аорты подразделяются на аневризму восходящего отдела аорты,
              аневризму дуги и нисходящего отдела аорты и аневризму брюшной
              аорты.
            </p>
            <p className='article__p'>
              Расслоение аорты – это жизнеугрожающее состояние, возникающее
              после повреждения и разрыва внутреннего слоя аорты и попадания
              крови между слоями её стенки. Также классифицируется в зависимости
              от места начала расслоения на расслоение восходящего отдела аорты,
              расслоение нисходящего отдела грудной аорты. Часто расслоение
              нисходящего отдела грудной аорты распространяется на брюшной
              отдел.
            </p>
            <h2 className='article__p text-center'>
              Причины аневризмы аорты и расслоения аорты
            </h2>
            <p className='article__p'>
              Причинами возникновения аневризмы могут являться такие
              заболевания, как системный атеросклероз, генетически-обусловленные
              заболевания, проявляющиеся в слабости стенки аорты (синдром
              Марфана, синдром Элерса-Данлоса и др.), артериальная гипертензия,
              инфекционные заболевания.
            </p>
            <p className='article__p'>
              Давление крови передается на ослабленную стенку, что приводит к
              прогрессированию (росту) аневризмы и заканчивается разрывом стенки
              аорты. Разрыв аневризмы аорты приводит к сильнейшему артериальному
              кровотечению за пределы сосуда, геморрагическому шоку и смерти
              пациента.
            </p>
            <p className='article__p'>
              Причиной расслоения аорты чаще являются генетически-обусловленная
              слабость стенки сосуда и травмы (ДТП). После повреждения и разрыва
              внутреннего слоя стенки аорты давлением кровь расслаивает стенку
              на значительном протяжении, что приводит к ее разрыву, к нарушению
              кровоснабжения органов в зоне расслоения и ниже расслоения по
              направлению кровотока.
            </p>
            <h2 className='article__p text-center'>
              Симптомы расслоения аорты и аневризмы аорты
            </h2>
            <p className='article__p'>
              Типичных жалоб пациент с неосложненной аневризмой аорты не
              предъявляет. В подавляющем большинстве случаев аневризмы аорты
              обнаруживаются либо в процессе диспансеризации, либо при
              обследовании по поводу других заболеваний. Иногда пациенты с
              аневризмой брюшной аорты ощущают усиленную пульсацию в животе. При
              развитии такого осложнения аневризмы аорты, как разрыв, у пациента
              появляются характерные жалобы – боли в спине, в животе, в
              пояснице, сопровождающиеся крайне низким артериальным давлением,
              бледностью кожи, потливостью и спутанностью сознания, вплоть до
              его потери.
            </p>
            <p className='article__p'>
              При расслоении аорты боли у пациента возникают внезапно, после
              какого-то провоцирующего фактора (иногда – без него),
              располагаются боли в грудной клетке, в спине, между лопаток, боли
              интенсивные, острые, сопровождаются низким артериальным давлением,
              страхом смерти, потерей сознания.
            </p>
            <h2 className='article__p text-center'>
              Диагностика аневризмы аорты
            </h2>
            <p className='article__p'>
              Чаще всего аневризмы аорты обнаруживаются при выполнении УЗИ
              органов брюшной полости, эхокардиографии (УЗИ сердца),
              рентгенографии органов грудной полости, при выполнении
              мультиспиральной компьютерной томографии по поводу другого
              заболевания.
            </p>
            <p className='article__p'>
              При расслоении аорты &quot;золотым стандартом&quot; обследования
              считается мультиспиральная компьютерная томография с контрастом.
            </p>
            <h2 className='article__p text-center'>
              Лечение расслоения аорты. Лечение аневризмы аорты
            </h2>
            <p className='article__p'>
              Показанием к оперативному лечению аневризмы аорты является её
              размер. При достижении диаметра аневризмы брюшной или грудной
              аорты 50 мм пациенту показана консультация специалиста для
              уточнения показаний к оперативному лечению и выбора метода
              лечения, при аневризме восходящего отдела аорты таким показанием
              является 55 мм (50 мм — при генетически-обусловленной слабости
              стенки аорты), при аневризме дуги и нисходящего отдела грудной
              аорты — 55 мм.
            </p>
            <p className='article__p'>
              Показания к оперативному лечению расслоения аорты зависят от
              многих факторов – от сроков расслоения, от протяженности
              расслоения, от наличия нарушения кровоснабжения органов и тканей в
              зоне расслоения и ниже по кровотоку.
            </p>
            <p className='article__p'>
              Существуют два метода лечения патологии аорты:
            </p>
            <ol className='article__ol'>
              <li className='article__li'>
                <p className='article__p'>
                  Эндоваскулярный метод – малотравматичный подход к лечению
                  аневризм дуги и нисходящего отдела грудной аорты либо брюшной
                  аорты (данный вид лечения на данный момент невозможен при
                  аневризме и расслоении восходящего отдела грудной аорты).
                  Аневризма не удаляется, в просвет аневризмы ставится
                  специальная конструкция – стент-графт, раскрывается и
                  закрепляется на месте аневризмы, укрепляя стенки аорты и
                  выключая аневризму из кровотока.
                </p>
                <p className='article__p'>
                  При расслоении стент-графт устанавливается в месте начала
                  разрыва, закрывая &quot;входные ворота&quot; расслоения.
                  Процедуры проводятся через 2х сантиметровый разрез в паху, что
                  позволяет избежать большой операции (открытия грудной клетки
                  или брюшной полости). Операции проводятся без общего наркоза,
                  пациент находится в сознании, на самостоятельном дыхании. Не
                  каждому пациенту с патологией аорты можно помочь данным
                  способом, необходимо, чтобы аорта имела определённую анатомию,
                  что является ограничением данного метода.
                </p>
              </li>
              <li className='article__li'>
                <p className='article__p'>
                  Открытая операция ({' '}
                  <Link
                    href='/treatment/protezirovanie-aorti'
                    text='протезирование аорты'
                  />
                  позволяет оказать помощь пациентам с аневризмой или
                  расслоением аорты любой локализации. Проводится под общей
                  анестезией. Во время операции пораженный участок аорты
                  иссекается и заменяется специальным синтетическим протезом.
                  Ограничением данного метода является травматичность метода, не
                  каждый пациент способен перенести данную операцию.
                </p>
              </li>
            </ol>
            <h2 className='article__p text-center'>Прогноз</h2>
            <p className='article__p'>
              При естественном течении заболевания без операции вероятность
              разрыва аневризмы аорты и продолжительность жизни пациента зависят
              от размера аневризмы. После достижения аневризмой размера в 5 см
              риск разрыва в течение года составляет 1%, при дальнейшем росте
              аневризмы риск увеличивается до 10-30%.
            </p>
            <p className='article__p'>
              В случае разрыва аневризмы аорты летальность в первые сутки
              превышает 50%. При выполнении планового оперативного лечения
              прогноз у пациентов относительно благоприятный, летальность при
              плановом хирургическом лечении – протезировании брюшной аорты –
              составляет около 5,5%, повторное открытое хирургическое лечение
              требуется редко. При плановом эндопротезировании брюшной аорты
              летальность составляет около 1,5%, повторные эндоваскулярные
              вмешательства требуются чаще, чем при открытом оперативном
              лечении. Обязательно – наблюдение сердечно-сосудистого хирурга
              длительно.
            </p>
            <p className='article__p'>
              При расслоении аорты прогноз пациента зависит от локализации
              расслоения. Так при расслоении восходящего отдела аорты
              безоперационная летальность в первые часы составляет 1-2% в час
              (50% в первые двое суток) – тогда как при экстренной операции
              летальность в течение первого месяца снижается с 90% до 30%.
            </p>
            <p className='article__p'>
              При расслоении в нисходящем отделе аорты при отсутствии нарушения
              кровоснабжения нижележащих органов и тканей прогноз благоприятен,
              возможно проведение консервативной терапии, стабилизации пациента
              и подготовке его к плановому оперативному лечению. Летальность при
              плановой операции по поводу расслоения нисходящей аорты составляет
              8% при эндоваскулярном лечении и ~37% при открытом протезировании
              грудной аорты. В послеоперационном периоде прогноз относительно
              благоприятный. Обязательно – длительное наблюдение
              сердечно-сосудистого хирурга.
            </p>
          </article>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
