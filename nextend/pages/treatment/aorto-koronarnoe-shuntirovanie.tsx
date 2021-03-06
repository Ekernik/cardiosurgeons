import SEO from '@/components/SEO';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Greetings from '@/components/Greetings';
import Contacts from '@/components/Contacts';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';

const Article: NextPage = () => {
  const SEODetails = {
    title:
      'Аортокоронарное шунтирование сердца. Операции аорто-коронарного шунтирования.',
    description:
      'Проводим операции коронарного шунтирования в Санкт-Петербурге. Профессиональные врачи, современное оборудование. Обратитесь к нам за консультацией по вопросам аортокоронарного шунтирования.',
    pageLink:
      'https://heartteamspb.com/treatment/aorto-koronarnoe-shuntirovanie',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Аортокоронарное шунтирование'
        subheader='самая частая кардиохирургическая операция'
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <section className='container'>
        <h1>Аортокоронарное шунтирование</h1>
        <p>
          Аортокоронарное шунтирование (АКШ) - операция, позволяющая
          восстановить нормальный кровоток в артериях сердца (коронарных
          артериях), путём обхода места сужения (стеноза) сосуда с помощью
          шунтов.
        </p>
        <p>
          Операция аортокоронарного шунтирования относится к хирургическим
          методам коррекции ишемической болезни (ИБС), целью которой является
          прямое увеличение кровотока к мышечным клеткам сердца - миокарду.
        </p>
        <p>
          Одним из наиболее грозных осложнений ИБС, характеризующейся высокой
          летальностью, является инфаркт миокарда (ИМ). Ежегодно в мире
          отмечается более 15 миллионов новых случаев инфаркта миокарда,
          особенно актуальной является проблема высокой смертности среди
          трудоспособного населения. “Золотым” стандартом диагностики ИБС
          является{' '}
          <Link href='/diagnostics/coronarographia' text='коронарография' />, по
          результатам которой хирург оценивает степень сужения коронарных
          сосудов и возможность для оперативного лечения.
        </p>
        <p>
          При поступлении в клинику проводится полный спектр обследований,
          включающий в себя: эхокардиографию (ЭХО сердца), УЗИ брахиоцефальных
          (шейных) сосудов, компьютерная томография (КТ) органов грудной полости
          и средостения и УЗИ сосудов нижних конечностей. Вас обязательно
          осмотрит лечащий кардиолог, анестезиолог и бригада оперирующих
          хирургов. Подготовка к операции коронарного шунтирования сосудов
          сердца обычно занимает от 1 до 3 дней (исключая экстренные показания).
        </p>
        <p>
          Кратко об аортокоронарном шунтировании (АКШ). Прежде всего, важно
          подчеркнуть, что коронарное шунтирование сосудов сердца – это
          микрохирургическая операция, поскольку хирург работает на артериях
          диаметром 1,0-3,5мм.
        </p>
        <p>
          Суть операции заключается в создании обходного пути для крови, минуя
          пораженный (стенозированный или окклюзированный) сегмент коронарной
          артерии. Существует два основных метода создания обходного пути:
          маммарокоронарное шунтирование (с использование собственной внутренней
          грудной артерии) и шунтирование аутовенозным (собственной веной) или
          аутоартериальным (собственной артерией) трансплантатом (кондуитом).
          Разрез, обеспечивающий доступ к сердцу, пройдёт по средней линии
          грудины. Второй разрез или разрезы, обычно выполняют на ногах (голень
          и бедро), а в некоторых случаях и на руках (предплечье). Именно там
          хирурги возьмут часть вены или артерии, которая будет использована для
          шунтирования.
        </p>
        <p>
          Все время операции шунтирования сердца Вы будете находиться под общим
          многокомпонентным наркозом. Пока кардиохирурги выполняют свою часть
          работы, сердце “отдыхает” под защитой аппарата искусственного
          кровообращения и кардиоплегического раствора. После успешно
          проведенной операции пациент переводится в отделение реанимации, где
          будет обеспечено постоянное наблюдение с помощью специального
          оборудования. На следующий день, в случае стабильного состояния,
          осуществляется перевод на профильное кардиохирургическое отделение,
          где постепенно происходит восстановительный период. Ежедневно
          хирургами проводятся перевязки послеоперационных ран. Обычно больные
          проводят в клинике 7-9 дней, но сроки пребывания могут варьироваться и
          зависят, прежде всего, от строгого соблюдения всех рекомендаций. Вы
          будете замечать улучшение общего состояния и прилив сил с каждым днем.
        </p>
        <p>
          Довольно часто больные чувствуют при выписке страх и растерянность,
          ощущая себя в безопасности под присмотром опытных врачей в клинике. Вы
          должны помнить, что лечащий врач не отпустит Вас до тех пор, пока не
          будет уверен в стабилизации состояния и в том, что дальнейшее
          выздоровление должно проходить в домашних условиях.
        </p>
        <p>
          Если вы хотите получить консультацию по операции аортокоронарного
          шунтирования, записаться на предварительный осмотр в нашу клинику или
          узнать, сколько стоит операция по шунтированию сердца и есть ли
          возможность получения данной процедуры по Федеральной квоте или ОМС,
          позвоните нам по телефону: <PhoneLink /> (09:00&#8209;21:00).
        </p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Article;
