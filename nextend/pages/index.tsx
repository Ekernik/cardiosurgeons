import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import NewsSlider from '@/components/NewsSlider';
import Contacts from '@/components/Contacts';
import ReviewSlider from '@/components/ReviewSlider';
import SEO from '@/components/SEO';
import { NextPage } from 'next';

const App: NextPage = () => {
  const SEODetails = {
    title: 'Центр кардиохирургии и интервенционной кардиологии',
    description:
      'Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы.',
    pageLink: 'https://heartteamspb.com',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Центр кардиохирургии и интервенционной кардиологии'
        subheader='Медицина, доступная каждому'
        buttonText='Записаться на прием'
      />
      <Banner />
      <main className='container'>
        <article>
          <h1>Центр кардиохирургии и&nbsp;интервенционной кардиологии</h1>
          <p>
            Центр кардиохирургии и интервенционной кардиологии приглашает
            на&nbsp;прием, <Link href='/diagnostics' text='диагностику' />{' '}
            и&nbsp;
            <Link href='/treatment' text='лечение' /> пациентов
            с&nbsp;заболеваниями сердца и&nbsp;сердечно-сосудистой системы.
          </p>
          <p>
            В нашей клинике работают специалисты разных направлений
            деятельности: кардиологии, кардиохирургии, аритмологии, сосудистой
            хирургии, кардиоанестезиологии и&nbsp;др. Благодаря их слаженной
            работе, процесс лечения и&nbsp;последующего наблюдения пациентов
            происходит в&nbsp;кратчайшие сроки. Сотрудники кардиохирургического
            отделения работают в&nbsp;единой команде с&nbsp;хирургами,
            терапевтами, неврологами на&nbsp;всех этапах
            лечебно-диагностического процесса, поэтому при&nbsp;выявлении
            у&nbsp;пациента острой патологии, он&nbsp;будет незамедлительно
            направлен на&nbsp;консультацию к&nbsp;профильному специалисту.
          </p>
          <p>
            Для комфортного пребывания пациентов наше отделение располагает
            одноместными, двух- и&nbsp;трехместными палатами со&nbsp;всеми
            удобствами.
          </p>
          <p>
            Для записи на прием к специалистам Центра кардиохирургии и
            интервенционной кардиологии, звоните по телефону: <PhoneLink />
          </p>
        </article>
      </main>
      <NewsSlider />
      <ReviewSlider />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
