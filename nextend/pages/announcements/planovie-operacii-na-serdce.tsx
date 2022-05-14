import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Плановые операции на сердце',
    description:
      'Записывайтесь на плановые операции на сердце к опытным кардиохирургам клиники ВМТ им. Н.И.Пирогова',
    pageLink:
      'https://heartteamspb.com/announcements/planovie-operacii-na-serdce',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <section className='container mt'>
        <h1>Плановые операции на сердце</h1>
        <p>
          В нашем <Link href='/' text='центре кардиохирургии' /> и
          интервенционной кардиологии продолжается оказание плановой
          хирургической помощи пациентам с патологией периферических сосудов.
          Уже выполнено более 50 эндоваскулярных, гибридных и реконструктивных
          вмешательств на брюшной аорте, брахиоцефальных артериях, артериях
          нижних конечностей и сосудистом доступе для гемодиализа.
        </p>
        <p>
          В ближайшее время будет выполнено несколько редких{' '}
          <Link href='/operacii-na-serdce' text='операций на сердце' /> при
          периферических аневризмах сложной локализации.
        </p>
        <p>
          Помимо Санкт-Петербурга, бесплатную помощь получают пациенты{' '}
          <strong>из 30 регионов РФ</strong>, при этом география субъектов
          постоянно расширяется. Оптимальное планирование госпитализации
          позволяет не допускать ожидания пациентом операции более одного
          месяца.
        </p>
        <p>
          Для записи на прием, звоните по телефону <PhoneLink />
        </p>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Announcement;
