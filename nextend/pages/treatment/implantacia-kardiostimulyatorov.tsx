import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { NextPage } from 'next';

const Article: NextPage = () => {
  const SEODetails = {
    title:
      'Имплантация кардиостимуляторов. Операции по установке кардиостимулятора сердца.',
    description:
      'Операции по имплантации кардиостимуляторов проводятся опытными специалистами клиники ВМТ им Н.И.Пирогова. Мы выполнили более 4000 операций кардиохирургического профиля.',
    pageLink:
      'https://heartteamspb.com/treatment/implantacia-kardiostimulyatorov',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Имплантация кардиостимуляторов'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <section className='container'>
        <h1>Имплантация кардиостимуляторов</h1>
        <p>
          Имплантация кардиостимуляторов в клинике ВМТ им Н.И. Пирогова
          проводится опытными специалистами – докторами и кандидатами
          медицинских наук, регулярно стажирующимися в ведущих клиниках Северной
          Америки и Европы. Обмениваясь опытом с западными коллегами, наши
          специалисты активно участвуют в работе Европейской, Мировой,
          Скандинавской и Азиатской ассоциаций сердечно-сосудистых и торакальных
          хирургов.
        </p>
        <p>
          На сегодняшний день более двух миллионов пациентов по всему миру
          являются носителями постоянного имплантируемого устройства и,
          благодаря этому, могут вести практически не ограниченный образ жизни.
        </p>
        <p>
          Основной целью имплантации кардиостимулятора является устранение
          угрожающих Вашей жизни аритмий и, как следствие, улучшение качества
          жизни.
        </p>
        <p>
          Наиболее распространенное состояние, при котором требуется применение
          электрокардиостимулятора, называется брадикардия - слишком низкая
          частота сердечных сокращений. К возможным симптомам также относится
          головокружение, быстрая утомляемость, одышка, предобморочные состояния
          и обмороки. Брадикардия обычно вызывается одним из следующих
          заболеваний сердца: синдром слабости синусового узла (СССУ) –
          синусовый узел посылает импульсы редко, через слишком большие или
          нерегулярные интервалы времени и блокада сердца – нарушение
          нормального прохождения электрических импульсов сердца, которая может
          произойти на различных уровнях проводящей системы. О брадикардии, как
          о болезни, мы говорим тогда, когда ритм имеет очень низкую частоту, не
          реагирует на физическую нагрузку или в сокращениях сердца возникают
          большие паузы, которые могут достигать и даже превышать 3 и более
          секунды. Когда имеется документальное подтверждение на ЭКГ или
          суточном мониторе, определяются показания для имплантации
          электрокардиостимулятора (ЭКС).
        </p>
        <p>
          Теперь кратко остановимся на самой операции по установке
          кардиостимулятора сердца. Это хирургическая процедура, при которой под
          местной анестезией выполняется небольшой разрез в правой или левой
          подключичной области. В зависимости от того, какой именно
          кардиостимулятор будет Вам имплантирован, один, два или три электрода
          будут введены через вену (путем прокола подключичной вены) и
          установлены внутри сердца под контролем рентгенографии.
        </p>
        <p>
          Одним из самых сложных моментов при операции по установке
          кардиостимулятора является закрепление кончика электрода в предсердии
          и желудочке чтобы получить хороший контакт. Задача состоит в том,
          чтобы найти наиболее чувствительное место, и в то же время, получить
          хороший сигнал с внутренней поверхности сердца, регистрируемую с
          устанавливаемых электродов. После фиксации электродов они подключаются
          к стимулятору, который помещается в сформированное ложе под фасцией
          жировой клетчатки или под мышцы грудной клетки в области доступа в
          подключичной области.
        </p>
        <p>
          Длительность госпитализации чаще всего не превышает 3-х дней, после
          чего пациент выписывается с рекомендациями. Индивидуальные особенности
          каждого имплантируемого устройства подразумевают под собой
          периодическую проверку и настройку параметров для максимально
          эффективной работы электро кардиостимулятора сердца (3-6-12 месяцев).
        </p>
        <p>
          В клинике Высоких медицинских технологий проводится имплантация и
          программирование высокотехнологичных и только импортных
          кардиостимуляторов фирм Medtronic (США) и St.Jude Medical (США).
        </p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Article;