import Head from "next/head";
import Header from "../../components/Header/Header";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../components/Banner";
import Advantages from "../../components/Advantages";
import Footer from "../../components/Footer/Footer";

export default function RadioAblacia() {
  return (
    <>
      <Head>
        <title>Радиочатотная абляция. Операция РЧА на сердце</title>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta
          name="description"
          content="Радиочастотная катетерная абляция (РЧА) - для пациентов с наличием аритмии и др. проблем с сердцем. Записывайтесь на осмотр и консультацию."
        />
        <meta
          property="og:description"
          content="Радиочастотная катетерная абляция (РЧА) - для пациентов с наличием аритмии и др. проблем с сердцем. Записывайтесь на осмотр и консультацию."
        />
        <meta
          property="og:title"
          content="Радиочатотная абляция. Операция РЧА на сердце."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/radiochastotnaya-ablyaciya"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <div className="Coronarography-page">
          <Greetings
            header="Радиочастотная абляция"
            subheader="молодой, эффективный и малоинвазивный метод радикального лечения тахикардий"
            buttonText="записаться на бесплатный прием"
          />
          <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
          <section className="section__about-op-03 container">
            <h1 className="article__header">Радиочастотая абляция</h1>
            <p className="article__p">
              Радиочастотная абляция часто назначается тем, кто испытывает
              дискомфорт и страх от таких симптомов как приступы учащенного
              сердцебиения, “замирание” в груди, неритмичный пульс, одним словом
              - перебои в работе сердца. Такие жалобы характерны для пациентов с
              наличием аритмии.
            </p>
            <p className="article__p">
              Какие же диагнозы входят в это понятие? В первую очередь это
              фибрилляция и трепетание предсердий (мерцательная аритмия), а
              также экстрасистолия (желудочковая или предсердная), синдром WPW
              (Вольфа-Паркинсона-Уайта), наджелудоковые и желудочковые
              тахикардии. При наличии у Вас одного из перечисленных заболеваний
              мы с радостью можем предложить руку помощи. Если беспокоят перебои
              в работе сердца, но точный диагноз по каким-либо причинам до сих
              пор не установлен - обращайтесь за консультацией к нашим
              специалистам-аритмологам для выявления характера аритмии и подбору
              оптимального метода лечения.
            </p>
            <p className="article__p">
              В Центре кардиохирургии и интервенционной кардиологии проводится
              полная диагностика и современное хирургическое лечение -
              радиочастотная катетерная абляция сердца (РЧА). Данный метод начал
              широко использоваться еще с 1980-х годов, но тогда о такой
              эффективности как сейчас приходилось только мечтать. Для
              правильной постановки диагноза необходимо оценить
              электрокардиографию (ЭКГ), суточное мониторирование ЭКГ
              (холтеровское) и эхокардиографию (Эхо сердца). Если требуется
              уточнение диагноза, то в условиях рентген-операционной проводится
              эндокаридальное (внутрисердечное) электрофизиологическое
              исследование - эндо ЭФИ, которое позволяет с точностью до 99%
              установить характер аритмии и приступить к лечению.
            </p>
            <p className="article__p">
              Так что же собой представляет эндо ЭФИ и операция РЧА на сердце?
              После проведения анестезии, путем прокола в области бедра и
              подключичной области, кардиохирург-аритмолог заводит необходимые
              инструменты-электроды, представляющие собой гибкие провода с
              наконечником, считывающим информацию с внутренней оболочки сердца.
              Под рентген контролем электроды расставляются по схеме в
              предсердиях (правом или левом) и правом желудочке. С помощью
              специальной компьютерной лаборатории для облегчения работы хирурга
              и для диагностики аритмии выполняют 3D модель-реконструкцию камер
              сердца, по которой можно визуально оценить, как проходят
              электрические сигналы, а также учесть индивидуальные анатомические
              особенности.
            </p>
            <p className="article__p">
              После установления точного диагноза дополнительно проводится так
              называемый “лечебный” электрод (катетер) через вышеописанные
              доступы. На его дистальную часть размером 3 мм, подается
              высокочастотный ток (радиочастотный в диапазоне 300 кГц – 1 МГц.)
              для точечного воздействия на очаг аритмии.
            </p>
            <p className="article__p">
              После выполнения операции абляции на сердце Вы остаетесь в
              кардиохирургическом отделении, где проводится послеоперационное
              наблюдение. Но не переживайте, срок госпитализации в среднем
              составляет 2-3 дня, после чего пациента выписывают домой с
              рекомендациями.
            </p>
            <p className="article__p">
              При проведении радиочастотной абляции сердца здоровые ткани не
              травмируются, а рубцуются, клетки сердца восстанавливаются
              самостоятельно, поэтому частота осложнений в Клинике Высоких
              Медицинских технологий не превышает 1,5%.
            </p>
            <p className="article__p">
              Восстановительный период после операции РЧА на сердце зависит не
              только от успешно проведенной операции, но и от соблюдения
              рекомендаций, не забывайте им следовать и своевременно посещать
              кардиолога!
            </p>
          </section>
          <Advantages />
        </div>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}