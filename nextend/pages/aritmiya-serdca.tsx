import { NextPage } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';

const ForPatientInfo: NextPage = () => {
  const SEODetails = {
    title: 'Аритмия сердца. Симтомы, причины, лечение аритмии.',
    description:
      'Разновидности аритмии: брадиаритмия и тахиаритмия. Диагностика и лечение нарушений ритма сердца. Записывайтесь на прием к аритмологу в Санкт-Петербурге.',
    pageLink: 'https://heartteamspb.com/aritmiya-serdca',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='container mt'>
        <article>
          <section>
            <h1>
              Аритмия сердца.
              <br />
              Симтомы, причины, лечение аритмии
            </h1>
            <p>
              На днях специалист нашего центра, сердечно-сосудистый хирург,
              аритмолог, кандидат медицинских наук Евгений Игоревич Зубарев дал
              интервью порталу doctorpiter.ru, в котором рассказал о том, как
              рассчитать свой максимальный пульс, может ли устать сердце за
              время жизни человека, а также поделился информацией о проблеме
              аритмии и подсказал пути ее решения.
            </p>
          </section>

          <section>
            <h2>Болезни сердца не всегда приходят с возрастом</h2>
            <p>
              <strong>
                - Сердце функционирует и днем, и ночью, то есть целые сутки. Не
                устает ли оно за всю жизнь человека?
              </strong>
            </p>
            <p>
              - Усталости, в прямом смысле этого слова, нет. Сердце — мышечный
              орган, а, как мы знаем, мышца — это возбудимая ткань,
              подчиняющаяся электрохимическим процессам. Импульс электрический
              заставляет ее сокращаться, но без большой физической нагрузки,
              можно сказать, оно «отдыхает».
            </p>
            <p>
              Само сокращение желудочков (систола) происходит за интервал в 0,3
              секунды. Остальная часть времени - расслабление (диастола). Даже
              когда нагрузка на сердце увеличивается, и оно начинает биться
              чаще, время систолы почти не меняется, а вот время «отдыха»
              уменьшается. Именно поэтому сердце не может долго работать при
              предельных физических нагрузках.
            </p>
            <p>
              Чтобы быть в тонусе и не «уставать», клетки мышечной ткани сердца
              содержат в разы больше энергетических ресурсов, чем, например,
              клетки мышцы скелетной.
            </p>
            <p>
              Если говорить про «усталость» сердца в переносном смысле, то,
              конечно, с возрастом оно понемногу «устает» — нарушается ритм,
              снижается его насосная функция и так далее.
            </p>
            <p>
              Можно сказать, что болезни приходят с возрастом. Но не всегда.
            </p>
            <p>
              <strong>
                - Есть ли отличия в ритме женского и мужского сердца?
              </strong>
            </p>
            <p>
              - Не совсем. Да их показатели могут отличаться, но в целом сердце
              работает и у женщин, и у мужчин одинаково. Если же речь идет о
              патологиях, то женщины и мужчины могут иметь разные
              предрасположенности к тем или иным{' '}
              <Link href='/diseases' text='заболеваниям сердца' />.
            </p>
            <p>
              <strong>- Что можно понять по ритму сердца?</strong>
            </p>
            <p>
              Прежде всего, опытный врач может поставить точный диагноз. Ритм
              сердца является одним из важнейших параметров его работы. Одна из
              структур сердца — синусовый узел — генерирует электрические
              сигналы, которые задают определенную частоту сердечных сокращений.
              Поэтому правильный ритм сердца называется синусовый. Любой ритм,
              отличающийся от синусового — патология, которая называется
              аритмией.
            </p>
            <p>
              У здоровых людей тоже бывают нарушения ритма, но часто это бывает
              следствием другого, более серьезного заболевания как других
              органов, так и самого сердца. Поэтому характер ритма сердца
              подскажет опытному специалисту истинную причину нарушения, что
              поможет вести более точный диагностический поиск.
            </p>
          </section>

          <section>
            <h2>Аритмия. Появление тромбов при аритмии</h2>
            <p>
              <strong>
                - Какие существуют нарушения ритма? Есть ли среди них
                «неопасные»?
              </strong>
            </p>
            <p>
              - В основном, нарушения ритма сердца условно делятся на две
              большие группы — частое сердцебиение (тахиаритмия), и редкое
              сердцебиение (брадиаритмия).
            </p>
            <p>
              <strong>Брадиаритмии</strong> возникают при нарушении процесса
              генерации электрического импульса в синусовом узле, а также при
              нарушении его распространения по проводящей системе.
            </p>
            <p>
              К брадиаритмиям относятся такие заболевания, как синдром слабости
              синусового узла (СССУ), АВ блокады. Лечение этих болезней
              проводится с помощью электрокардиостимуляции. В сердце
              имплантируется электронное устройство (
              <Link
                href='/treatment/implantacia-kardiostimulyatorov'
                text='электрокардиостимуляторы'
              />
              , ЭКС), которое корректирует ритм сердца в автоматическом режиме.
            </p>
            <p>
              Среди <strong>тахиаритмий</strong> встречаются:
            </p>
            <ul>
              <li>трепетание предсердий</li>
              <li>фибрилляция предсердий</li>
              <li>желудочковая тахикардия</li>
              <li>предсердная тахикардия</li>
              <li>фибрилляция желудочков</li>
            </ul>
            <p>
              Одной из самых распространенных тахиаритмий является{' '}
              <Link
                href='/diseases/fibrilyaciya-predcerdiy'
                text='фибрилляция предсердий'
              />
              . Для этого вида аритмии характерно частое и нерегулярное
              сердцебиение.
            </p>
            <p>
              При ней предсердия неправильно сокращаются, что чаще всего
              приводит к образованию тромбов. Тромбы, покинувшие сердце с током
              крови, могут привести к инсульту или инфаркту других органов,
              вызвать инвалидность или смерть человека.
            </p>
            <p>
              Фибрилляция предсердий также существенно снижает качество жизни
              человека, может вызвать прогрессирование сердечной недостаточности
              и потому требует частых госпитализаций. Это серьезная проблема
              современности – от неё страдает около 4% населения Земли.
            </p>
            <p>
              Желудочковая тахикардия — опасная для жизни человека аритмия.
              Причина ее заключается во врожденных генетических мутациях
              (синдром удлиненного и укороченного интервала QT, синдром Бругада,
              аритмогенная дисплазия правого желудочка, катехоламинэргическая
              полиморфная желудочковая тахикардия) или она является результатом
              одного из приобретенного заболевания сердца — инфаркта миокарда,
              перикардита, миокардита,{' '}
              <Link
                href='/diseases/poroki-serdca'
                text='приобретенных пороков сердца'
              />
              . Данная тахикардия и носит свое название потому, что очаг аритмии
              находится непосредственно в желудочках.
            </p>
            <p>
              Частота сердцебиения может превышать 200-220 ударов в минуту. При
              таком высоком ритме сердце не успевает наполниться кровью, что
              ведет к быстрому снижению артериального давления и потере
              сознания. Главная опасность желудочковой тахикардии заключается в
              том, что она может перейти в фибрилляцию желудочков — это
              смертельная аритмия, когда кровообращение полностью
              останавливается и смерть наступает в течение нескольких минут. В
              этот момент только экстренная электрическая дефибрилляция сердца,
              то есть нанесение электрического разряда, который «запустит»
              работу сердца, становится единственным способом спасти человека.
            </p>
            <p>
              Совсем безопасных аритмий нет. Есть опасные, как, пример,
              фибрилляция предсердий, очень опасные, как желудочковая тахикардия
              и есть наименее опасные, такие как экстрасистолия.
            </p>
            <p>
              Однако, даже экстрасистолия способна значительно ухудшить насосную
              функцию сердца, а также спровоцировать фибрилляцию предсердий или
              желудочковую тахикардию.
            </p>
          </section>

          <section>
            <h2>Выявление аритмии – Электрокардиограмма (ЭКГ)</h2>
            <p>
              <strong>
                - Часто люди говорят о том, что у них «сердце будто выпрыгивает
                из груди». Возможно ли по такому описанию понять, какой симптом
                они имеют в виду?
              </strong>
            </p>
            <p>
              - При таких формулировках врачу важно всегда уточнять, что
              подразумевает пациент. Если при расспросе выясняется, что у
              пациента ощущается ускоренное сердцебиение — возможно, это
              симптомы одной из пароксизмальных тахикардий (фибрилляция
              предсердий, наджелудочковая тахикардия). Если под понятием
              «выпрыгивает» человек подразумевает ощущение ударов, толчков,
              «кувыркание», замирания или «переворачивание» сердца — скорее
              всего мы имеем дело с экстрасистолией.
            </p>
            <p>
              Вообще, с «аритмологическими» пациентами важен первичный контакт и
              корректный, правильный сбор жалоб и анамнеза, чтобы врач мог с
              наибольшей вероятностью поставить верный диагноз.
            </p>
            <p>
              <strong>
                - Как поставить точный диагноз, связанный с нарушением ритма
                сердца?
              </strong>
            </p>
            <p>
              - Установить вид аритмии можно только одним способом — это снять
              электрокардиограмму (ЭКГ). Но проблема в том, что аритмии не
              проявляют себя постоянно, поэтому снятая в состоянии покоя ЭКГ
              может не показать патологии. В этой связи важно выполнить ЭКГ
              именно в тот момент, когда у пациента проявляются симптомы
              аритмии.
            </p>
            <p>
              Если аритмию не удается зафиксировать с помощью обычной ЭКГ,
              выполняют длительную запись ЭКГ (Холтеровское мониторирование
              ЭКГ). Здесь мониторинг проходит в течение одних или нескольких
              суток.
            </p>
            <p>
              Последние несколько лет идет активное развитие технологий
              сверхдлительного мониторирования ЭКГ на основе специального
              нательного белья с интегрированными электродами,
              патч-мониторирование.{' '}
            </p>
            <p>
              Также разработаны подкожны мониторы ЭКГ — небольшие устройства
              размером с usb-накопитель, имплантируемые под кожу на определенный
              срок, который даже может растянуться до нескольких лет с целью
              длительного мониторирования ЭКГ и автоматического распознавания
              аритмии. Как только диагноз установлен, устройство извлекают.
            </p>
            <p>
              Несмотря на простоту установки диагноза с помощью ЭКГ, важно
              помнить, что аритмия — это часто следствие другого заболевания,
              поэтому пациенту необходимо проходить комплексное обследование
              сердечно-сосудистой системы, а иногда и других систем организма.
            </p>
          </section>

          <section>
            <h2>Операция на сердце без разрезов и наркоза</h2>
            <p>
              <strong>
                - Возможно ли привести в норму нарушенное сердцебиение, какие
                методики для этого существуют?
              </strong>
            </p>
            <p>
              - Сейчас существует широкий набор опций и технологий для
              восстановления и поддержания правильного ритма сердца. Уже в
              течении десятилетий применяется имплантация искусственного
              водителя ритма — электрокардиостимулятора, который полностью
              восполняет функцию по генерации или способствует проведению
              электрических импульсов, которые сокращают сердечную мышцу. В
              настоящее время это высокотехнологичные небольшие устройства,
              имеющие электронный блок, батарею и электроды.
            </p>
            <p>
              Заряда батареи обычно хватает на более, чем 10 лет, а электроды
              могут функционировать не один десяток лет. По мере истощения
              батареи кардиостимулятор меняют.
            </p>
            <p>
              Еще больше возможностей мы имеем в лечении тахиаритмий. Во-первых,
              есть лекарства. Они могут быть не всегда достаточно эффективны,
              могут плохо переноситься или иметь побочные эффекты. Однако,
              большинство людей начинают лечение именно с медикаментозной
              терапии.
            </p>
            <p>
              Если таблетки не помогают или не могут длительно применяться
              (например, при планировании беременности), возможно хирургическое
              лечение —{' '}
              <Link
                href='/treatment/radiochastotnaya-ablyaciya'
                text='радиочастотная аблация'
              />{' '}
              аритмогенных зон (РЧА).
            </p>
            <p>
              РЧА — эффективный и технологичный способ избавиться от аритмии.
              Данная операция проводится без разрезов, при помощи катетеров,
              которые врачи заводят в сердце через прокол сосудов бедра. После
              этого с помощью системы 3D навигационного картирования
              устанавливается точное расположение патологического очага,
              наносится радиочастотное воздействие, и аритмия устраняется. Часто
              после такой операции, аритмия больше не возвращается. В основном
              проведение таких процедур сейчас даже не требует наркоза.
            </p>
            <p>
              Если же требуется экстренная помощь в восстановлении ритма
              (например, при приступе фибрилляции предсердий), то применяется
              электроимпульсная терапия (ЭИТ). Процедура проводится во время
              короткого пятиминутного наркоза и имеет почти стопроцентную
              эффективность.
            </p>
            <div className='marked-container'>
              <p>
                Самое главное, что все эти операции проводятся по федеральным
                «квотам» и доступны абсолютно бесплатно для всех жителей России.
              </p>
            </div>
            <p>
              Любой желающий может обратиться в наш Центр кардиохирургии и
              интервенционной кардиологии по номеру телефона <PhoneLink />,
              записаться на прием и получить лечение в современной клинике в
              Петербурге.
            </p>
          </section>

          <section>
            <h2>Определяем свой максимальный пульс</h2>
            <p>
              <strong>
                - Какие нарушения ритма самые опасные для здоровья человека?
              </strong>
            </p>
            <p>
              - Любое нарушение ритма может представлять ту или иную опасность.
              Но наибольшую угрозу представляют те, которые потенциально могут
              привести к летальному исходу. Это значимые брадикардии, которые
              требуют имплантации кардиостимулятора. Иначе выраженная
              брадиаритмия может прогрессировать вплоть до остановки сердца.
            </p>
            <p>
              Большую опасность представляют фибрилляция желудочков, а также
              желудочковая тахикардия. Они являются причинами внезапной
              сердечной смерти (ВСС). Она занимает 1/4 от всех человеческих
              смертей от сердечно-сосудистых заболеваний в мире.
            </p>
            <p>
              <strong>
                - Что будет, если нарушенное сердцебиение не лечить?
              </strong>
            </p>
            <p>
              - Большинство аритмий прогрессируют со временем: например, при
              экстрасистолии может увеличиваться количество экстрасистол, при
              фибрилляции предсердий увеличивается частота и продолжительность
              приступов, при брадиаритмиях редкий пульс начинает приводить к
              появлению обмороков. Также существуют быстро проявляющиеся
              последствия, но не вполне очевидные: это снижение качества жизни,
              риск получения инвалидности, риск инсульта, смерти, увеличение
              количества госпитализаций, развитие сердечной недостаточности,
              нагрузка на систему здравоохранения.
            </p>
            <p>
              <strong>
                - Сколько сердце может работать на максимуме без последствий?
              </strong>
            </p>
            <p>
              - На это влияет множество факторов: возраст, рост, вес, пол,
              уровень физической подготовки. Чтобы рассчитать свой максимальный
              ЧСС, воспользуйтесь простой формулой: «220 минус возраст».
              Полученная цифра — это и есть максимальный пульс, на базе которого
              можно рассчитать пульсовые зоны тренировки. Стоит предупредить,
              что тренировки в пульсовой зоне 90-100% — это удел
              профессиональных спортсменов, неподготовленным людям в такой зоне
              тренироваться нельзя.
            </p>
          </section>
        </article>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default ForPatientInfo;